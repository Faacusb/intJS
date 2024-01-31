// Menu Hamburguesa
const iconMenu = document.querySelector(".iconoMenuHamb"),
  menu = document.querySelector(".navbar-list");

const toggle_menu = () => {
  menu.classList.toggle("toggleMenu");
  
};

// Login
const logOutButton = document.getElementById("logOut");
const userIcon = document.getElementById("userIcon");


iconMenu.addEventListener("click", toggle_menu);

// contenedor de productos
const contenedorProductos = document.querySelector("#contenedor-productos")


// Funcion para crear el HTML del producto
const createProductTemplate = (product) => {

  return `
  <div class="shop-card">
          <div class="img-contain-shop">
            <img class="shop-card-img" src="${product.imagen}" alt="vaso cafe">
          </div>
          <div class="texto-shop">
            <h2>${product.nombre}</h2>
            <p>${product.caracteristicas}</p>
          </div>
          <div class="precio-shop">
            <p>$ ${product.precio}</p>
            <button class="shop-btn">Comprar</button>
          </div>

        </div>`
}


// Funcion para renderizar productos
const renderProducts = (productList) => {
  contenedorProductos.innerHTML = productList.map(createProductTemplate).join("");
}










// Boton comprar de la card
const btnCompra = document.querySelector(".shop-btn");



//usuario activo
const activeUsuario = JSON.parse(sessionStorage.getItem('activeUsuario'));

const logout = () => {
  console.log("hola")
    if(window.confirm('Estas seguro que queres cerrar sesión?')) {
        sessionStorage.removeItem('activeUsuario');
        alert ("Cerraste sesión");
    }
}



const init = () => {
  iconMenu.addEventListener("click", toggle_menu);
  logOutButton.addEventListener('click', logout);
  

  renderProducts(appState.productos[0]);
  
  
 
};


init()



