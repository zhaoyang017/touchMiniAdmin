<?php

namespace App\Http\Controllers\Mini;

use App\Models\Category;
use App\Models\Article;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    /**
     * 返回文章列表
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //预加载 按时间倒序查询20条数据
        $articles = Category::with(['articles' => function ($query) {
            $query->select(['articles.id', 'title', 'desc', 'img_url', 'user_id', 'category_id', 'articles.created_at'])
                ->leftJoin('users', 'articles.user_id', '=', 'users.id')
                ->orderBy('created_at', 'desc')
                ->take(100);
        }])->get();
        return response()->json([
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::find($id);
        return response()->json([
            'article' => $article
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
