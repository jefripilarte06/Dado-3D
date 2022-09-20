            // Declarando variables de la botonera principal

var dado = document.getElementById('dado');
var dadoc1 = document.getElementById('dadoc1');
var dadoc2 = document.getElementById('dadoc2');

            // Agregando eventos de la botonera principal

var cambio1 = document.getElementById('lado1');
cambio1.addEventListener("click", clicked1a);
var cambio1 = document.getElementById('lado1');
cambio1.addEventListener("dblclick", clicked1a360);

var cambio2 = document.getElementById('lado2');
cambio2.addEventListener("click", clicked2a);

var cambio3 = document.getElementById('lado3');
cambio3.addEventListener("click", clicked3a);

var cambio4 = document.getElementById('lado4');
cambio4.addEventListener("click", clicked4a);

var cambio5 = document.getElementById('lado5');
cambio5.addEventListener("click", clicked5a);

var cambio6 = document.getElementById('lado6');
cambio6.addEventListener("click", clicked6a);

            // Creando las funciones de la botonera principal

function clicked1a(){
    dado.style.transform = "rotate(0deg)";
    dadoc1.style.transform = "rotate(0deg)";
}
function clicked1a360(){
    dado.style.transform = "rotatez(180deg)";
    dadoc1.style.transform = "rotatez(180deg)";
}

function clicked2a(){
    dado.style.transform = "rotateY(-90deg)";
    dadoc1.style.transform = "rotateY(-90deg)";
}

function clicked3a(){
    dado.style.transform = "rotateY(90deg)";
    dadoc1.style.transform = "rotateY(90deg)";
}

function clicked4a(){
    dado.style.transform = "rotateX(90deg)";
    dadoc1.style.transform = "rotateX(90deg)";
}

function clicked5a(){
    dado.style.transform = "rotateX(-90deg)";
    dadoc1.style.transform = "rotateX(-90deg)";
}

function clicked6a(){
    dado.style.transform = "rotateY(180deg)";
    dadoc1.style.transform = "rotateY(180deg)";
}

// Agregando eventos de la botonera secundaria para el dado grande (mouseover/mouseleave) y el pequeño (click)

var cambio1 = document.getElementById('lado1h');
cambio1.addEventListener("mouseover", hover1a);
var cambio1 = document.getElementById('lado1h');
cambio1.addEventListener("mouseleave", hover1b);

var cambio1 = document.getElementById('lado1h');
cambio1.addEventListener("click", clicked1b);
var cambio1 = document.getElementById('lado1h');
cambio1.addEventListener("dblclick", clicked1b360);


var cambio2 = document.getElementById('lado2h');
cambio2.addEventListener("mouseover", hover2a);
var cambio2 = document.getElementById('lado2h');
cambio2.addEventListener("mouseleave", hover2b);

var cambio2 = document.getElementById('lado2h');
cambio2.addEventListener("click", clicked2b);


var cambio3 = document.getElementById('lado3h');
cambio3.addEventListener("mouseover", hover3a);
var cambio3 = document.getElementById('lado3h');
cambio3.addEventListener("mouseleave", hover3b);

var cambio3 = document.getElementById('lado3h');
cambio3.addEventListener("click", clicked3b);


var cambio4 = document.getElementById('lado4h');
cambio4.addEventListener("mouseover", hover4a);
var cambio4 = document.getElementById('lado4h');
cambio4.addEventListener("mouseleave", hover4b);

var cambio4 = document.getElementById('lado4h');
cambio4.addEventListener("click", clicked4b);


var cambio5 = document.getElementById('lado5h');
cambio5.addEventListener("mouseover", hover5a);
var cambio5 = document.getElementById('lado5h');
cambio5.addEventListener("mouseleave", hover5b);

var cambio5 = document.getElementById('lado5h');
cambio5.addEventListener("click", clicked5b);


var cambio6 = document.getElementById('lado6h');
cambio6.addEventListener("mouseover", hover6a);
var cambio6 = document.getElementById('lado6h');
cambio6.addEventListener("mouseleave", hover6b);

var cambio6 = document.getElementById('lado6h');
cambio6.addEventListener("click", clicked6b);

// Creando las funciones de la botonera secundaria para el dado grande (mouseover/mouseleave) y el pequeño (click)

function hover1a(){
    dado.style.transform = "rotate(0deg)";
    dado.style.transform = "scale(105%)";
}
function hover1b(){
    dado.style.transform = "rotate(0deg)";
}

function hover2a(){
    dado.style.transform = "rotateY(-90deg)";
}
function hover2b(){
    dado.style.transform = "rotateY(0deg)";
}

function hover3a(){
    dado.style.transform = "rotateY(90deg)";
}
function hover3b(){
    dado.style.transform = "rotateY(0deg)";
}

function hover4a(){
    dado.style.transform = "rotateX(90deg)";
}
function hover4b(){
    dado.style.transform = "rotateX(0deg)";
}

function hover5a(){
    dado.style.transform = "rotateX(-90deg)";
}
function hover5b(){
    dado.style.transform = "rotateX(0deg)";
}

function hover6a(){
    dado.style.transform = "rotateY(180deg)";
}
function hover6b(){
    dado.style.transform = "rotateY(0deg)";
}



function clicked1b(){
    dadoc2.style.transform = "rotate(0deg)";
}
function clicked1b360(){
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