const iconMenu = document.querySelector('.iconoMenuHamb'),
 menu = document.querySelector('.navbar-list');

 


 const toggle_menu = ()=>{
        menu.classList.toggle('toggleMenu')
        console.log('holi')
 }


const init = ()=> {


    
iconMenu.addEventListener('click',toggle_menu)

console.log(menu)
}
init()