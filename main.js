// Menu Hamburguesa
const iconMenu = document.querySelector(".iconoMenuHamb"),
  menu = document.querySelector(".navbar-list");

const toggle_menu = () => {
 
  menu.classList.toggle("toggleMenu");
  iconMenu.classList.toggle("active");
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

const closeMenuAndRestoreAnimation = () => {
  closeMenu();
  iconMenu.classList.remove("active");
};

navLinks.forEach(link => {
  link.addEventListener("click", closeMenuAndRestoreAnimation);
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

const dialogCart = document.getElementById("cartDialog");
const closeDialog = document.getElementById('btnDialogClose')

// Carrito Compras

const cartBtn = document.querySelector(".cart-label");

const menuCarito = document.getElementById("cartDialog");

const cartBubble = document.querySelector(".cart-bubble");

// Total carrito
const total = document.querySelector(".total");

// Btn comprar
const buyBtn = document.querySelector(".btn-buy"); 

// Boton para borrar
const deleteBtn = document.querySelector(".btn-delete");

// Cart container
const cartContainerProducts = document.querySelector(".cart-container");
const succesModal = document.querySelector(".add-modal");

// seteamos el carrito
let cart =  JSON.parse(localStorage.getItem("cart")) || [];

// cart localStorage
const guardarCarrito = () => {
localStorage.setItem("cart", JSON.stringify(cart));
};


// Funcion para mostrar y ocultar el carrito
const openDialog = () => {
  closeMenuIfOpen(); // C
  if (!dialogCart.open) {
    dialogCart.showModal();
    dialogCart.classList.add('show');
    document.body.classList.add('dim-background');
    document.body.style.overflow = 'hidden';
  }
};

const closeCartDialog = () => {
  if (dialogCart.open) {
    dialogCart.close();
    dialogCart.classList.remove('show'); 
    document.body.classList.remove('dim-background');
    document.body.style.overflow = '';
  }
};


const closeMenuIfOpen = () => {
  if (menu.classList.contains('toggleMenu')) {
    closeMenu();
  }
};


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
            <button class="shop-btn"
            data-id="${product.id}"
            data-name="${product.nombre}"
            data-price="${product.precio}"
            data-image="${product.imagen}"
            >Comprar</button>
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
return element.classList.contains("category") && !element.classList.contains('active');

};



// Logica de carrito
// Funcion para crear el template del producto en el carrito
const createCartProductTemplate = (product) => {
  const {id, name, price,  quantity} = product;

  return `
  <div class="cart-item">
  <img src="./assets/img/vaso-cafe-card.jpg" alt="face" />
  <div class="item-info">
  <h3 class="item-title">${name}</h3>
  <p class="item-bid">cantidad</p>
  <span class="item-price">Precio $ ${price}</span>
  </div>
  <div class="item-handler">
  <span class="quantity-handler down" data-id=${id}>-</span>
  <span class="item-quantity">${quantity}</span>
  <span class="quantity-handler up" data-id=${id} >+</span>
  </div>
  </div>
  `
  // console.log(product);
};

// Renderizar carrito 
const renderCart = () => {
  if (!cart.length) {
    cartContainerProducts.innerHTML = "<p class='msjVacio'>No hay productos en el carrito</p>";
    return;
  }
  cartContainerProducts.innerHTML = cart.map(createCartProductTemplate).join("");
};

//funcion para el total
const getTotal = () => {
  return cart.reduce((total, product) => total + Number(product.price) * product.quantity, 0);
}

const showCartTotal = () => {
  total.innerHTML = `$ ${getTotal().toFixed(2)}`;
 }

const cartBubbleUpdate = () => {
  cartBubble.textContent = cart.reduce((total, product) => total + product.quantity, 0);
}

const disableBtn = (btn) => {
  if (cart.length === 0) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
 }

 // Fuuncion para agregar funciones necesarias para el estado del carrito

 const updateCartState = () => {
  guardarCarrito();
  renderCart();
  showCartTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  cartBubbleUpdate();
 }




addProduct = (e) => {
  if (!e.target.classList.contains("shop-btn")) return;
  const product = e.target.dataset;


  if (isProductInCart(product)) {
    addUnit(product);
    showSuccessModal("Se agrego una unidad del producto al carrito")
  } else {
    crearCartProduct(product);
    showSuccessModal("Producto agregado al carrito");
  }

  updateCartState();
  
};

// Funcion para agregar unidad al producto
const addUnit = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
    ? {...cartProduct, quantity: cartProduct.quantity + 1}
    : cartProduct);
};


//  Funcion para saber si el producto ya esta en el carrito
const isProductInCart = (product) => {
return cart.find((item) => item.id === product.id);
}

// Funcion crear obj con la info del producto para agregar al carrito

const crearCartProduct = (product) => {
  cart = [...cart, {...product, quantity: 1}];
};

// Funcion para mostrar el modal
const showSuccessModal = (msj) => {
  succesModal.classList.add('active-modal');
  succesModal.textContent = msj;

  setTimeout(() => {
    succesModal.classList.remove('active-modal');
  }, 1000);
}

const handlePlusBtn = (id) => {
  const existingProduct = cart.find((product) => product.id === id);
  addUnit(existingProduct);

}

// Funcioin para el boton de - del carrito
const handleMinusBtn = (id) => {
  const existingProduct = cart.find((product) => product.id === id);  

  if (existingProduct.quantity === 1) {
    if (window.confirm("Estas seguro que queres eliminar el producto?")) {
      removeProduct(existingProduct)
    }
    return;
  }
  substractUnit(existingProduct);
}


const substractUnit = (existingProduct) => {
  cart = cart.map(product => {
    return product.id === existingProduct.id ? {...product, quantity: Number(product.quantity) - 1} : product;
  })
}

const removeProduct = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
      updateCartState();
}



const handleQuantity = (e) => {
if (e.target.classList.contains("up")) {
  
  handlePlusBtn(e.target.dataset.id);
  } else if (e.target.classList.contains("down")) {
    
    handleMinusBtn(e.target.dataset.id);
  }

  updateCartState(); 
}

const resetCartItems = () => {
  cart = [];
  updateCartState();
}

const completeCartAction = (confirmMsj, successMsj) => {
   if (!cart.length) return;
  if (window.confirm(confirmMsj)) {
    resetCartItems();
    alert(successMsj);    
}
}
const completeBuy = () => {
  completeCartAction('Seguro que queres comprar los productos?','Gracias por tu compra');
}

const clearCart = () => {
 completeCartAction('Estas seguro que queres eliminar todos los productos del carrito?','No hay productos en el carrito');
  }



const init = () => {
  renderProducts(appState.productos[0]);
  iconMenu.addEventListener("click", toggle_menu);
  logOutButton.addEventListener("click", logout);
  cartBtn.addEventListener("click", openDialog);
  closeDialog.addEventListener("click", closeCartDialog);
  toggleUserIcon();
  toggleLogoutButton();
  verMasBtn.addEventListener("click", verMasProductos);
  categoriasContainer.addEventListener('click', applyFilter);
  
  
  document.addEventListener('scroll', () => {
    closeMenuIfOpen(); // Cierra el menú si está abierto
   
  });

  contenedorProductos.addEventListener('click', addProduct);
  cartContainerProducts.addEventListener('click', handleQuantity);

  buyBtn.addEventListener('click', completeBuy);
  deleteBtn.addEventListener('click', clearCart); 
  document.addEventListener('DOMContentLoaded', renderCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  cartBubbleUpdate(cart);
};

init();
