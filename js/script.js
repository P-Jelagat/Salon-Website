// MENU BUTTON FUNCTIONALITY
const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedMenuBtn = menuBtn.contains(e.target);

    if(!clickedInsideMenu && !clickedMenuBtn)
        menu.classList.remove('show');
});


// NAVBAR STATE CHANGE WHEN SCROLLING
const nav = document.querySelector('nav');
const links = document.querySelector('.links');
const bookBtn = document.querySelector('.bookBtn');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        nav.classList.add('scrolled');
        links.classList.add('scrolled');
        bookBtn.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
        links.classList.remove('scrolled');
        bookBtn.classList.remove('scrolled');
    }
});
