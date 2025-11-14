// Данные для слайдера с гайдом
const guideData = [
  {
    step: 1,
    title: "Подбор ингредиентов",
    description:
      "Мы тщательно отбираем только натуральные масла, травы и эфирные масла. Каждый ингредиент проходит проверку качества и соответствия экологическим стандартам.",
    image: "img3/Spa-and-relax.jpeg",
  },
  {
    step: 2,
    title: "Приготовление основы",
    description:
      "Создаем мыльную основу методом холодного или горячего проваривания. Этот процесс позволяет сохранить все полезные свойства натуральных компонентов.",
    image: "img3/i.webp",
  },
  {
    step: 3,
    title: "Добавление натуральных добавок",
    description:
      "В зависимости от рецепта добавляем травы, цветы, мед, овсяные хлопья или уголь. Каждая добавка выполняет определенную функцию для ухода за кожей.",
    image: "img3/i (1).webp",
  },
  {
    step: 4,
    title: "Формовка и сушка",
    description:
      "Мыльную массу разливаем по формам и оставляем для созревания на 4-6 недель. Этот этап необходим для правильного химического процесса омыления.",
    image: "img3/f3d567421a7503ccf1e1a410c2921022.jpg",
  },
  {
    step: 5,
    title: "Контроль качества и упаковка",
    description:
      "Каждое мыло проверяем на качество, pH-баланс и внешний вид. Затем аккуратно упаковываем в экологичную упаковку для сохранения свежести.",
    image: "img3/68211d39d6910735dbfb53077184cc0e.jpg",
  },
];

// Инициализация страницы
document.addEventListener("DOMContentLoaded", function () {
  // Создание слайдера с гайдом
  createGuideSlider();

  // Инициализация функциональности слайдера
  initGuideSlider();

  // Инициализация корзины
  initCart();
});

// Создание слайдера с гайдом
function createGuideSlider() {
  const slider = document.getElementById("guideSlider");
  const dotsContainer = document.getElementById("guideDots");

  guideData.forEach((slide, index) => {
    // Создание слайда
    const slideElement = document.createElement("div");
    slideElement.className = "guide-slide";
    slideElement.innerHTML = `
            <div class="guide-slide-content">
                <div class="guide-slide-image">
                    <img src="${slide.image}" alt="${slide.title}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="guide-slide-text">
                    <span class="guide-slide-number">${slide.step}</span>
                    <h3>${slide.title}</h3>
                    <p>${slide.description}</p>
                </div>
            </div>
        `;
    slider.appendChild(slideElement);

    // Создание точки навигации
    const dot = document.createElement("div");
    dot.className = "slider-dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToGuideSlide(index));
    dotsContainer.appendChild(dot);
  });
}

// Инициализация слайдера с гайдом
function initGuideSlider() {
  const sliderBtns = document.querySelectorAll(
    ".guide-slider-container .slider-btn"
  );
  let currentSlide = 0;

  sliderBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const isNext = this.classList.contains("next");

      if (isNext) {
        currentSlide = (currentSlide + 1) % guideData.length;
      } else {
        currentSlide = (currentSlide - 1 + guideData.length) % guideData.length;
      }

      goToGuideSlide(currentSlide);
    });
  });
}

// Переход к определенному слайду в гайде
function goToGuideSlide(slideIndex) {
  const slider = document.getElementById("guideSlider");
  const dots = document.querySelectorAll("#guideDots .slider-dot");

  slider.style.transform = `translateX(-${slideIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });
}
