const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // impede fechar ao clicar no botão
  sidebar.classList.toggle('active');
});

document.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// impede fechar quando clicar dentro do menu
sidebar.addEventListener('click', (e) => {
  e.stopPropagation();
});