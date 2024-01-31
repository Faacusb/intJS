const cafes = [
  {
    id: 1,
    nombre: "Espresso",
    ingredientes: ["Café molido finamente", "Agua caliente"],
    caracteristicas:
      "Sabor intenso y concentrado, servido en pequeñas cantidades.",
    precio: 900,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "cafe",
  },
  {
    id: 2,
    nombre: "Latte",
    ingredientes: ["Espresso", "Leche vaporizada"],
    caracteristicas:
      "Bebida suave y cremosa, ideal para quienes prefieren un café con menos intensidad.",
    precio: 1200,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con leche",
  },
  {
    id: 3,
    nombre: "Cappuccino",
    ingredientes: ["Espresso", "Leche vaporizada", "Espuma de leche"],
    caracteristicas:
      "Bebida con una capa de espuma de leche y sabor equilibrado entre café y leche.",
    precio: 1300,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con leche",
  },
  {
    id: 4,
    nombre: "Mocha",
    ingredientes: ["Espresso", "Leche", "Jarabe de chocolate", "Crema batida"],
    caracteristicas:
      "Combinación deliciosa de café, chocolate y crema, ideal para los amantes del chocolate.",
    precio: 1500,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con leche",
  },
  {
    id: 5,
    nombre: "Americano",
    ingredientes: ["Espresso", "Agua caliente"],
    caracteristicas: "Café diluido hecho añadiendo agua caliente al espresso.",
    precio: 700,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "cafe",
  },
  {
    id: 6,
    nombre: "Macchiato",
    ingredientes: ["Espresso", "Leche vaporizada", "Espuma de leche"],
    caracteristicas: 'Espresso "manchado" con una pequeña cantidad de leche.',
    precio: 1200,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con leche",
  },
  {
    id: 7,
    nombre: "Affogato",
    ingredientes: ["Espresso", "Helado"],
    caracteristicas:
      'Postre italiano que consiste en una bola de helado "ahogada" con un espresso caliente.',
    precio: 1700,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con helado",
  },
  {
    id: 8,
    nombre: "Flat White",
    ingredientes: ["Espresso", "Leche vaporizada"],
    caracteristicas:
      "Café similar al latte, pero con menos espuma y más concentrado.",
    precio: 1200,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con leche",
  },
  {
    id: 9,
    nombre: "Ristretto",
    ingredientes: ["Café molido finamente", "Agua caliente"],
    caracteristicas:
      "Espresso más corto y más concentrado que un espresso normal.",
    precio: 700,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "cafe",
  },
  {
    id: 10,
    nombre: "Turkish Coffee",
    ingredientes: ["Café molido grueso", "Agua", "Azúcar"],
    caracteristicas:
      "Método de preparación de café tradicional en Turquía, donde se hierve café molido con agua y azúcar (opcional).",
    precio: 900,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "cafe",
  },
  {
    id: 11,
    nombre: "Irish Coffee",
    ingredientes: ["Café", "Whiskey irlandés", "Azúcar", "Crema"],
    caracteristicas:
      "Bebida que combina café, whiskey irlandés y azúcar, generalmente rematada con crema.",
    precio: 1500,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con alcohol",
  },
  {
    id: 12,
    nombre: "Vienna Coffee",
    ingredientes: ["Café molido", "Crema batida", "Canela"],
    caracteristicas:
      "Café negro con crema batida y a menudo espolvoreado con canela.",
    precio: 1000,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con crema",
  },
  {
    id: 13,
    nombre: "Café au Lait",
    ingredientes: ["Café", "Leche"],
    caracteristicas:
      "Café hecho con partes iguales de café filtrado y leche caliente.",
    precio: 1000,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con leche",
  },
  {
    id: 14,
    nombre: "Cortado",
    ingredientes: ["Espresso", "Leche vaporizada"],
    caracteristicas:
      'Espresso "cortado" con una pequeña cantidad de leche caliente.',
    precio: 900,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "cafe",
  },
  {
    id: 15,
    nombre: "Café con Leche",
    ingredientes: ["Café", "Leche"],
    caracteristicas: "Bebida que combina café y leche en proporciones iguales.",
    precio: 1000,
    imagen: "./assets/img/vaso-cafe-card.jpg",
    categoria: "con leche",
  },
];

const dividirProductos = (size) => {
  let listaProductos = [];

  for (let i = 0; i < cafes.length; i += size) {
    listaProductos.push(cafes.slice(i, i + size));
  }
  return listaProductos;
};




// AppState

const appState = {
  productos: dividirProductos(6),
};

console.log(appState);
