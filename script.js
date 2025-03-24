let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// تغییر خودکار اسلاید هر 5 ثانیه
setInterval(nextSlide, 5000);

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // تغییر وضعیت نقاط
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === currentIndex) {
      dot.classList.add("active");
    }
  });
}

// به‌روزرسانی شمارشگر کاراکترها
function updateCharCount(textarea) {
  const counter = document.getElementById("char-counter");
  counter.textContent = `${textarea.value.length}/200`;
}
