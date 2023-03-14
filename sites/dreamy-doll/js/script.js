const activeClass = 'active';
const body = document.querySelector('body');
const menuBtn = document.querySelector('.btn--menu');
const menuList = document.querySelector('.menu__links');
const menuListLinks = document.querySelectorAll('.menu__links__list ul li a');
const menuContainer = document.querySelector('.menu__links__container');

const slides = document.querySelectorAll('.slide__imgs li');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');
const dots = document.querySelectorAll('.slide__position button');

function menu() {
  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle(activeClass);
    menuContainer.classList.toggle(activeClass);
    body.classList.toggle(activeClass);
  });
  menuContainer.addEventListener('click', () => {
    menuList.classList.toggle(activeClass);
    menuContainer.classList.toggle(activeClass);
    body.classList.toggle(activeClass);
  });
  menuListLinks.forEach((menuListLink) => {
    menuListLink.addEventListener('click', () => {
      menuList.classList.remove(activeClass);
      menuContainer.classList.remove(activeClass);
      body.classList.remove(activeClass);
    });
  });
}

menu();

function slide() {
  let currentSlide = 0;

  prevBtn.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  });

  nextBtn.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  });

  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
      currentSlide = Array.from(dots).indexOf(this);
      updateSlide();
    });
  }

  function updateSlide() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.toggle(activeClass, i === currentSlide);
    }

    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove(activeClass);
    }

    dots[currentSlide].classList.add(activeClass);
  }

  function nextSlide() {
    slides[currentSlide].className = ' ';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = activeClass;
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove(activeClass);
    }

    dots[currentSlide].classList.add(activeClass);
  }
  setInterval(nextSlide, 3000);
}

slide();

function scrollSuave() {
  const linksInt = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  linksInt.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

scrollSuave();

function animacaoScroll() {
  const sections = document.querySelectorAll('.container');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add(activeClass);
        }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

animacaoScroll();
