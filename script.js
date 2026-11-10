const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  });
});

const sections = document.querySelectorAll('.section, .hero-content');

const revealSection = () => {
  const triggerBottom = window.innerHeight / 1.2;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

const heroSubtitle = document.querySelector('.hero-subtitle');
const text = "Rooting for the Future of Food in the Philippines";
let index = 0;

const type = () => {
  if(index < text.length){
    heroSubtitle.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
};

window.addEventListener('load', () => {
  heroSubtitle.textContent = '';
  type();
});

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});