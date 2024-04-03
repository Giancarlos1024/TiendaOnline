/*PRODUCTOS DE MONITORES*/
const products = [
  { name: 'Producto 1', price: 10, image: '../img/Monitor1.jpg' }, 
  { name: 'Producto 2', price: 20, image: '../img/Monitor2.jpg' },
  { name: 'Producto 3', price: 30, image: '../img/Monitor3.jpg' },
  { name: 'Producto 4', price: 50, image: '../img/Monitor4.jpg' },
];

const monitorsCarousel = document.getElementById('carousel');
const prevBtnMonitors = document.getElementById('prevBtn');
const nextBtnMonitors = document.getElementById('nextBtn');

let currentIndexMonitors = 0;

function renderMonitorsProduct(index) {
  monitorsCarousel.innerHTML = `
      <img src="${products[index].image}" alt="${products[index].name}">
      <div class="product-info">
          <h2>${products[index].name}</h2>
          <p>${products[index].price}</p>
          <button class="buy-btn" onclick="buyProduct(${index})">Comprar</button>
      </div>
  `;
}

  
function showPrevMonitorsProduct() {
  currentIndexMonitors = (currentIndexMonitors === 0) ? products.length - 1 : currentIndexMonitors - 1;
  renderMonitorsProduct(currentIndexMonitors);
}

function showNextMonitorsProduct() {
  currentIndexMonitors = (currentIndexMonitors === products.length - 1) ? 0 : currentIndexMonitors + 1;
  renderMonitorsProduct(currentIndexMonitors);
}

function buyProduct(index) {
  // Obtener el valor actual de las monedas del localStorage o establecer un valor predeterminado de 0
  let coins = parseInt(localStorage.getItem('correctAnswers')) || 0;
  console.log("Total de Monedas Actuales",coins);
  const productPrice = products[index].price;
  console.log("Precio del Producto a Comprar",productPrice);
  if (coins >= productPrice) { // Verificar si hay suficientes monedas
      coins -= productPrice; // Restar el precio del producto del total de monedas
      localStorage.setItem('correctAnswers', coins); // Actualizar las monedas en el localStorage
      document.getElementById("puntuacion").textContent = coins; // Actualizar las monedas en la interfaz
      console.log("Total de Monedas Despues de la compra",coins);

      // Almacenar la información completa del producto en el localStorage
      let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
      purchaseHistory.push(products[index]);
      localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
  } else {
      // Puedes mostrar un mensaje si el usuario no tiene suficientes monedas
      alert("No tienes suficientes monedas para comprar este producto.");
  }
}


  
prevBtnMonitors.addEventListener('click', showPrevMonitorsProduct);
nextBtnMonitors.addEventListener('click', showNextMonitorsProduct);
  
renderMonitorsProduct(currentIndexMonitors);

/*PRODUCTOS DE DISCO DUROS*/

const hddProducts = [
  { name: 'Disco Duro 1', price: 10, image: '../img/Disco1.jpg' },
  { name: 'Disco Duro 2', price: 40, image: '../img/Disco2.jpg' },
  { name: 'Disco Duro 3', price: 100, image: '../img/Disco3.jpg' },
  { name: 'Disco Duro 4', price: 120, image: '../img/Disco4.jpg' },
  // Agrega más productos si lo deseas
];

const hddCarousel = document.getElementById('carousel-hdd');
const prevBtnHDD = document.getElementById('prevBtnHDD');
const nextBtnHDD = document.getElementById('nextBtnHDD');

let currentIndexHDD = 0;

function renderHDDProduct(index) {
  hddCarousel.innerHTML = `
    <img src="${hddProducts[index].image}" alt="${hddProducts[index].name}">
    <div class="product-info">
      <h2>${hddProducts[index].name}</h2>
      <p>${hddProducts[index].price}</p>
      <button class="buy-btn" onclick="buyHDDProduct(${index})">Comprar</button>
    </div>
  `;
}

function showPrevHDDProduct() {
  currentIndexHDD = (currentIndexHDD === 0) ? hddProducts.length - 1 : currentIndexHDD - 1;
  renderHDDProduct(currentIndexHDD);
}

