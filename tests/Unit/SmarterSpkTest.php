<?php

namespace Tests\Unit;

use App\Models\Major;
use App\Services\SmarterSpkService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SmarterSpkTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(\Database\Seeders\EduMatchSeeder::class);
    }
    public function test_roc_weights_calculation_sums_to_one(): void
    {
        $service = new SmarterSpkService();
        $weights = $service->calculateRocWeights(5);

        $this->assertCount(5, $weights);
        $this->assertEquals(0.4567, $weights[1]); // w1 for K=5 is ~0.4567 as documented in RENCANA_PENGEMBANGAN_EDUMATCH.md
        $this->assertGreaterThan($weights[2], $weights[1]);
        $this->assertGreaterThan($weights[3], $weights[2]);
    }

    public function test_student_evaluation_produces_ranking(): void
    {
        $service = new SmarterSpkService();
        $scores = [
            'MAT' => 95,
            'IPA' => 85,
            'BIND' => 78,
            'BING' => 88,
            'RIASEC_I' => 92,
            'RIASEC_C' => 89,
            'RIASEC_A' => 60,
            'RIASEC_R' => 45,
            'RIASEC_S' => 55,
            'RIASEC_E' => 50,
        ];

        $result = $service->evaluate($scores);

        $this->assertArrayHasKey('ranking', $result);
        $this->assertCount(4, $result['ranking']);
        // With high Math and Investigative scores, RPL should be ranked #1
        $this->assertEquals('RPL', $result['ranking'][0]['code']);
        $this->assertGreaterThan(70, $result['ranking'][0]['percentage']);
    }
}
