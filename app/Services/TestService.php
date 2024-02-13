<?php

namespace App\Services;

use App\Models\Access;
use App\Models\Option;
use App\Models\Test;
use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class TestService
{
    public function getTestsAuthor($authorId, $search, $pagination, $page, $perPage = 10)
    {

        $tests = Test::where('author_id', $authorId);

        if (!empty($search)) {
            $tests->where('title', 'like', $search . '%');
        }

        if ($pagination) {
            return $tests->paginate($perPage, ['*'], 'page', $page);
        }

        return $tests->get();

    }

    public function createTest($info, $questions, $accesses): JsonResponse
    {
        try {
            DB::beginTransaction();

            $test = new Test;
            $test->title = $info['title'];
            $test->author_id = $info['userId'];
            $test->time_complete = $info['time'] ?? null;
            $test->attempts = $info['attempts'] ?? null;
            $test->limit_questions = $info['limitQuestions'] ?? null;
            $test->published = $info['published'];
            $test->image = $info['image'];
            $test->save();

            foreach ($questions as $question) {
                $questionDb = new Question;
                $questionDb->name = $question['name'];
                $questionDb->open = boolval($question['open']);
                $questionDb->test_id = $test->id;
                $questionDb->save();

                if (!boolval($question['open'])) {
                    $options = $question['options'];
                    foreach ($options as $option) {
                        $optionDb = new Option;
                        $optionDb->name = $option['name'];
                        $optionDb->correct = $option['correct'];
                        $optionDb->question_id = $questionDb->id;
                        $optionDb->save();
                    }
                }

            }

            if (!empty($accesses)) {
                foreach ($accesses as $access) {
                    $accessDb = new Access;
                    $accessDb->test_id = $test->id;
                    $accessDb->user_id = $access['type'] === 'users' ? $access['id'] : null;
                    $accessDb->group_id = $access['type'] === 'groups' ? $access['id'] : null;
                    $accessDb->save();
                }
            }

            DB::commit();

            return response()->json(['success' => true, 'message' => "test created"], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['error' => $e->getMessage()], 500);
        }

    }

    public function editTest($test, $info, $questions)
    {
        try {
            DB::beginTransaction();

            $test->title = $info['title'];
            $test->time_complete = $info['time'] ?? null;
            $test->attempts = $info['attempts'] ?? null;
            $test->limit_questions = $info['limitQuestions'] ?? null;
            $test->published = $info['published'];
            $test->image = $info['image'];
            $test->save();

            if (!empty($questions)) {
                $questionsDb = $test->questions;

                $clientQuestionIds = array_column($questions, 'id');

                foreach ($questionsDb as $questionDb) {
                    if (!in_array($questionDb->id, $clientQuestionIds)) {
                        $questionDb->delete();
                    } else {
                        foreach ($questions as $question) {
                            if ($question['id'] == $questionDb->id) {
                                $questionDb->name = $question['name'];
                                $questionDb->open = $question['open'];
                                $questionDb->save();
                                if (!boolval($question['open'])) {
                                    $options = $question['options'];
                                    $optionsIds = array_column($options, 'id');
                                    $optionsDb = $questionDb->options;

                                    foreach ($optionsDb as $optionDb) {
                                        if (!in_array($optionDb->id, $optionsIds)) {
                                            $optionDb->delete();
                                        } else {
                                            foreach ($options as $option) {
                                                if ($option['id'] == $optionDb->id) {
                                                    $optionDb->name = $option['name'];
                                                    $optionDb->correct = $option['correct'];
                                                    $optionDb->save();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                foreach ($questions as $question) {
                    $existingQuestion = $questionsDb->firstWhere('id', $question['id']);
                    if (!$existingQuestion) {
                        $newQuestion = new Question();
                        $newQuestion->name = $question['name'];
                        $newQuestion->open = $question['open'];
                        $newQuestion->test_id = $test->id;
                        $newQuestion->save();
                        $newQuestion->fresh();
                        $options = $question['options'];

                        foreach ($options as $option) {
                            $newOption = new Option();
                            $newOption->name = $option['name'];
                            $newOption->correct = $option['correct'];
                            $newOption->question_id = $newQuestion->id;
                            $newOption->save();
                        }
                    }
                }
            }

            DB::commit();

            return response()->json(['success' => true, 'message' => "test updated"], 200);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
