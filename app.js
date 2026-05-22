let total = 0;

function agregarProducto(nombre, precio){

  const lista = document.getElementById("lista-carrito");

  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <span>${nombre}</span>
    <span>$${precio}</span>
  `;

  lista.appendChild(item);

  total += precio;

  document.getElementById("total").textContent = total;
}