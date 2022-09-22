//Helpers
/**
 * @param  {string} e - selector
 */
/**
 * @param {string} typeevent -
 * blur Cuando el elemento pierde el foco.
 * click El usuario hace clic sobre el elemento.
 * dblclick El usuario hace doble clic sobre el elemento.
 * focus El elemento gana el foco.
 * keydown El usuario presiona una tecla.
 * keypress El usuario presiona una tecla y la mantiene pulsada.
 * keyup El usuario libera la tecla.
 * load El documento termina su carga.
 * mousedown El usuario presiona el botón del ratón en un elemento.
 * mousemove El usuario mueve el puntero del ratón sobre un elemento.
 * mouseout El usuario mueve el puntero fuera de un elemento.
 * mouseover El usuario mantiene el puntero sobre un elemento.
 * mouseup El usuario libera el botón pulsado del ratón sobre un elemento.
 * unload El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.
 * @param {String} el - elemento
 * @param {void} callback - callback function
 */
const on = (typeevent, el, callback) => {
  el.addEventListener(typeevent, (e) => callback(e));
};
const $ = (e) => document.querySelector(e);
// Declarando variables de la botonera principal

var dado = $("#dado"),
  dadoc1 = $("#dadoc1"),
  dadoc2 = $("#dadoc2");

// Agregando eventos de la botonera principal
[
  ["click", "#lado1", clicked1a],
  ["dblclick", "#lado1", clicked1a360],
  ["click", "#lado2", clicked2a],
  ["click", "#lado3", clicked3a],
  ["click", "#lado4", clicked4a],
  ["click", "#lado5", clicked5a],
  ["click", "#lado6", clicked6a],
].forEach(([evento, selector, fn]) => {
  on(evento, $(selector), fn);
});

// Creando las funciones de la botonera principal

function clicked1a() {
  dado.style.transform = "rotate(0deg)";
  dadoc1.style.transform = "rotate(0deg)";
}
function clicked1a360() {
  dado.style.transform = "rotatez(180deg)";
  dadoc1.style.transform = "rotatez(180deg)";
}

function clicked2a() {
  dado.style.transform = "rotateY(-90deg)";
  dadoc1.style.transform = "rotateY(-90deg)";
}

function clicked3a() {
  dado.style.transform = "rotateY(90deg)";
  dadoc1.style.transform = "rotateY(90deg)";
}

function clicked4a() {
  dado.style.transform = "rotateX(90deg)";
  dadoc1.style.transform = "rotateX(90deg)";
}

function clicked5a() {
  dado.style.transform = "rotateX(-90deg)";
  dadoc1.style.transform = "rotateX(-90deg)";
}

function clicked6a() {
  dado.style.transform = "rotateY(180deg)";
  dadoc1.style.transform = "rotateY(180deg)";
}

// Agregando eventos de la botonera secundaria para el dado grande (mouseover/mouseleave) y el pequeño (click)
[
  ["mouseover", hover1a],
  ["mouseleave", hover1b],
  ["click", clicked1b],
  ["dblclick", clicked1b360],
].forEach(([evento, fn]) => {
  on(evento, $("#lado1h"), fn);
});

on("mouseover", $("#lado2h"), hover2a);

on("mouseleave", $("#lado2h"), hover2b);

on("click", $("#lado2h"), clicked2b);

on("mouseover", $("#lado3h"), hover3a);

on("mouseleave", $("#lado3h"), hover3b);

on("click", $("#lado3h"), clicked3b);

on("mouseover", $("#lado4h"), hover4a);

on("mouseleave", $("#lado4h"), hover4b);

on("click", $("#lado4h"), clicked4b);

on("mouseover", $("#lado5h"), hover5a);

on("mouseleave", $("#lado5h"), hover5b);

on("click", $("#lado5h"), clicked5b);

on("mouseover", $("#lado6h"), hover6a);

on("mouseleave", $("#lado6h"), hover6b);

on("click", $("#lado6h"), clicked6b);

// Creando las funciones de la botonera secundaria para el dado grande (mouseover/mouseleave) y el pequeño (click)

function hover1a() {
  //dado.style.transform = "rotate(0deg)";
}
function hover1b() {
  dado.style.transform = "rotate(0deg)";
}

function hover2a() {
  dado.style.transform = "rotateY(-90deg)";
}
function hover2b() {
  dado.style.transform = "rotateY(0deg)";
}

function hover3a() {
  dado.style.transform = "rotateY(90deg)";
}
function hover3b() {
  dado.style.transform = "rotateY(0deg)";
}

function hover4a() {
  dado.style.transform = "rotateX(90deg)";
}
function hover4b() {
  dado.style.transform = "rotateX(0deg)";
}

function hover5a() {
  dado.style.transform = "rotateX(-90deg)";
}
function hover5b() {
  dado.style.transform = "rotateX(0deg)";
}

function hover6a() {
  dado.style.transform = "rotateY(180deg)";
}
function hover6b() {
  dado.style.transform = "rotateY(0deg)";
}

function clicked1b() {
  dadoc2.style.transform = "rotate(0deg)";
}
function clicked1b360() {
  dadoc2.style.transform = "rotatez(180deg)";
}

function clicked2b() {
  dadoc2.style.transform = "rotateY(-90deg)";
}

function clicked3b() {
  dadoc2.style.transform = "rotateY(90deg)";
}

function clicked4b() {
  dadoc2.style.transform = "rotateX(90deg)";
}

function clicked5b() {
  dadoc2.style.transform = "rotateX(-90deg)";
}

function clicked6b() {
  dadoc2.style.transform = "rotateY(180deg)";
}
