const iconMenu = document.querySelector('.iconoMenuHamb'),
 menu = document.querySelector('.navbar-list');

console.log(menu)

iconMenu.addEventListener('click', (e => {
    menu.classList.toggle('toggleMenu')
}))

console.log(iconMenu)
