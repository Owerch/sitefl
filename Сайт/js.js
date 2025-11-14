// Данные для слайдера
const slidesData = [
  {
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Веб-разработка",
    text: "Создаем современные и отзывчивые веб-сайты с использованием передовых технологий.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Мобильные приложения",
    text: "Разрабатываем кроссплатформенные мобильные приложения для iOS и Android.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "UI/UX дизайн",
    text: "Создаем интуитивно понятные и привлекательные интерфейсы для ваших продуктов.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Консультации",
    text: "Предоставляем экспертные консультации по цифровой трансформации бизнеса.",
  },
];

// Инициализация слайдера
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const sliderNav = document.querySelector(".slider-nav");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const sliderContainer = document.querySelector(".slider-container");
  let currentSlide = 0;
  let slideInterval;

  // Создание слайдов
  function createSlides() {
    slidesData.forEach((slideData, index) => {
      // Создание слайда
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
                <img src="${slideData.image}" alt="${slideData.title}">
                <h3>${slideData.title}</h3>
                <p>${slideData.text}</p>
            `;
      slider.appendChild(slide);

      // Создание точки навигации
      const dot = document.createElement("div");
      dot.className = "slider-dot";
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      sliderNav.appendChild(dot);
    });
  }

  // Функция перехода к определенному слайду
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
    resetAutoSlide();
  }

  // Функция обновления слайдера
  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Обновление активной точки
    document.querySelectorAll(".slider-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Следующий слайд
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesData.length;
    updateSlider();
  }

  // Предыдущий слайд
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
    updateSlider();
  }

  // Автоматическое перелистывание слайдов
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Сброс автоматического перелистывания
  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // Инициализация
  function initSlider() {
    createSlides();
    startAutoSlide();

    // Обработчики событий для кнопок
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    // Обработка клавиш клавиатуры
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        resetAutoSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        resetAutoSlide();
      }
    });
  }

  // Запуск инициализации
  initSlider();
});
