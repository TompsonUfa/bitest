<?php

namespace App\Http\Controllers\Moder;

use App\Http\Controllers\Controller;
use App\Http\Requests\TestCreateRequest;
use App\Services\TestService;
use App\Http\Resources\TestResource;
use Illuminate\Http\Request;


class TestController extends Controller
{
    public function index(Request $request, $id, TestService $testService)
    {
        $search = $request->input('search');
        $page = $request->input('page');
        $perPage = $request->input('per_page');

        $tests = $testService->getTestsAuthor($id, $search,true, $page, $perPage);

        return TestResource::collection($tests);
    }

    public function show()
    {

    }

    public function store(TestCreateRequest $request, TestService $testService)
    {
        $mainInfo = $request->input('info');
        $questions = $request->input('questions');
        $accesses = $request->input('accesses');

        return $testService->createTest($mainInfo, $questions, $accesses);
    }

    public function update()
    {

    }

    public function destroy()
    {

    }
}
