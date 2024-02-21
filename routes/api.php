<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\TestController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::post('/upload-image', [ImageController::class, 'store']);

    Route::get('tests', [TestController::class, 'index'])->name('tests.name');

    Route::get('tests/{test}', [TestController::class, 'show'])->name('tests.show');

    Route::get('tests/{test}/pass', [TestController::class, 'testPass'])->name('tests.pass');
});
