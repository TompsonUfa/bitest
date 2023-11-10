<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\ApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use mysql_xdevapi\Exception;

class LoginController extends Controller
{
    public function login(Request $request, ApiService $api){

        $request->validate([
            'login' => ['required'],
            'password' => ['required'],
        ]);

        $login = $request->login;
        $password = $request->password;

        $res = $api->login($login, $password);

        $statusCode = $res['status'];

        if ($statusCode === 403){
            $errors = $res['errors'];
            return response()->json(['errors' => $errors], 403);
        }

        $userData = $res['data']['user'];
        $userId = $userData['code'];
        $userName = $userData['surname'] . " " . $userData['name'] . " " . $userData['midlename'];
        $userGroup = $userData['group'];
        $userRights = $userData['rights'];

        $user = User::where('user_id', $userId)->first();

        if ($user){
        } else {
           $user = new User();
           $user->user_id = $userId;
           $user->full_name = trim($userName);
           $user->login = $login;
           $user->group = $userGroup != "" ? $userGroup : null;
           $user->moderator = $userRights === 'Модератор';
           $user->save();
        }

        Auth::login($user);
    }

}
