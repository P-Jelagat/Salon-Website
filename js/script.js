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