function showNextHDDProduct() {
  currentIndexHDD = (currentIndexHDD === hddProducts.length - 1) ? 0 : currentIndexHDD + 1;
  renderHDDProduct(currentIndexHDD);
}

function buyHDDProduct(index) {
  // Obtener el valor actual de las monedas del localStorage o establecer un valor predeterminado de 0
  let coins = parseInt(localStorage.getItem('correctAnswers')) || 0;
  console.log("Total de Monedas Actuales",coins);
  // Obtener el precio del disco duro seleccionado
  const productPrice = hddProducts[index].price;
  console.log("Precio del Producto a Comprar",productPrice);
  // Verificar si hay suficientes monedas para comprar el disco duro
  if (coins >= productPrice) {
    // Restar el precio del disco duro del total de monedas
    coins -= productPrice;

    // Actualizar las monedas en el localStorage
    localStorage.setItem('correctAnswers', coins);

    // Actualizar las monedas en la interfaz
    document.getElementById("puntuacion").textContent = coins;

    // Almacenar la información completa del producto en el localStorage
    let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.push(hddProducts[index]);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));

    // Opcional: Puedes mostrar un mensaje de éxito al usuario
    alert("¡Compra exitosa! ¡Disfruta tu nuevo disco duro!");
  } else {
    // Mostrar un mensaje de error si el usuario no tiene suficientes monedas
    alert("No tienes suficientes monedas para comprar este disco duro.");
  }
}


prevBtnHDD.addEventListener('click', showPrevHDDProduct);
nextBtnHDD.addEventListener('click', showNextHDDProduct);

renderHDDProduct(currentIndexHDD);

/*PRODUCTOS DE RAM*/
const ramProducts = [
  { name: 'RAM 1', price: 50, image: '../img/RAM1.jpg' },
  { name: 'RAM 2', price: 80, image: '../img/RAM2.jpg' },
  { name: 'RAM 3', price: 120, image: '../img/RAM3.jpg' },
  { name: 'RAM 4', price: 150, image: '../img/RAM4.jpg' },
  // Agrega más productos si lo deseas
];

const ramCarousel = document.getElementById('carousel-ram');
const prevBtnRAM = document.getElementById('prevBtnRAM');
const nextBtnRAM = document.getElementById('nextBtnRAM');

let currentIndexRAM = 0;

function renderRAMProduct(index) {
  ramCarousel.innerHTML = `
    <img src="${ramProducts[index].image}" alt="${ramProducts[index].name}">
    <div class="product-info">
      <h2>${ramProducts[index].name}</h2>
      <p>${ramProducts[index].price}</p>
      <button class="buy-btn" onclick="buyRAMProduct(${index})">Comprar</button>
    </div>
  `;
}

function showPrevRAMProduct() {
  currentIndexRAM = (currentIndexRAM === 0) ? ramProducts.length - 1 : currentIndexRAM - 1;
  renderRAMProduct(currentIndexRAM);
}

function showNextRAMProduct() {
  currentIndexRAM = (currentIndexRAM === ramProducts.length - 1) ? 0 : currentIndexRAM + 1;
  renderRAMProduct(currentIndexRAM);
}

function buyRAMProduct(index) {
  // Obtener el valor actual de las monedas del localStorage o establecer un valor predeterminado de 0
  let coins = parseInt(localStorage.getItem('correctAnswers')) || 0;
  
  // Obtener el precio de la RAM seleccionada
  const productPrice = ramProducts[index].price;

  // Verificar si hay suficientes monedas para comprar la RAM
  if (coins >= productPrice) {
    // Restar el precio de la RAM del total de monedas
    coins -= productPrice;

    // Actualizar las monedas en el localStorage
    localStorage.setItem('correctAnswers', coins);

    // Actualizar las monedas en la interfaz
    document.getElementById("puntuacion").textContent = coins;

    // Almacenar la información completa del producto en el localStorage
    let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.push(ramProducts[index]);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));

    // Opcional: Puedes mostrar un mensaje de éxito al usuario
    alert("¡Compra exitosa! ¡Disfruta tu nueva memoria RAM!");
  } else {
    // Mostrar un mensaje de error si el usuario no tiene suficientes monedas
    alert("No tienes suficientes monedas para comprar esta memoria RAM.");
  }
}

