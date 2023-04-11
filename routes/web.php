<?php

use App\Http\Controllers\Admin\Main\IndexController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::prefix('/admin')->namespace('App\Http\Controllers\Admin')->group(function() {
    Route::get('/', \Main\IndexController::class)->name('admin.main.index');

    Route::namespace('Category')->prefix('/categories')->group(function() {
        Route::get('/', 'IndexController')->name('admin.category.index');
        Route::get('/create', 'CreateController')->name('admin.category.create');
        Route::post('/', 'StoreController')->name('admin.category.store');
        Route::get('/{category}', 'ShowController')->name('admin.category.show');
        Route::get('/{category}/edit', 'EditController')->name('admin.category.edit');
        Route::patch('/{category}', 'UpdateController')->name('admin.category.update');
        Route::delete('/{category}', 'DeleteController')->name('admin.category.delete');
    });

    Route::namespace('Tag')->prefix('/tags')->group(function () {
        Route::get('/', 'IndexController')->name('admin.tag.index');
        Route::get('/create', 'CreateController')->name('admin.tag.create');
        Route::post('/', 'StoreController')->name('admin.tag.store');
        Route::get('/{tag}', 'ShowController')->name('admin.tag.show');
        Route::get('/{tag}/edit', 'EditController')->name('admin.tag.edit');
        Route::patch('/{tag}', 'UpdateController')->name('admin.tag.update');
        Route::delete('/{tag}', 'DeleteController')->name('admin.tag.delete');
    });

    Route::namespace('Color')->prefix('colors')->group(function () {
        Route::get('/', 'IndexController')->name('admin.color.index');
        Route::get('/create', 'CreateController')->name('admin.color.create');
        Route::post('/', 'StoreController')->name('admin.color.store');
        Route::get('/{color}', 'ShowController')->name('admin.color.show');
        Route::delete('/{color}', 'DeleteController')->name('admin.color.delete');
    });

    Route::namespace('User')->prefix('/users')->group(function () {
        Route::get('/', 'IndexController')->name('admin.user.index');
        Route::get('/create', 'CreateController')->name('admin.user.create');
        Route::post('/', 'StoreController')->name('admin.user.store');
        Route::get('/{user}', 'ShowController')->name('admin.user.show');
        Route::get('/{user}/edit', 'EditController')->name('admin.user.edit');
        Route::patch('/{user}', 'UpdateController')->name('admin.user.update');
        Route::delete('/{user}', 'DeleteController')->name('admin.user.delete');
    });

    Route::namespace('Product')->prefix('products')->group(function () {
        Route::get('/', 'IndexController')->name('admin.product.index');
        Route::get('/create', 'CreateController')->name('admin.product.create');
        Route::post('/', 'StoreController')->name('admin.product.store');
        Route::get('/{product}', 'ShowController')->name('admin.product.show');
        Route::get('/{product}/edit', 'EditController')->name('admin.product.edit');
        Route::patch('/{product}', 'UpdateController')->name('admin.product.update');
        Route::delete('/{product}', 'DeleteController')->name('admin.product.delete');
    });

    Route::namespace('Group')->prefix('groups')->group(function () {
        Route::get('/', 'IndexController')->name('admin.group.index');
        Route::get('/create', 'CreateController')->name('admin.group.create');
        Route::post('/', 'StoreController')->name('admin.group.store');
        Route::get('/{group}', 'ShowController')->name('admin.group.show');
        Route::get('/{group}/edit', 'EditController')->name('admin.group.edit');
        Route::patch('/{group}', 'UpdateController')->name('admin.group.update');
        Route::delete('/{group}', 'DeleteController')->name('admin.group.delete');
    });
});

Route::get('{page}', \App\Http\Controllers\Client\IndexController::class)->where('page', '.*');
