const carrito = {};
let total = 0;

function agregarProducto(nombre, precio) {

  // Si el producto ya existe
  if (carrito[nombre]) {
    carrito[nombre].cantidad++;
  } else {
    carrito[nombre] = {
      precio: precio,
      cantidad: 1
    };
  }

  renderizarCarrito();
}

function renderizarCarrito() {

  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  total = 0;

  for (const producto in carrito) {

    const item = document.createElement("div");
    item.classList.add("item");

    const subtotal =
      carrito[producto].precio * carrito[producto].cantidad;

    total += subtotal;

    item.innerHTML = `
      <div>
        <strong>${producto}</strong>
        <small>x${carrito[producto].cantidad}</small>
      </div>

      <span>$${subtotal}</span>
    `;

    lista.appendChild(item);
  }

  document.getElementById("total").textContent = total;

  // Mostrar carrito flotante
  document.querySelector(".carrito").classList.add("activo");
}