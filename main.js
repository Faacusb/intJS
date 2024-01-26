const iconMenu = document.querySelector(".iconoMenuHamb"),
  menu = document.querySelector(".navbar-list");

// Menu Hamburguesa
const toggle_menu = () => {
  menu.classList.toggle("toggleMenu");
<<<<<<< HEAD
  
};

iconMenu.addEventListener("click", toggle_menu);
=======
  console.log("holi");
};


>>>>>>> a0da4a166e2958625d5f1b8341020deb60f26b67

const cafes = [
  {
    nombre: 'Espresso',
    ingredientes: ['Café molido finamente', 'Agua caliente'],
    caracteristicas: 'Sabor intenso y concentrado, servido en pequeñas cantidades.',
    precio: 150,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'cafe'
  },
  {
    nombre: 'Latte',
    ingredientes: ['Espresso', 'Leche vaporizada'],
    caracteristicas: 'Bebida suave y cremosa, ideal para quienes prefieren un café con menos intensidad.',
    precio: 200,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con leche'
  },
  {
    nombre: 'Cappuccino',
    ingredientes: ['Espresso', 'Leche vaporizada', 'Espuma de leche'],
    caracteristicas: 'Bebida con una capa de espuma de leche y sabor equilibrado entre café y leche.',
    precio: 220,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con leche'
  },
  {
    nombre: 'Mocha',
    ingredientes: ['Espresso', 'Leche', 'Jarabe de chocolate', 'Crema batida'],
    caracteristicas: 'Combinación deliciosa de café, chocolate y crema, ideal para los amantes del chocolate.',
    precio: 250,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con leche'
  },
  {
    nombre: 'Americano',
    ingredientes: ['Espresso', 'Agua caliente'],
    caracteristicas: 'Café diluido hecho añadiendo agua caliente al espresso.',
    precio: 180,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'cafe'
  },
  {
    nombre: 'Macchiato',
    ingredientes: ['Espresso', 'Leche vaporizada', 'Espuma de leche'],
    caracteristicas: 'Espresso "manchado" con una pequeña cantidad de leche.',
    precio: 210,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con leche'
  },
  {
    nombre: 'Affogato',
    ingredientes: ['Espresso', 'Helado'],
    caracteristicas: 'Postre italiano que consiste en una bola de helado "ahogada" con un espresso caliente.',
    precio: 270,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con helado'
  },
  {
    nombre: 'Flat White',
    ingredientes: ['Espresso', 'Leche vaporizada'],
    caracteristicas: 'Café similar al latte, pero con menos espuma y más concentrado.',
    precio: 230,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con leche'
  },
  {
    nombre: 'Ristretto',
    ingredientes: ['Café molido finamente', 'Agua caliente'],
    caracteristicas: 'Espresso más corto y más concentrado que un espresso normal.',
    precio: 190,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'cafe'
  },
  {
    nombre: 'Turkish Coffee',
    ingredientes: ['Café molido grueso', 'Agua', 'Azúcar'],
    caracteristicas: 'Método de preparación de café tradicional en Turquía, donde se hierve café molido con agua y azúcar (opcional).',
    precio: 260,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'cafe'
  },
  {
    nombre: 'Irish Coffee',
    ingredientes: ['Café', 'Whiskey irlandés', 'Azúcar', 'Crema'],
    caracteristicas: 'Bebida que combina café, whiskey irlandés y azúcar, generalmente rematada con crema.',
    precio: 280,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con alcohol'
  },
  {
    nombre: 'Vienna Coffee',
    ingredientes: ['Café molido', 'Crema batida', 'Canela'],
    caracteristicas: 'Café negro con crema batida y a menudo espolvoreado con canela.',
    precio: 240,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con crema'
  },
  {
    nombre: 'Café au Lait',
    ingredientes: ['Café', 'Leche'],
    caracteristicas: 'Café hecho con partes iguales de café filtrado y leche caliente.',
    precio: 215,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con leche'
  },
  {
    nombre: 'Cortado',
    ingredientes: ['Espresso', 'Leche vaporizada'],
    caracteristicas: 'Espresso "cortado" con una pequeña cantidad de leche caliente.',
    precio: 205,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'cafe'
  },
  {
    nombre: 'Café con Leche',
    ingredientes: ['Café', 'Leche'],
    caracteristicas: 'Bebida que combina café y leche en proporciones iguales.',
    precio: 225,
    imagen: './assets/img/vaso-cafe-card.jpg',
    categoria: 'con leche'
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(){
  cafes.forEach(producto =>{
     
    const div = document.createElement("div");
    div.classList.add("shop-card");
    div.innerHTML = `<div class="img-contain-shop">
            <img class="shop-card-img" src="./assets/img/vaso-cafe-card.jpg" alt="${producto.nombre}">
          </div>
          <div class="texto-shop">
            <h2> ${producto.nombre}</h2>
            <p>${producto.caracteristicas}</p>
          </div>
          <div class="precio-shop">
            <p>$${producto.precio}</p>
            <a class="shop-btn" href="#shop"><span>Comprar</span></a>
          </div>
    `;

    contenedorProductos.append(div);
  })

}
cargarProductos()


const init = () => {
  iconMenu.addEventListener("click", toggle_menu);

  console.log(menu);
};


