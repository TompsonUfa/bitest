<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TestPassResource extends JsonResource
{

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'attempts' => $this->attempts,
            'published' => $this->published,
            'questions' => QuestionPassTestResource::collection($this->questions),
        ];
    }
}
