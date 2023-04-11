@extends('admin.layouts.main')

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Admin Panel</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Admin Panel</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <form action="{{ route('admin.product.store') }}" class="w-50" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <input type="text" class="form-control" name="title" placeholder="Название продуктa"
                            value="{{ old('title') }}">
                            @error('title')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="description" placeholder="Описание"
                            value="{{ old('description') }}">
                            @error('description')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <textarea name="content" id="summernote" class="form-control" placeholder="Контент">
                                {{ old('content') }}
                            </textarea>
                            @error('content')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="price" placeholder="Цена"
                            value="{{ old('price') }}">
                            @error('price')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="old_price" placeholder="Старая цена"
                            value="{{ old('old_price') }}">
                            @error('old_price')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="count" placeholder="Количество"
                            value="{{ old('count') }}">
                            @error('count')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" name="preview_image">
                                    <label class="custom-file-label">Выберите изображение</label>
                                </div>
                            </div>
                            @error('preview_image')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" name="product_images[]">
                                    <label class="custom-file-label">Выберите изображение</label>
                                </div>
                            </div>
                            @error('preview_image')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" name="product_images[]">
                                    <label class="custom-file-label">Выберите изображение</label>
                                </div>
                            </div>
                            @error('preview_image')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" name="product_images[]">
                                    <label class="custom-file-label">Выберите изображение</label>
                                </div>
                            </div>
                            @error('preview_image')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <select name="category_id" class="form-control select2">
                                <option selected="selected" disabled>Выберите категорию</option>
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}"
                                    {{ $category->id == old('category_id') ? ' selected' : '' }}
                                    >{{ $category->title }}</option>
                                @endforeach
                            </select>
                            @error('category_id')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <select name="group_id" class="form-control select2">
                                <option selected="selected" disabled>Выберите группу</option>
                                @foreach($groups as $group)
                                    <option value="{{ $group->id }}"
                                    {{ $group->id == old('group_id') ? ' selected' : '' }}
                                    >{{ $group->title }}</option>
                                @endforeach
                            </select>
                            @error('group_id')
                                <div class="text-danger">это поле необходимо для заполнения</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <select class="tags" name="tags[]" multiple="multiple" data-placeholder="Выберите тег"
                            style="width: 100%;">
                            @foreach($tags as $tag)
                                <option {{ is_array( old('tags')) && in_array($tag->id, old('tags')) ? ' selected' : '' }}
                                value="{{ $tag->id }}">{{ $tag->title }}</option>
                            @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="colors" name="colors[]" multiple="multiple" data-placeholder="Выберите цвет"
                            style="width: 100%;">
                            @foreach($colors as $color)
                                <option {{ is_array( old('colors')) && in_array($color->id, old('colors')) ? ' selected' : '' }}
                                value="{{ $color->id }}">{{ $color->title }}</option>
                            @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary" value="Добавить">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
@endsection