prevBtnRAM.addEventListener('click', showPrevRAMProduct);
nextBtnRAM.addEventListener('click', showNextRAMProduct);

renderRAMProduct(currentIndexRAM);


/* PRODUCTOS DE TECLADO */
const keyboardProducts = [
  { name: 'Teclado 1', price: 30, image: '../img/Teclado1.jpg' },
  { name: 'Teclado 2', price: 40, image: '../img/Teclado2.jpg' },
  { name: 'Teclado 3', price: 50, image: '../img/Teclado3.jpg' },
  { name: 'Teclado 4', price: 60, image: '../img/Teclado4.jpg' },
  // Agrega más productos si lo deseas
];

const keyboardCarousel = document.getElementById('carousel-tcl');
const prevBtnKeyboard = document.getElementById('prevBtnTCL');
const nextBtnKeyboard = document.getElementById('nextBtnTCL');

let currentIndexKeyboard = 0;

function renderKeyboardProduct(index) {
  keyboardCarousel.innerHTML = `
    <img src="${keyboardProducts[index].image}" alt="${keyboardProducts[index].name}">
    <div class="product-info">
      <h2>${keyboardProducts[index].name}</h2>
      <p>${keyboardProducts[index].price}</p>
      <button class="buy-btn" onclick="buyKeyboardProduct(${index})">Comprar</button>
    </div>
  `;
}

function showPrevKeyboardProduct() {
  currentIndexKeyboard = (currentIndexKeyboard === 0) ? keyboardProducts.length - 1 : currentIndexKeyboard - 1;
  renderKeyboardProduct(currentIndexKeyboard);
}

function showNextKeyboardProduct() {
  currentIndexKeyboard = (currentIndexKeyboard === keyboardProducts.length - 1) ? 0 : currentIndexKeyboard + 1;
  renderKeyboardProduct(currentIndexKeyboard);
}

function buyKeyboardProduct(index) {
  // Obtener el valor actual de las monedas del localStorage o establecer un valor predeterminado de 0
  let coins = parseInt(localStorage.getItem('correctAnswers')) || 0;
  
  // Obtener el precio del teclado seleccionado
  const productPrice = keyboardProducts[index].price;

  // Verificar si hay suficientes monedas para comprar el teclado
  if (coins >= productPrice) {
    // Restar el precio del teclado del total de monedas
    coins -= productPrice;

    // Actualizar las monedas en el localStorage
    localStorage.setItem('correctAnswers', coins);

    // Actualizar las monedas en la interfaz
    document.getElementById("puntuacion").textContent = coins;

    // Almacenar la información completa del producto en el localStorage
    let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.push(keyboardProducts[index]);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));

    // Opcional: Puedes mostrar un mensaje de éxito al usuario
    alert("¡Compra exitosa! ¡Disfruta tu nuevo teclado!");
  } else {
    // Mostrar un mensaje de error si el usuario no tiene suficientes monedas
    alert("No tienes suficientes monedas para comprar este teclado.");
  }
}

prevBtnKeyboard.addEventListener('click', showPrevKeyboardProduct);
nextBtnKeyboard.addEventListener('click', showNextKeyboardProduct);

renderKeyboardProduct(currentIndexKeyboard);

/* PRODUCTOS DE CPU */
const cpuProducts = [
  { name: 'CPU 1', price: 200, image: '../img/CPU1.jpg' },
  { name: 'CPU 2', price: 300, image: '../img/CPU2.jpg' },
  { name: 'CPU 3', price: 400, image: '../img/CPU3.jpg' },
  { name: 'CPU 4', price: 500, image: '../img/CPU4.jpg' },
  // Agrega más productos si lo deseas
];

