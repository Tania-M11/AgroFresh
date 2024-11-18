const $menu = document.querySelector(".burger-menu");
const $navigation = document.querySelector(".navigation");
const $body = document.querySelector("body");
const $img = document.querySelectorAll("img");
const $dishes = document.querySelectorAll(".dish");
const $btnAll = document.querySelector(".all");
const $containerDishes = document.querySelector(".dishes");
const $btnProductoDia = document.querySelector(".producto-del-dia");
const $btnFrutas = document.querySelector(".frutas");
const $btnVerduras = document.querySelector(".verduras");
const $btnTuberculos = document.querySelector(".tuberculos");
const $btnLegumbres= document.querySelector(".legumbres");
const $btnCereales = document.querySelector(".cereales");
const $btnCondimentos = document.querySelector(".condimentos");
const $btnPecuarios = document.querySelector(".pecuarios");
const $btnDerivados = document.querySelector(".derivados");



document.addEventListener("DOMContentLoaded", () => {
  events();
  dishes();
});

const events = () => {
  $menu.addEventListener("click", openMenu);
};

//  LazyLoad--img de forma asincrona
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imagen = entry.target;
      imagen.src = imagen.dataset.src;
      observer.unobserve(imagen);
    }
  });
});

// Imágenes
$img.forEach((imagen) => {
  observer.observe(imagen);
});

const openMenu = () => {
  $navigation.classList.remove("hidden");
  closeButton(); //solo se quiere que se dibuje el boton cuando se abra el menu
};

// creando el boton de cerrar
const closeButton = () => {
  const btnClose = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("full-screen");

  //Con qsALL se crea una coleccion de datos, un arreglo, tiene todos los everlay creados por el user
  //si los div creados es >0 termine ya ejecucuón del programa
  if (document.querySelectorAll(".full-screen").length > 0) return;

  //inyectar el overlay al body
  $body.appendChild(overlay);

  btnClose.textContent = "X";
  btnClose.classList.add("btn-close");
  // agregar la x con los estilos al html

  //Para agregar el botón de cerrar al menú
  $navigation.appendChild(btnClose);
  closeMenu(btnClose, overlay);
};

//Para quitar el menú
const closeMenu = (button, overlay) => {
  button.addEventListener("click", () => {
    $navigation.classList.add("hidden");
    // Para que el overlay no se cree una y otra vez una vez se preciona el botón, se quita el overlay
    overlay.remove();
    //para que no se genere una div de boton por cada click --->
    button.remove();
  });

  // Para cuando el overlay este activo, al precionar en la pantalla se debe quitar
  overlay.onclick = function () {
    overlay.remove();
    $navigation.classList.add("hidden");
    //-->
    button.remove();
  };
};

// Función para filtrar los productos por categorías
const dishes = () => {
  let dishesArray = [];
  $dishes.forEach((dish) => (dishesArray = [...dishesArray, dish]));

  const productoDelDia = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "productoDelDia"
  );
  const frutas = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "frutas"
  );
  const verduras = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "verduras"
  );
  const tuberculos = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "tuberculos"
  );
  const legumbres = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "legumbres"
  );
  const cereales = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "cereales"
  );
  const condimentos = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "condimentos"
  );
  const pecuarios = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "pecuarios"
  );
  const derivados = dishesArray.filter(
    (dish) => dish.getAttribute("data-dish") === "derivados"
  );

  showDishes(productoDelDia, frutas, verduras, tuberculos, legumbres, cereales, condimentos, pecuarios, derivados, dishesArray);
};

// Función para mostrar los productos filtrados
const showDishes = (productoDelDia, frutas, verduras, tuberculos, legumbres, cereales, condimentos, pecuarios, derivados, dishesArray) => {
  // Evento para el botón de "Productos del Día"
  document.querySelector(".all").addEventListener("click", () => {
    clearHtml($containerDishes);
    dishesArray.forEach((dish) => $containerDishes.appendChild(dish));
  });

  // Eventos para cada categoría de productos
  document.querySelector(".frutas").addEventListener("click", () => {
    clearHtml($containerDishes);
    frutas.forEach((dish) => $containerDishes.appendChild(dish));
  });
  
  document.querySelector(".verduras").addEventListener("click", () => {
    clearHtml($containerDishes);
    verduras.forEach((dish) => $containerDishes.appendChild(dish));
  });
  
  document.querySelector(".tuberculos").addEventListener("click", () => {
    clearHtml($containerDishes);
    tuberculos.forEach((dish) => $containerDishes.appendChild(dish));
  });
  
  document.querySelector(".legumbres").addEventListener("click", () => {
    clearHtml($containerDishes);
    legumbres.forEach((dish) => $containerDishes.appendChild(dish));
  });
  
  document.querySelector(".cereales").addEventListener("click", () => {
    clearHtml($containerDishes);
    cereales.forEach((dish) => $containerDishes.appendChild(dish));
  });
  
  document.querySelector(".condimentos").addEventListener("click", () => {
    clearHtml($containerDishes);
    condimentos.forEach((dish) => $containerDishes.appendChild(dish));
  });
  
  document.querySelector(".pecuarios").addEventListener("click", () => {
    clearHtml($containerDishes);
    pecuarios.forEach((dish) => $containerDishes.appendChild(dish));
  });
  
  document.querySelector(".derivados").addEventListener("click", () => {
    clearHtml($containerDishes);
    derivados.forEach((dish) => $containerDishes.appendChild(dish));
  });
};

// Función para limpiar el contenedor de productos antes de añadir los nuevos
const clearHtml = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

// Llamar la función para inicializar la tienda
dishes();