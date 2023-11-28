<?php

namespace App\Services;

use App\Models\Test;
class ModerService
{
    public function createTest($info)
    {
        $test = new Test;

        $test->title = $info['title'];
        $test->direction_id = $info['directionId'];
        $test->discipline_id = $info['disciplineId'];
        $test->author_id = $info['userId'];
        $test->time = $info['time'];
        $test->try = $info['attempts'];
        $test->limit_questions = $info['displayQuestions'];
        $test->posting = $info['publication'];
        $test->img = null;

        $test->save();
    }
}