const cpuCarousel = document.getElementById('carousel-cpu');
const prevBtnCPU = document.getElementById('prevBtnCPU');
const nextBtnCPU = document.getElementById('nextBtnCPU');

let currentIndexCPU = 0;

function renderCPUProduct(index) {
  cpuCarousel.innerHTML = `
    <img src="${cpuProducts[index].image}" alt="${cpuProducts[index].name}">
    <div class="product-info">
      <h2>${cpuProducts[index].name}</h2>
      <p>${cpuProducts[index].price}</p>
      <button class="buy-btn" onclick="buyCPUProduct(${index})">Comprar</button>
    </div>
  `;
}

function showPrevCPUProduct() {
  currentIndexCPU = (currentIndexCPU === 0) ? cpuProducts.length - 1 : currentIndexCPU - 1;
  renderCPUProduct(currentIndexCPU);
}

function showNextCPUProduct() {
  currentIndexCPU = (currentIndexCPU === cpuProducts.length - 1) ? 0 : currentIndexCPU + 1;
  renderCPUProduct(currentIndexCPU);
}

function buyCPUProduct(index) {
  // Obtener el valor actual de las monedas del localStorage o establecer un valor predeterminado de 0
  let coins = parseInt(localStorage.getItem('correctAnswers')) || 0;
  
  // Obtener el precio de la CPU seleccionada
  const productPrice = cpuProducts[index].price;

  // Verificar si hay suficientes monedas para comprar la CPU
  if (coins >= productPrice) {
    // Restar el precio de la CPU del total de monedas
    coins -= productPrice;

    // Actualizar las monedas en el localStorage
    localStorage.setItem('correctAnswers', coins);

    // Actualizar las monedas en la interfaz
    document.getElementById("puntuacion").textContent = coins;

    // Almacenar la información completa del producto en el localStorage
    let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.push(cpuProducts[index]);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));

    // Opcional: Puedes mostrar un mensaje de éxito al usuario
    alert("¡Compra exitosa! ¡Disfruta tu nueva CPU!");
  } else {
    // Mostrar un mensaje de error si el usuario no tiene suficientes monedas
    alert("No tienes suficientes monedas para comprar esta CPU.");
  }
}

prevBtnCPU.addEventListener('click', showPrevCPUProduct);
nextBtnCPU.addEventListener('click', showNextCPUProduct);

renderCPUProduct(currentIndexCPU);

/* PRODUCTOS DE MOUSE */
const mouseProducts = [
  { name: 'Mouse 1', price: 15, image: '../img/Mouse1.jpg' },
  { name: 'Mouse 2', price: 25, image: '../img/Mouse2.jpg' },
  { name: 'Mouse 3', price: 35, image: '../img/Mouse3.jpg' },
  { name: 'Mouse 4', price: 45, image: '../img/Mouse4.jpg' },
  // Agrega más productos si lo deseas
];

const mouseCarousel = document.getElementById('carousel-mou');
const prevBtnMouse = document.getElementById('prevBtnMOU');
const nextBtnMouse = document.getElementById('nextBtnMOU');

let currentIndexMouse = 0;

function renderMouseProduct(index) {
  mouseCarousel.innerHTML = `
    <img src="${mouseProducts[index].image}" alt="${mouseProducts[index].name}">
    <div class="product-info">
      <h2>${mouseProducts[index].name}</h2>
      <p>${mouseProducts[index].price}</p>
      <button class="buy-btn" onclick="buyMouseProduct(${index})">Comprar</button>
    </div>
  `;
}

function showPrevMouseProduct() {
  currentIndexMouse = (currentIndexMouse === 0) ? mouseProducts.length - 1 : currentIndexMouse - 1;
  renderMouseProduct(currentIndexMouse);
}

function showNextMouseProduct() {
  currentIndexMouse = (currentIndexMouse === mouseProducts.length - 1) ? 0 : currentIndexMouse + 1;
  renderMouseProduct(currentIndexMouse);
}

