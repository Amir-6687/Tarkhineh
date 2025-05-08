let currentIndex = 0;
const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slideElements.length;

// تابع اصلی برای نمایش اسلاید
function showSlide(index) {
  // محدود کردن index به محدوده معتبر
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // حرکت اسلایدر
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // به روزرسانی نقاط
  updateDots();
}

// تابع برای به روزرسانی نقاط
function updateDots() {
  dots.forEach((dot, i) => {
    if (i === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// تابع برای تغییر به اسلاید بعدی
function nextSlide() {
  showSlide(currentIndex + 1);
}

// تابع برای تغییر به اسلاید قبلی
function prevSlide() {
  showSlide(currentIndex - 1);
}

// تابع برای رفتن به اسلاید خاص
function goToSlide(index) {
  showSlide(index);
}

// تنظیم interval برای تغییر خودکار اسلایدها
let slideInterval = setInterval(nextSlide, 3000);

// توقف interval وقتی کاربر با اسلایدر تعامل دارد
function pauseSlider() {
  clearInterval(slideInterval);
}

// شروع مجدد interval
function resumeSlider() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

// رویدادهای کلیک برای نقاط
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

// مقداردهی اولیه
showSlide(0);

// به‌روزرسانی شمارشگر کاراکترها
function updateCharCount(textarea) {
  const counter = document.getElementById("char-counter");
  counter.textContent = `${textarea.value.length}/200`;
}

// تابع جستجوی زنده
function liveSearch() {
  const input = document.getElementById("search-box");
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll("#result-list li");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "block" : "none";
  });
}

// نمایش یا مخفی کردن جعبه جستجو
function toggleSearch() {
  const searchContainer = document.getElementById("search-container");
  searchContainer.classList.toggle("hidden");

  const searchBox = document.getElementById("search-box");
  if (!searchContainer.classList.contains("hidden")) {
    searchBox.focus(); // فوکوس روی اینپوت
  }
}

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector("nav ul").classList.toggle("active");
  });

// اضافه کردن عملکرد کلیک برای منوهای کشویی
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", function (e) {
    // جلوگیری از بسته شدن منو با کلیک روی خود منو
    if (e.target.closest(".dropdown-content")) return;

    // toggle کلاس active
    this.classList.toggle("active");

    // بستن سایر منوهای باز
    document.querySelectorAll(".dropdown").forEach((other) => {
      if (other !== this) other.classList.remove("active");
    });

    // جلوگیری از انتشار رویداد به document
    e.stopPropagation();
  });
});

// بستن منو با کلیک بیرون از آن
document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});

// جلوگیری از بسته شدن منو هنگام کلیک روی آیتم‌های داخلی
document.querySelectorAll(".dropdown-content li").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    // اینجا می‌توانید کد مربوط به کلیک روی هر آیتم را اضافه کنید
  });
});
