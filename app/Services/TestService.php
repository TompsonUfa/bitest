<?php

namespace App\Services;

use App\Models\Test;

class TestService
{
    public function getListTests()
    {
        $tests = Test::where('published', 1)
            ->join('users', 'tests.author_id', '=', 'users.id')
            ->select('tests.*', 'users.first_name', 'users.last_name')
            ->paginate(10);

        return $tests;
    }
}