function buyMouseProduct(index) {
  // Obtener el valor actual de las monedas del localStorage o establecer un valor predeterminado de 0
  let coins = parseInt(localStorage.getItem('correctAnswers')) || 0;
  
  // Obtener el precio del mouse seleccionado
  const productPrice = mouseProducts[index].price;

  // Verificar si hay suficientes monedas para comprar el mouse
  if (coins >= productPrice) {
    // Restar el precio del mouse del total de monedas
    coins -= productPrice;

    // Actualizar las monedas en el localStorage
    localStorage.setItem('correctAnswers', coins);

    // Actualizar las monedas en la interfaz
    document.getElementById("puntuacion").textContent = coins;

    // Almacenar la información completa del producto en el localStorage
    let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.push(mouseProducts[index]);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));

    // Opcional: Puedes mostrar un mensaje de éxito al usuario
    alert("¡Compra exitosa! ¡Disfruta tu nuevo mouse!");
  } else {
    // Mostrar un mensaje de error si el usuario no tiene suficientes monedas
    alert("No tienes suficientes monedas para comprar este mouse.");
  }
}

prevBtnMouse.addEventListener('click', showPrevMouseProduct);
nextBtnMouse.addEventListener('click', showNextMouseProduct);

renderMouseProduct(currentIndexMouse);

/* PRODUCTOS DE PROCESADOR */
const processorProducts = [
  { name: 'Procesador 1', price: 200, image: '../img/Procesador1.jpg' },
  { name: 'Procesador 2', price: 300, image: '../img/Procesador2.jpg' },
  { name: 'Procesador 3', price: 400, image: '../img/Procesador3.jpg' },
  { name: 'Procesador 4', price: 500, image: '../img/Procesador4.jpg' },
  // Agrega más productos si lo deseas
];

const processorCarousel = document.getElementById('carousel-pro');
const prevBtnProcessor = document.getElementById('prevBtnPRO');
const nextBtnProcessor = document.getElementById('nextBtnPRO');

let currentIndexProcessor = 0;

function renderProcessorProduct(index) {
  processorCarousel.innerHTML = `
    <img src="${processorProducts[index].image}" alt="${processorProducts[index].name}">
    <div class="product-info">
      <h2>${processorProducts[index].name}</h2>
      <p>${processorProducts[index].price}</p>
      <button class="buy-btn" onclick="buyProcessorProduct(${index})">Comprar</button>
    </div>
  `;
}

function showPrevProcessorProduct() {
  currentIndexProcessor = (currentIndexProcessor === 0) ? processorProducts.length - 1 : currentIndexProcessor - 1;
  renderProcessorProduct(currentIndexProcessor);
}

function showNextProcessorProduct() {
  currentIndexProcessor = (currentIndexProcessor === processorProducts.length - 1) ? 0 : currentIndexProcessor + 1;
  renderProcessorProduct(currentIndexProcessor);
}

function buyProcessorProduct(index) {
  // Obtener el valor actual de las monedas del localStorage o establecer un valor predeterminado de 0
  let coins = parseInt(localStorage.getItem('correctAnswers')) || 0;
  
  // Obtener el precio del procesador seleccionado
  const productPrice = processorProducts[index].price;

  // Verificar si hay suficientes monedas para comprar el procesador
  if (coins >= productPrice) {
    // Restar el precio del procesador del total de monedas
    coins -= productPrice;

    // Actualizar las monedas en el localStorage
    localStorage.setItem('correctAnswers', coins);

    // Actualizar las monedas en la interfaz
    document.getElementById("puntuacion").textContent = coins;

    // Almacenar la información completa del producto en el localStorage
    let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.push(processorProducts[index]);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));

    // Opcional: Puedes mostrar un mensaje de éxito al usuario
    alert("¡Compra exitosa! ¡Disfruta tu nuevo procesador!");
  } else {
    // Mostrar un mensaje de error si el usuario no tiene suficientes monedas
    alert("No tienes suficientes monedas para comprar este procesador.");
  }
}

prevBtnProcessor.addEventListener('click', showPrevProcessorProduct);
nextBtnProcessor.addEventListener('click', showNextProcessorProduct);

renderProcessorProduct(currentIndexProcessor);
