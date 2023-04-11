<?php

namespace App\Http\Controllers\Admin\Group;

use App\Http\Controllers\Controller;
use App\Models\Group;

class ShowController extends Controller
{
    public function __invoke(Group $group){

        return view('admin.group.show', compact('group'));
    }
}
