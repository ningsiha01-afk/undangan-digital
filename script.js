const btnBuka = document.getElementById("btnBuka");
const cover = document.getElementById("cover");
const navbar = document.getElementById("navbar");
const music = document.getElementById("music");
const btnMusic = document.getElementById("btnMusic");

let isPlay = false;

// Ambil nama tamu dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if (nama) {
  document.getElementById("namaTamu").innerText = nama;
}

// BUKA UNDANGAN
btnBuka.addEventListener("click", () => {
  cover.style.display = "none";
  navbar.style.display = "flex";
  music.play();
  isPlay = true;
});

// MUSIC TOGGLE
btnMusic.addEventListener("click", () => {
  if (isPlay) {
    music.pause();
  } else {
    music.play();
  }
  isPlay = !isPlay;
});

const targetDate = new Date("2025-12-31 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText =
    Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);




document.addEventListener('DOMContentLoaded', function () {
  const ayat = document.querySelector('.ayat-container');

  if (!ayat) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          ayat.classList.add('show');
          observer.unobserve(ayat); // animasi jalan sekali
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  observer.observe(ayat);
});


const items = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox-gallery");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

items.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".grid-item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 150); // muncul berurutan

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  items.forEach(item => observer.observe(item));
});



document.addEventListener("DOMContentLoaded", function () {
  const btnGift = document.getElementById("btnGift");
  const giftContent = document.getElementById("giftContent");
  const giftSection = document.getElementById("gift");

  btnGift.addEventListener("click", function () {
    // tampilkan isi gift
    giftContent.style.display = "block";

    // sembunyikan tombol
    btnGift.style.display = "none";

    // ubah section jadi full layar
    giftSection.classList.add("open");
  });
});



const rsvpForm = document.getElementById("rsvpForm");
const rsvpSuccess = document.getElementById("rsvpSuccess");

rsvpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data
  const nama = document.getElementById("nama").value;
  const kehadiran = document.getElementById("kehadiran").value;
  const ucapan = document.getElementById("ucapan").value;

  console.log({
    nama,
    kehadiran,
    ucapan
  });

  // Reset & tampilkan pesan
  rsvpForm.reset();
  rsvpSuccess.style.display = "block";
});