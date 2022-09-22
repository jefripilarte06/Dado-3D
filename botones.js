// Declaracion de variables

var dado = $("#dado"),
  dadoc1 = $("#dadoc1"),
  dadoc2 = $("#dadoc2");

var c = $("#c"),
  c1 = $("#c1"),
  c2 = $("#c2");

var valor1 = $("#valor1"),
  valor2 = $("#valor2");

var historial1 = $("#historial1"),
  historial2 = $("#historial2");

var h1scroll = $("#historial1"),
  h2scroll = $("#historial2");

var estado = 1;

// El teteo

var dembow = new Audio("audio/El Yala.mp3");

on("click", $("#play"), () => {
  dembow.play();

  dado.style.transform = "rotateX(30deg) rotateY(-30deg)";
  dadoc1.style.transform = "rotateX(-30deg) rotateY(30deg)";
  dadoc2.style.transform = "rotateX(10deg) rotateZ(5deg)";

  dado.style.animation = "dembowyala 1.1s infinite 2.12s";
  dadoc1.style.animation = "dembowyalac1 1.1s infinite 2.12s";
  dadoc2.style.animation = "dembowyalac2 1.1s infinite 2.12s";
});

on("click", $("#pause"), () => {
  dembow.pause();
  dembow.currentTime = 0;

  dado.style.transform = "rotate(0deg)";
  dadoc1.style.transform = "rotate(0deg)";
  dadoc2.style.transform = "rotate(0deg)";

  dado.style.animation = "dembowyalapausa 0s none";
  dadoc1.style.animation = "dembowyalapausa 0s none";
  dadoc2.style.animation = "dembowyalapausa 0s none";
});

// Cambio de dados

on("click", $("#unDado"), modo1);

on("click", $("#dosDados"), modo2);

function modo1() {
  c.style.opacity = "1";
  c1.style.opacity = "0";
  c2.style.opacity = "0";

  historial1.style.opacity = "1";
  historial1.style.zIndex = "4";

  historial2.style.opacity = "0";
  historial2.style.zIndex = "1";

  estado = 1;
}

function modo2() {
  c.style.opacity = "0";
  c1.style.opacity = "1";
  c2.style.opacity = "1";

  historial1.style.opacity = "0";
  historial1.style.zIndex = "1";

  historial2.style.opacity = "1";
  historial2.style.zIndex = "4";

  estado = 2;
}

// Numeros aleatorios

const random = [
  "rotate(0deg)",
  "rotateY(-90deg)",
  "rotateY(90deg)",
  "rotateX(90deg)",
  "rotateX(-90deg)",
  "rotateY(180deg)",
];

const randomNumberMax = (max) => Math.floor(Math.random() * max);
const setRandom = () => {
  var valorRandom = randomNumberMax(6),
    valorRandomc1 = randomNumberMax(6),
    valorRandomc2 = randomNumberMax(6);

  dado.style.transform = random[valorRandom];
  dadoc1.style.transform = random[valorRandomc1];
  dadoc2.style.transform = random[valorRandomc2];

  if (estado === 1) {
    valor1.innerHTML += `${valorRandom + 1}<br><hr>`;
    h1scroll.scrollTop = h1scroll.scrollHeight;
  } else {
    valor2.innerHTML += `${valorRandomc1 + valorRandomc2 + 2}<br><hr>`;
    h2scroll.scrollTop = h2scroll.scrollHeight;
  }
};
on("click", $("#randomBt"), setRandom);
// Reiniciar

on("click", $("#reset"), () => {
  window.location.reload();
});
