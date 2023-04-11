@extends('admin.layouts.main')

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6 d-flex align-items-center">
            <h1 class="m-0 mr-2">{{ $user->title }}</h1>
            <a href="route('admin.user.edit', $user->id) }}" class="text-success"><i class="far fa-pencil-alt"></i></a>
            <form action="{{ route('admin.user.delete', $user->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit" class="border-0 bg-transparent">
                <i class="fas fa-trash text-danger" role="button"></i>
                </button>
            </form>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Admin Panel</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{{ $user->id }}</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>{{ $user->name }}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{{ $user->email }}</td>
                            </tr>
                            <tr>
                                <td>Фамилия</td>
                                <td>{{ $user->surname }}</td>
                            </tr>
                            <tr>
                                <td>Отчество</td>
                                <td>{{ $user->patronymic }}</td>
                            </tr>
                            <tr>
                                <td>Возраст</td>
                                <td>{{ $user->age }}</td>
                            </tr>
                            <tr>
                                <td>Адрес</td>
                                <td>{{ $user->address }}</td>
                            </tr>
                            <tr>
                                <td>Пол</td>
                                <td>{{ $user->genderTitle }}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /.content-wrapper -->
@endsection
