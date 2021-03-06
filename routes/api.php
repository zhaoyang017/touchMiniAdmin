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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware'=> 'auth:api'], function () {

});
Route::resource('articles', 'Mini\ArticleController');
Route::resource('projects', 'Mini\ProjectController');
Route::resource('videos', 'Mini\VideoController');
Route::get('about', 'Mini\AboutController@show');

Route::post('file/upload', 'Helper\FileController@upload');

Route::get('mini/qrcode/unlimit', 'Mini\QrcodeController@getWXACodeUnlimit');