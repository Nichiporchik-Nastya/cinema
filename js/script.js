const schemeSvg = document.querySelector('.scheme_svg');
const totalPriceTag = document.querySelector('.price_total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let cost = 800;
let count;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    if(!event.target.classList.contains('booked')) event.target.classList.toggle('active');
    count = schemeSvg.querySelectorAll('.active').length;
    totalPrice = cost * count;
    totalPriceTag.textContent = totalPrice;
});

menuButton.addEventListener('click', () =>{
    menu.classList.toggle('is-open');
});