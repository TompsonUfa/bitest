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
        $info = $request->input('info');
        $questions = $request->input('questions');

        $test = $service->createTest($info,$questions);

        dd($test);
    }

    public function update()
    {

    }

    public function destroy()
    {

    }
}
