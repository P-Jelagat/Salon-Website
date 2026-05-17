const menuBtns = document.querySelectorAll('.menu');
const sidebar = document.querySelector('.sidebar');

menuBtns.forEach( (menuBtn) =>{
    menuBtn.addEventListener('click', () =>{
        sidebar.classList.toggle('active');
    })
     
})