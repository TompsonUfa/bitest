<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestEditRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'info.title' => 'required|string',
            'info.time' => 'nullable|integer',
            'info.attempts' => 'nullable|integer',
            'info.limitQuestions' => 'nullable|integer',
            'info.image' => 'required|string',
            'questions' => 'array',
        ];
    }
}
