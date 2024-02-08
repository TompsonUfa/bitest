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
            'title' => 'required|string',
            'time' => 'nullable|integer',
            'attempts' => 'nullable|integer',
            'limitQuestions' => 'nullable|integer',
            'userId' => 'required|integer',
        ];
    }
}
