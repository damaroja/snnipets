function mostrarAlerta(msg, type, nodo) {
  limpiarNodo(nodo);
  const p = document.createElement("p");
  if (type === "error") {
    p.classList.add("alert", "alert-danger");
  } else {
    p.classList.add("alert", "alert-success");
  }
  p.textContent = msg;
  nodo.appendChild(p);
  setTimeout(() => {
    p.remove();
  }, 3000);
}

function limpiarNodo(nodo) {
  while (nodo.hasChildNodes()) {
    nodo.removeChild(nodo.firstChild);
  }
}
