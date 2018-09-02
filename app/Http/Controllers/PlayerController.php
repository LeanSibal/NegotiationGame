<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\User as UserResource;
use App\User;
use Mockery\CountValidator\Exception;

class PlayerController extends Controller
{

    public function login()
    {

    }

    public function register()
    {

    }

    public function resetPassword()
    {
        
    }

    public function getPlayerById($id)
    {
       return new UserResource(User::find($id));
    }

}
