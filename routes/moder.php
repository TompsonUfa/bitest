<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ModerController;

Route::group(['middleware' => 'auth:sanctum'], function (){

    Route::get('', [ModerController::class, 'index'])->name('index');
    
});
