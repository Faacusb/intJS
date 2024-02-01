// Menu Hamburguesa
const iconMenu = document.querySelector(".iconoMenuHamb"),
  menu = document.querySelector(".navbar-list");

const toggle_menu = () => {
  menu.classList.toggle("toggleMenu");

};

//Seleccionar todos los elementos de la lista
const navLinks = document.querySelectorAll(".navbar-list li a");

// Función para cerrar el menú hamburguesa
const closeMenu = () => {
  menu.classList.remove("toggleMenu");
};

// Agregar un controlador de eventos clic a cada elemento de la lista
navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});



// Login
const logOutButton = document.getElementById("logOut");
const userIcon = document.getElementById("userIcon");

iconMenu.addEventListener("click", toggle_menu);

const toggleUserIcon = () => {
  const isLoggedIn = sessionStorage.getItem("activeUsuario");
  if (isLoggedIn) {
    userIcon.style.display = "none"; // Ocultar el botón userIcon
  } else {
    userIcon.style.display = "block"; // Mostrar el botón userIcon
  }
};

const saveToSessionStorage = (usuario) => {
  sessionStorage.setItem('activeUsuario', JSON.stringify(usuario));

  // Despachar el evento de inicio de sesión exitoso
  const loginSuccessEvent = new Event("loginSuccess");
  document.dispatchEvent(loginSuccessEvent);
}

const toggleLogoutButton = () => {
  const isLoggedIn = sessionStorage.getItem("activeUsuario");
  if (isLoggedIn) {
    logOutButton.style.display = "block"; // Mostrar el botón de logout
  } else {
    logOutButton.style.display = "none"; // Ocultar el botón de logout
  }
};

// Carrito
const cartBtn = document.querySelector(".cart-label");

const dialogCart = document.getElementById("cartDialog");
const closeDialog = document.getElementById('btnDialogClose')

// const openDialog = () => {
//   dialogCart.showModal();
// };


// const closeCartDialog = () => {
//   dialogCart.close();
// };

const openDialog = () => {
  if (!dialogCart.open) {
    dialogCart.showModal();
  }
};

const closeCartDialog = () => {
  if (dialogCart.open) {
    dialogCart.close();
  }
};

// console.log(dialogCart)
// console.log(closeDialog)





// contenedor de productos
const contenedorProductos = document.querySelector("#contenedor-productos");



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

        </div>`;
};

// Funcion para renderizar productos
const renderProducts = (productList) => {
  contenedorProductos.innerHTML += productList
    .map(createProductTemplate)
    .join("");
};

// Boton comprar de la card
const btnCompra = document.querySelector(".shop-btn");

//usuario activo
const activeUsuario = JSON.parse(sessionStorage.getItem("activeUsuario"));

// Desloguearse

const logout = () => {
  
  if (window.confirm("Estas seguro que queres cerrar sesión?")) {
    sessionStorage.removeItem("activeUsuario");
    alert("Cerraste sesión");
    toggleLogoutButton();
    toggleUserIcon();
  }
};

// Funcion para saber si estamos al final del array 
const isLastIndexOf = () => {
  return appState.currentproductIndex === appState.limiteProductos - 1;
}

// boton Ver mas
const verMasBtn = document.querySelector(".verMas");


// Logica ver mas
const verMasProductos = () => {
  appState.currentproductIndex += 1;

  let {productos, currentproductIndex} = appState;

  renderProducts(productos[currentproductIndex]);

  if (isLastIndexOf()) {
    verMasBtn.classList.add("hidden")
  }
};

// Funcion para ocultar btn ver mas si hay categoria seleccionada

const hideVerMasButton = () => {
  if (appState.activeFilter) {
    verMasBtn.classList.add("hidden");
  } else {
    verMasBtn.classList.remove("hidden");
  }
};



// Filtros

// Funcion para cambiar el estado de los botones de las categorias
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...listaCategorias];
  
  
  

categories.forEach((categoryBtn) => {
  if (categoryBtn.dataset.category !== selectedCategory){
    categoryBtn.classList.remove("active");
    return
  }
   categoryBtn.classList.add("active");
})
  
};

// Funcion para cambiar el estado de filtro activo

const changeFiltersState = (btn) => {
 appState.activeFilter = btn.dataset.category;
 changeBtnActiveState(appState.activeFilter);
}
// Contenedor de las categorias
const categoriasContainer = document.querySelector(".categorias-contain");

// HtmlCollection
const listaCategorias = document.querySelectorAll(".category");


// Funcion para filtrar los productos
const renderFilteredProducts = () => {
    const filteredProducts = cafes.filter((product) => product.category === appState.activeFilter);
    
    renderProducts(filteredProducts);
  };



// Funcion para aplicar filtro
const applyFilter = ({target}) => {
  
  if (!isInactiveFilterBtn(target)) return;
    changeFiltersState(target);
    contenedorProductos.innerHTML = "";
    if (appState.activeFilter){
      renderFilteredProducts();
      appState.currentproductIndex = 0;
      // return;
    } else{
      
      renderProducts(appState.productos[0]);
    }
    hideVerMasButton();
};

// Funcion para saber si apretamos un btn de categirua y no esta activo

const isInactiveFilterBtn = (element) =>{
return element.classList.contains("category") && !element.classList.contains('active')

};




const init = () => {
  iconMenu.addEventListener("click", toggle_menu);
  logOutButton.addEventListener("click", logout);
  cartBtn.addEventListener("click", openDialog);
  closeDialog.addEventListener("click", closeCartDialog);
  toggleUserIcon();
  toggleLogoutButton();
  renderProducts(appState.productos[0]);
  verMasBtn.addEventListener("click", verMasProductos);
  categoriasContainer.addEventListener('click', applyFilter);
};

init();
