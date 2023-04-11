<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Color;
use App\Models\Group;
use App\Models\Product;
use App\Models\Tag;

class EditController extends Controller
{
    public function __invoke(Product $product)
    {
        $categories = Category::all();
        $tags = Tag::all();
        $colors = Color::all();
        $groups = Group::all();

        return view('admin.product.edit', compact('categories', 'tags', 'colors', 'product', 'groups'));
    }
}
