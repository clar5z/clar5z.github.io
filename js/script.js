function form() {
  const tecnologias = document.querySelector('#tecnologia');
  const cards = document.querySelectorAll('.card');
  const btn = document.querySelector('form input');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const valueSelected = tecnologias.value;
    cards.forEach((card) => {
      if (card.hasAttribute('data-' + valueSelected)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
form();

function pages() {
  const cards = document.querySelectorAll('.card');
  const main = document.querySelector('main');
  const portfolioPath = './portfolio/';

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const portfolio = card.dataset.portfolio;
      fetch(portfolioPath + portfolio)
        .then((response) => response.text())
        .then((html) => {
          main.innerHTML = html;
        })
        .catch((error) => console.log(error));
    });
  });
}
pages();

function date() {
  const year = document.querySelector('.year');
  year.innerHTML = getFullYear();
}
date();
