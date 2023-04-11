<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Color;
use App\Models\Group;
use App\Models\Tag;
use App\Models\Category;

class CreateController extends Controller
{
    public function __invoke(){
        $categories = Category::all();
        $tags = Tag::all();
        $colors = Color::all();
        $groups = Group::all();
        return view('admin.product.create', compact('categories', 'tags', 'colors', 'groups'));
    }
}
