// Данные товаров по категориям
const productsData = {
  "Хозяйственное мыло": [
    {
      id: 1,
      name: "Хозяйственное мыло 72%",
      price: "85 ₽",
      image: "img2/2337ae91131b4a46f287a8813eac9eee_goods_card_popup.png",
    },
    {
      id: 2,
      name: "Хозяйственное мыло с отбеливателем",
      price: "95 ₽",
      image: "img2/i (33).webp",
    },
    {
      id: 3,
      name: "Хозяйственное мыло антибактериальное",
      price: "110 ₽",
      image: "img2/mkx1321-(2).jpg",
    },
    {
      id: 4,
      name: "Хозяйственное мыло для стирки",
      price: "90 ₽",
      image: "img2/blester-dlya-udaleniya-pyaten-65.jpg",
    },
    {
      id: 5,
      name: "Хозяйственное мыло 60%",
      price: "120 ₽",
      image: "img2/b4af51623d45be6cf3be97b93aa7203a.jpg",
    },
  ],
  "Крем-мыло": [
    {
      id: 6,
      name: "Крем-мыло увлажняющее",
      price: "180 ₽",
      image: "img2/AUX_70117caf-f849-4300-ac9d-4b65a40a8bcf.webp",
    },
    {
      id: 7,
      name: "Крем-мыло с ароматом лаванды",
      price: "195 ₽",
      image: "img2/2823825_1000.jpg",
    },
    {
      id: 8,
      name: "Крем-мыло особое",
      price: "220 ₽",
      image: "img2/5b40df6a4450c7696946b1bdd1f4182d-700x700.jpg",
    },
    {
      id: 9,
      name: "Крем-мыло для чувствительной кожи",
      price: "210 ₽",
      image: "img2/100000889437b1.webp",
    },
    {
      id: 10,
      name: "Крем-мыло с витамином Е",
      price: "190 ₽",
      image: "img2/100032476900b0.webp",
    },
  ],
  "Мыло с натуральными добавками": [
    {
      id: 11,
      name: "Мыло с медом и прополисом",
      price: "250 ₽",
      image: "img2/i.webp",
    },
    {
      id: 12,
      name: "Мыло с хвоей",
      price: "230 ₽",
      image: "img2/7150121987.jpg",
    },
    {
      id: 13,
      name: "Мыло с лавандой",
      price: "240 ₽",
      image: "img2/orig.webp",
    },
    {
      id: 14,
      name: "Мыло с углем",
      price: "260 ₽",
      image: "img2/1.webp",
    },
    {
      id: 15,
      name: "Мыло с ромашкой",
      price: "220 ₽",
      image: "img2/orig (1).webp",
    },
  ],
  "Жидкое мыло": [
    {
      id: 16,
      name: "Жидкое мыло антибактериальное",
      price: "150 ₽",
      image: "img2/1 (1).webp",
    },
    {
      id: 17,
      name: "Жидкое мыло с алоэ вера",
      price: "170 ₽",
      image: "img2/orig (2).webp",
    },
    {
      id: 18,
      name: "Жидкое мыло для детей",
      price: "160 ₽",
      image: "img2/orig (3).webp",
    },
    {
      id: 19,
      name: "Жидкое мыло увлажняющее",
      price: "180 ₽",
      image: "img2/orig (4).webp",
    },
    {
      id: 20,
      name: "Жидкое мыло с цитрусами",
      price: "165 ₽",
      image: "img2/i (1).webp",
    },
  ],
};

// Инициализация страницы
document.addEventListener("DOMContentLoaded", function () {
  // Создание товаров в слайдерах
  createProductSliders();

  // Инициализация функциональности слайдеров
  initSliders();

  // Инициализация корзины
  initCart();
});

// Создание товаров в слайдерах
function createProductSliders() {
  const sliders = {
    slider1: "Хозяйственное мыло",
    slider2: "Крем-мыло",
    slider3: "Мыло с натуральными добавками",
    slider4: "Жидкое мыло",
  };

  for (const [sliderId, category] of Object.entries(sliders)) {
    const slider = document.getElementById(sliderId);
    const products = productsData[category];

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <button class="add-to-cart" data-id="${product.id}">В корзину</button>
                </div>
            `;
      slider.appendChild(productCard);
    });
  }
}

// Инициализация слайдеров
function initSliders() {
  const sliderBtns = document.querySelectorAll(".slider-btn");

  sliderBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const sliderId = this.getAttribute("data-slider");
      const slider = document.getElementById(sliderId);
      const isNext = this.classList.contains("next");
      const cardWidth = 250 + 24; // ширина карточки + gap

      // Получаем текущее смещение
      let currentTransform = slider.style.transform;
      let currentTranslateX = 0;

      if (currentTransform) {
        currentTranslateX = parseInt(currentTransform.match(/-?\d+/)[0]);
      }

      // Вычисляем новое смещение
      let newTranslateX;
      if (isNext) {
        newTranslateX = currentTranslateX - cardWidth * 2; // Прокручиваем на 2 карточки
      } else {
        newTranslateX = currentTranslateX + cardWidth * 2;
      }

      // Ограничиваем прокрутку
      const maxTranslate = -(
        slider.scrollWidth - slider.parentElement.offsetWidth
      );
      newTranslateX = Math.max(maxTranslate, Math.min(0, newTranslateX));

      // Применяем новое смещение
      slider.style.transform = `translateX(${newTranslateX}px)`;
    });
  });
}

// Инициализация корзины
function initCart() {
  const cartButtons = document.querySelectorAll(".add-to-cart");
  const cartCount = document.querySelector(".cart-count");
  let count = 0;

  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      count++;
      cartCount.textContent = count;

      // Анимация добавления в корзину
      this.textContent = "Добавлено!";
      this.style.backgroundColor = "#8a6d43";
      this.style.color = "white";

      setTimeout(() => {
        this.textContent = "В корзину";
        this.style.backgroundColor = "";
        this.style.color = "";
      }, 1500);

      // Здесь можно добавить логику для сохранения товара в корзину
      console.log(`Товар с ID ${productId} добавлен в корзину`);
    });
  });
}
