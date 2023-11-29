<?php

namespace App\Services;

use App\Models\Test;
use Illuminate\Support\Facades\DB;

class ModerService
{
    public function createTest($info)
    {
        try {
            DB::beginTransaction();

            $test = new Test;

            $test->title = $info['title'];
            $test->direction_id = $info['directionId'];
            $test->discipline_id = $info['disciplineId'];
            $test->author_id = $info['userId'];
            $test->time = $info['time'] ?? null;
            $test->try = $info['attempts'] ?? null;
            $test->limit_questions = $info['displayQuestions'] ?? null;
            $test->posting = $info['publication'];
            $test->img = null;

            $test->save();

            DB::commit();

            return response()->json(['success' => true, 'message' => "Тест создан, вопросы теста в обработки"]);
        } catch (\Exception $e){
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }
}
