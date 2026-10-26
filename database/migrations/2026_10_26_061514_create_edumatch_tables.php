<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Majors (4 Program Keahlian SMK)
        Schema::create('majors', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique(); // RPL, DKV, TB, ATPH
            $table->string('name');
            $table->text('description');
            $table->integer('quota')->default(72);
            $table->integer('enrolled_count')->default(0);
            $table->json('facilities')->nullable();
            $table->json('career_prospects')->nullable();
            $table->string('badge_color')->default('blue');
            $table->string('icon')->default('code');
            $table->timestamps();
        });

        // 2. Criteria (Kriteria Akademik & RIASEC Minat Bakat)
        Schema::create('criteria', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique(); // MAT, IPA, BIND, BING, RIASEC_R, RIASEC_I, RIASEC_A, RIASEC_S, RIASEC_E, RIASEC_C
            $table->string('name');
            $table->string('category'); // academic | psychometric
            $table->enum('type', ['benefit', 'cost'])->default('benefit');
            $table->double('min_val')->default(0);
            $table->double('max_val')->default(100);
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // 3. Major Criteria Priority & ROC Weights (Multi-Profil Kejuruan)
        Schema::create('major_criteria_weights', function (Blueprint $table) {
            $table->id();
            $table->foreignId('major_id')->constrained('majors')->onDelete('cascade');
            $table->foreignId('criteria_id')->constrained('criteria')->onDelete('cascade');
            $table->integer('rank_order'); // Prioritas 1..K
            $table->decimal('roc_weight', 8, 4); // Nilai bobot ROC
            $table->timestamps();
            $table->unique(['major_id', 'criteria_id']);
        });

        // 4. Assessments (Hasil Tes Penjurusan Siswa)
        Schema::create('assessments', function (Blueprint $table) {
            $table->id();
            $table->string('session_id')->index();
            $table->string('student_name');
            $table->string('student_nisn')->nullable();
            $table->string('phone')->nullable();
            $table->json('academic_scores'); // {MAT: 85, IPA: 80, ...}
            $table->json('riasec_answers'); // raw answers or scores per category
            $table->json('criteria_values'); // normalized/mapped values per criteria
            $table->json('results'); // {scores: {RPL: 88.5, DKV: 72.3, ...}, rank: [...]}
            $table->foreignId('recommended_major_id')->nullable()->constrained('majors');
            $table->foreignId('alternative_major_id')->nullable()->constrained('majors');
            $table->timestamps();
        });

        // 5. Registrations (Pendaftaran PPDB Siswa)
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();
            $table->string('registration_number')->unique();
            $table->foreignId('assessment_id')->nullable()->constrained('assessments')->nullOnDelete();
            $table->string('full_name');
            $table->string('nisn');
            $table->string('email')->nullable();
            $table->string('phone');
            $table->string('origin_school');
            $table->foreignId('first_choice_major_id')->constrained('majors');
            $table->foreignId('second_choice_major_id')->nullable()->constrained('majors');
            $table->enum('status', ['draft', 'submitted', 'verified', 'accepted', 'rejected'])->default('submitted');
            $table->json('documents')->nullable(); // info upload KK, ijazah, pasfoto
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
        Schema::dropIfExists('assessments');
        Schema::dropIfExists('major_criteria_weights');
        Schema::dropIfExists('criteria');
        Schema::dropIfExists('majors');
    }
};
