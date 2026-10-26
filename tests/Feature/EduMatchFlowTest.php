<?php

namespace Tests\Feature;

use App\Models\Major;
use Database\Seeders\EduMatchSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EduMatchFlowTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(EduMatchSeeder::class);
    }

    public function test_dashboard_page_loads_successfully(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_assessment_page_loads_successfully(): void
    {
        $response = $this->get('/tes-penjurusan');
        $response->assertStatus(200);
    }

    public function test_submit_assessment_computes_smarter_and_redirects(): void
    {
        $payload = [
            'student_name' => 'Budi Santoso',
            'student_nisn' => '0098765432',
            'phone' => '081299998888',
            'academic' => [
                'MAT' => 95,
                'IPA' => 88,
                'BIND' => 80,
                'BING' => 85,
            ],
            'riasec_answers' => [
                'q_i1' => ['category' => 'RIASEC_I', 'value' => 5],
                'q_i2' => ['category' => 'RIASEC_I', 'value' => 5],
                'q_c1' => ['category' => 'RIASEC_C', 'value' => 5],
            ],
        ];

        $response = $this->post('/tes-penjurusan', $payload);
        $response->assertStatus(302);

        $this->assertDatabaseHas('assessments', [
            'student_name' => 'Budi Santoso',
        ]);
    }

    public function test_registration_flow_and_proof_generation(): void
    {
        $major = Major::first();

        $payload = [
            'full_name' => 'Siti Aisyah',
            'nisn' => '0011223344',
            'email' => 'siti@example.com',
            'phone' => '081300001111',
            'origin_school' => 'SMPN 2 Karanganyar',
            'first_choice_major_id' => $major->id,
        ];

        $response = $this->post('/pendaftaran', $payload);
        $response->assertStatus(302);

        $this->assertDatabaseHas('registrations', [
            'full_name' => 'Siti Aisyah',
            'nisn' => '0011223344',
        ]);
    }

    public function test_simulation_lab_loads_successfully(): void
    {
        $response = $this->get('/validasi-ta');
        $response->assertStatus(200);
    }
}
