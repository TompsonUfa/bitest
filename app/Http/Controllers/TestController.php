<?php

namespace App\Http\Controllers;

use App\Http\Resources\TestPassResource;
use App\Http\Resources\TestResource;
use App\Models\Test;
use App\Services\TestService;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(Request $request, TestService $service)
    {
        $search = $request->input('search');
        $page = $request->input('page');
        $perPage = $request->input('per_page');

        $tests = $service->getListTests($search, true, $page, $perPage);

        return TestResource::collection($tests);
    }

    public function show(Test $test)
    {
        return new TestResource($test);
    }

    public function testPass(Test $test)
    {
        return new TestPassResource($test);
    }
}
