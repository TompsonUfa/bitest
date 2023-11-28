<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ModerController;

Route::group(['middleware' => 'auth:sanctum'], function (){

    Route::get('', [ModerController::class, 'index'])->name('moder.index');

    Route::post('', [ModerController::class, 'store'])->name('moder.store');

});
