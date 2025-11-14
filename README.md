<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Мыльная Лавка - Магазин натурального мыла</title>
    <link rel="stylesheet" href="css2.css" />
  </head>
  <body>
    <!-- Шапка сайта -->
    <header>
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <i class="fas fa-soap"></i>
            <span>Мыльная Лавка</span>
          </div>
          <nav>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </nav>
          <div class="header-actions">
            <button class="cart-btn">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart-count">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Баннер -->
    <section class="banner">
      <div class="container">
        <div class="banner-content">
          <h1>Натуральное мыло ручной работы</h1>
          <p>Более 50 видов мыла для вашей красоты и здоровья</p>
          <button class="btn-primary">Смотреть каталог</button>
        </div>
      </div>
    </section>

    <!-- Основной контент -->
    <main class="container">
      <!-- Категория 1: Хозяйственное мыло -->
      <section class="category-section">
        <div class="category-header">
          <h2>Хозяйственное мыло</h2>
          <a href="#" class="see-all">Смотреть все</a>
        </div>
        <div class="slider-container">
          <div class="slider" id="slider1">
            <!-- Товары будут добавлены через JS -->
          </div>
          <button class="slider-btn prev" data-slider="slider1">
            &#10094;
          </button>
          <button class="slider-btn next" data-slider="slider1">
            &#10095;
          </button>
        </div>
      </section>

      <!-- Категория 2: Крем-мыло -->
      <section class="category-section">
        <div class="category-header">
          <h2>Крем-мыло</h2>
          <a href="#" class="see-all">Смотреть все</a>
        </div>
        <div class="slider-container">
          <div class="slider" id="slider2">
            <!-- Товары будут добавлены через JS -->
          </div>
          <button class="slider-btn prev" data-slider="slider2">
            &#10094;
          </button>
          <button class="slider-btn next" data-slider="slider2">
            &#10095;
          </button>
        </div>
      </section>

      <!-- Категория 3: Мыло с натуральными добавками -->
      <section class="category-section">
        <div class="category-header">
          <h2>Мыло с натуральными добавками</h2>
          <a href="#" class="see-all">Смотреть все</a>
        </div>
        <div class="slider-container">
          <div class="slider" id="slider3">
            <!-- Товары будут добавлены через JS -->
          </div>
          <button class="slider-btn prev" data-slider="slider3">
            &#10094;
          </button>
          <button class="slider-btn next" data-slider="slider3">
            &#10095;
          </button>
        </div>
      </section>

      <!-- Категория 4: Жидкое мыло -->
      <section class="category-section">
        <div class="category-header">
          <h2>Жидкое мыло</h2>
          <a href="#" class="see-all">Смотреть все</a>
        </div>
        <div class="slider-container">
          <div class="slider" id="slider4">
            <!-- Товары будут добавлены через JS -->
          </div>
          <button class="slider-btn prev" data-slider="slider4">
            &#10094;
          </button>
          <button class="slider-btn next" data-slider="slider4">
            &#10095;
          </button>
        </div>
      </section>
    </main>

    <!-- Подвал -->
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Мыльная Лавка</h3>
            <p>
              Натуральное мыло ручной работы с любовью и заботой о вашей коже.
            </p>
          </div>
          <div class="footer-section">
            <h4>Контакты</h4>
            <p>г. Москва, ул. Мыльная, 15</p>
            <p>+7 (495) 123-45-67</p>
            <p>info@soapstore.ru</p>
          </div>
          <div class="footer-section">
            <h4>Часы работы</h4>
            <p>Пн-Пт: 9:00 - 21:00</p>
            <p>Сб-Вс: 10:00 - 20:00</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Мыльная Лавка. Все права защищены.</p>
        </div>
      </div>
    </footer>

    <script src="js2.js"></script>
  </body>
</html>
