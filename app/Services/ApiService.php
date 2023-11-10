<?php

namespace App\Services;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Exception\ServerException;
use Illuminate\Support\Facades\Log;

class ApiService
{
    protected $token;

    public function __construct()
    {
        $this->token = env('API_TOKEN');
    }
    public function login($login, $password)
    {
        $client = new Client();
        try {
            $response = $client->post('http://ivc.bifk.ru/api/user', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->token,
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'login' => $login,
                    'password' => $password,
                ],
            ]);
            $statusCode = $response->getStatusCode();
            $responseData = json_decode($response->getBody(), true);
            return ['status' => $statusCode, 'data'=> $responseData];
        } catch (ClientException $e) {
            $response = $e->getResponse();
            $statusCode = $response->getStatusCode();
            $body = json_decode($response->getBody(), true);
            return ['status' => $statusCode, 'errors'=> $body];
        } catch (ServerException $e) {
            Log::error("ServerException: " . $e->getMessage());
        } catch (RequestException $e) {
            Log::error("RequestException: " . $e->getMessage());
        }
    }
}
