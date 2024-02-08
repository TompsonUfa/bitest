<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestCreateRequest;
use App\Services\ModerService;
use Illuminate\Http\Request;

class ModerController extends Controller
{
    public function index()
    {

    }

    public function show()
    {

    }

    public function store(TestCreateRequest $request, ModerService $service)
    {
        dd($request->file('img'));
        $info = $request->input('info');
        $questions = $request->input('questions');
        $accesses = $request->input('accesses');

        return $service->createTest($info, $questions, $accesses);
    }

    public function update()
    {

    }

    public function destroy()
    {

    }
}
