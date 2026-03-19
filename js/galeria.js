// CONFIG
const totalImagenes = 15;
const ruta = "img/foto";

// GENERAR GALERÍA
const grid = document.getElementById("galeria-grid");

for (let i = 1; i <= totalImagenes; i++) {
  const col = document.createElement("div");
  col.className = "col-4 col-lg-2";

  const img = document.createElement("img");
  img.src = `${ruta}${i}.jpg`;
  img.className = "galeria-img";
  img.dataset.index = i - 1;

  col.appendChild(img);
  grid.appendChild(col);
}

// LIGHTBOX
const images = document.querySelectorAll(".galeria-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;
const imgArray = Array.from(images).map(img => img.src);

// abrir
images.forEach(img => {
  img.addEventListener("click", () => {
    currentIndex = parseInt(img.dataset.index);
    showImage();
    lightbox.classList.add("active");
  });
});

function showImage() {
  lightboxImg.src = imgArray[currentIndex];
}

// cerrar
document.querySelector(".close").onclick = () => {
  lightbox.classList.remove("active");
};

// siguiente
document.querySelector(".next").onclick = () => {
  currentIndex = (currentIndex + 1) % imgArray.length;
  showImage();
};

// anterior
document.querySelector(".prev").onclick = () => {
  currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
  showImage();
};

// click fuera
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// TECLADO
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % imgArray.length;
    showImage();
  }

  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    showImage();
  }

  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});

// SWIPE MÓVIL
let startX = 0;

lightbox.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    // swipe izquierda → siguiente
    currentIndex = (currentIndex + 1) % imgArray.length;
    showImage();
  }

  if (endX - startX > 50) {
    // swipe derecha → anterior
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    showImage();
  }
});