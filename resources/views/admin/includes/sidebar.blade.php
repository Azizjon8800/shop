<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="user-panel mt-3 pb-1 mb-1 d-flex">
            <div class="info">
                <a href="#" class="d-block">Shop</a>
            </div>
        </div>
        <nav class="mt-1">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="pages/gallery.html" class="nav-link">
                    <i class="nav-icon fas fa-folder"></i>
                    <p>
                        Заказы
                    </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.product.index') }}" class="nav-link">
                    <i class="nav-icon fas fa-tshirt"></i>
                    <p>
                        Продукты
                    </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.category.index') }}" class="nav-link">
                    <i class="nav-icon fas fa-list"></i>
                    <p>
                        Категории
                    </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.group.index') }}" class="nav-link">
                    <i class="nav-icon fas fa-layer-group"></i>
                    <p>
                        Группы
                    </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.tag.index') }}" class="nav-link">
                    <i class="nav-icon fas fa-tags"></i>
                    <p>
                        Теги
                    </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.color.index') }}" class="nav-link">
                    <i class="nav-icon fas fa-palette"></i>
                    <p>
                        Цвета
                    </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.user.index') }}" class="nav-link">
                    <i class="nav-icon fas fa-users"></i>
                    <p>
                        Пользователи
                    </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <!-- /.sidebar -->
  </aside>
