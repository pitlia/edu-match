<?php

use App\Http\Controllers\EduMatchController;
use Illuminate\Support\Facades\Route;

// Halaman Utama / Dashboard PPDB
Route::get('/', [EduMatchController::class, 'index'])->name('dashboard');

// Tes Penjurusan (SPK SMARTER)
Route::get('/tes-penjurusan', [EduMatchController::class, 'assessment'])->name('assessment.form');
Route::post('/tes-penjurusan', [EduMatchController::class, 'storeAssessment'])->name('assessment.store');
Route::get('/tes-penjurusan/hasil/{id}', [EduMatchController::class, 'result'])->name('assessment.result');

// Katalog Program Keahlian
Route::get('/katalog-jurusan', [EduMatchController::class, 'majorsCatalog'])->name('majors.catalog');

// Pendaftaran Peserta Didik Baru (PPDB)
Route::get('/pendaftaran', [EduMatchController::class, 'registerForm'])->name('registration.form');
Route::post('/pendaftaran', [EduMatchController::class, 'storeRegistration'])->name('registration.store');
Route::get('/pendaftaran/bukti/{number}', [EduMatchController::class, 'registrationProof'])->name('registration.proof');

// Modul Riset & Validasi Empiris TA (Ground Truth & ROC Analysis)
Route::get('/validasi-ta', [EduMatchController::class, 'simulation'])->name('simulation.lab');
