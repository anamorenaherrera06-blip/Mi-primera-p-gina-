// Lista de productos. Asegúrate de tener las imágenes correspondientes en tu carpeta img/
const productos = [
  { id: 1, nombre: "chalequito", precio: 12000, imagen: "IMG_3115.jpeg" },
  { id: 2, nombre: "pantalon negro", precio: 9500, imagen: "ropa1.jpeg" },
  { id: 3, nombre: "jean gris", precio: 11000, imagen: "jeangris.jpeg" },
  { id: 4, nombre: "remera summer", precio: 14500, imagen: "toprosa.jpeg" },
  { id: 5, nombre: "stiletto", precio: 9000, imagen: "zapatonegro.jpeg" },
  { id: 6, nombre: "body", precio: 8500, imagen: "bodynegro.jpeg" },
  { id: 7, nombre: "mini de jean", precio: 13000, imagen: "mini.jpeg" },
  { id: 8, nombre: "mini pollera", precio: 9700, imagen: "pollerarallada.jpeg" },
  { id: 9, nombre: "conjunto formal", precio: 10200, imagen: "conjuntorayas.jpeg" },
  { id: 10, nombre: "vestido", precio: 11500, imagen: "vestidorojo.jpeg" }
];

// Inicializa el carrito, cargando datos de localStorage si existen
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    mostrarCarrito(); // Inicializa el contenido del modal
});


// Función que muestra los productos en la página
function mostrarProductos(listaProductos) {
  const contenedor = document.getElementById("productosContainer");
  contenedor.innerHTML = ""; // Limpia el contenedor antes de mostrar
  
  listaProductos.forEach(prod => {
    contenedor.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card product-card h-100">
          <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text fw-bold">$${prod.precio}</p>
            <button class="btn btn-rosa mt-auto" onclick="agregarAlCarrito(${prod.id})">Agregar</button>
          </div>
        </div>
      </div>`;
  });
}

// Evento: Búsqueda dinámica por teclado
function buscar(e) {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
  mostrarProductos(filtrados);
}

// Evento: Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  // Se añade un alert para feedback
  alert(`¡${producto.nombre} agregado al carrito!`);
}

// Función: Muestra el contenido del carrito dentro del modal
function mostrarCarrito() {
  const contenedor = document.getElementById("contenidoCarrito");
  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='text-center'>Tu carrito está vacío.</p>";
    return;
  }
  let html = "<ul class='list-group'>";
  let total = 0;
  carrito.forEach((p, i) => {
    total += p.precio;
    html += `<li class='list-group-item d-flex justify-content-between align-items-center'>
              ${p.nombre} - $${p.precio}
              <button class='btn btn-sm btn-outline-danger' onclick='eliminarProducto(${i})'>x</button>
            </li>`;
  });
  html += `</ul><p class='mt-3 fw-bold text-end'>Total: $${total}</p>`;
  contenedor.innerHTML = html;
}

// Evento: Eliminar un producto específico del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Evento: Vaciar todo el carrito
function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrarCarrito();
  alert("El carrito ha sido vaciado.");
}
