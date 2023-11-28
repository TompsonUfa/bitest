<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestCreateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'info' => 'required|array',
            'info.title' => 'required|string',
            'info.directionId' => 'required|integer',
            'info.disciplineId' => 'required|integer',
            'info.time' => 'nullable|integer',
            'info.attempts' => 'nullable|integer',
            'info.displayQuestions' => 'nullable|integer',
            'info.publication' => 'required|boolean',
            'info.userId' => 'required|integer',
        ];
    }
}
