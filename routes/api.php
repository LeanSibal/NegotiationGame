<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/player/login', "PlayerController@login");
Route::post('/player/register', "PlayerController@register");
Route::get('/player/resetpassword', "PlayerController@resetPassword");
Route::get('/player/{id}', "PlayerController@getPlayerById");

