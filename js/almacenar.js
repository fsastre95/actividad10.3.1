// Variables del DOM
const contenedor = document.getElementById("contenedor");
const input = document.getElementById("item");
const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiar");

// Se carga el listado inicial
let items = JSON.parse(localStorage.getItem("items")) || [];

mostrarItems();

// Mostrar lista de items
function mostrarItems() {
    contenedor.innerHTML = "";
    if (items.length === 0) return;
    
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.classList.add("list-group-item");  // le da estilo con una clase de bootstrap
        contenedor.appendChild(li);
    })
}

// Agregar un item al hacer click en el boton Agregar
botonAgregar.addEventListener("click", () => {
  const nuevoItem = input.value.trim();
  if (nuevoItem !== "") {
    items.push(nuevoItem);                                
    localStorage.setItem("items", JSON.stringify(items));   
  }
  mostrarItems();
  input.value = "";
});

// Limpiar el listado al hacer click en el boton Limpiar  
botonLimpiar.addEventListener("click", () => {
    localStorage.removeItem("items");
    items = [];
    mostrarItems();
});
