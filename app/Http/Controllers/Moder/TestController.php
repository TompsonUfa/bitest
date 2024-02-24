<?php

namespace App\Http\Controllers\Moder;

use App\Http\Controllers\Controller;
use App\Http\Requests\Test\CreateRequest;
use App\Http\Requests\Test\EditRequest;
use App\Http\Resources\TestDetailResource;
use App\Http\Resources\TestResource;
use App\Models\Test;
use App\Services\TestService;
use Illuminate\Http\Request;


class TestController extends Controller
{
    public function index(Request $request, $id, TestService $testService)
    {
        $search = $request->input('search') ?? '';
        $page = $request->input('page');
        $perPage = $request->input('per_page');

        $tests = $testService->getTestsAuthor($id, $search, true, $page, $perPage);

        return TestResource::collection($tests);
    }

    public function show(Test $test)
    {
        return new TestDetailResource($test);
    }

    public function store(CreateRequest $request, TestService $testService)
    {
        $mainInfo = $request->input('info');
        $questions = $request->input('questions');
        $accesses = $request->input('accesses');

        $created = $testService->createTest($mainInfo, $questions);

        if (!$created) {
            return response()->json(['error' => 'The test could not be created. Please try again later.'], 500);
        }

        return response()->json(['success' => true, 'message' => "test created"], 201);
    }

    public function update(Test $test, EditRequest $request, TestService $testService)
    {
        $mainInfo = $request->input('info');
        $questions = $request->input('questions') ?? [];

        $updated = $testService->editTest($test, $mainInfo, $questions);

        if (!$updated) {
            return response()->json(['error' => 'The test could not be updated. Please try again later.'], 500);
        }

        return response()->json(['success' => true, 'message' => "test updated"], 200);
    }

    public function destroy(Test $test)
    {
        $test->delete();

        return response()->json('', 204);
    }

}
