const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu_nav');
const menuBrn = document.querySelector('.menu_branding');

const navItems = document.querySelectorAll('.nav_item');

let showMenu=true;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if ( !showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrn.classList.add('show');
        navItems.forEach(item=> item.classList.add('show'));
        showMenu=true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrn.classList.remove('show');
        navItems.forEach(item=> item.classList.remove('show'));
        showMenu=false;
    }
}