<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::get('', [TestController::class, 'index'])->name('name');

    Route::get('{test}', [TestController::class, 'show'])->name('show')->where('test', '[0-9]+');;

    Route::get('{test}/pass', [TestController::class, 'testPass'])->name('pass')->where('test', '[0-9]+');;

    Route::post('{test}/pass', [TestController::class, 'storeTestPass'])->name('pass.store')->where('test', '[0-9]+');
});
