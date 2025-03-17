const listaAmigos = [];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    listaAmigos.push(nombre);
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    
    input.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}
