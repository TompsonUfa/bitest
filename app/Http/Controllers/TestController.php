<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TestService;

class TestController extends Controller
{
    public function index(TestService $service)
    {
      $tests = $service->getListTests();

      return response()->json(compact('tests'));
    }
}
