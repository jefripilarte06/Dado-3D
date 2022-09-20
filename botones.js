            // Declaracion de variables

var dado = document.getElementById('dado');
var dadoc1 = document.getElementById('dadoc1');
var dadoc2 = document.getElementById('dadoc2');

var c = document.getElementById('c');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');

var valor1 = document.getElementById('valor1');
var valor2 = document.getElementById('valor2');

var historial1 = document.getElementById('historial1');
var historial2 = document.getElementById('historial2');

var h1scroll = document.getElementById('historial1');
var h2scroll = document.getElementById('historial2');

var estado = 1;


            // El teteo


var dembow = new Audio('audio/El Yala.mp3');

play.addEventListener('click', ()=>{
    dembow.play();

    dado.style.transform = "rotateX(30deg) rotateY(-30deg)";
    dadoc1.style.transform = "rotateX(-30deg) rotateY(30deg)";
    dadoc2.style.transform = "rotateX(10deg) rotateZ(5deg)";
    
    dado.style.animation = "dembowyala 1.1s infinite 2.12s";
    dadoc1.style.animation = "dembowyalac1 1.1s infinite 2.12s";
    dadoc2.style.animation = "dembowyalac2 1.1s infinite 2.12s";
});

pause.addEventListener('click', ()=>{
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



var unDado = document.getElementById('unDado');
unDado.addEventListener('click', modo1);

var dosDados = document.getElementById('dosDados');
dosDados.addEventListener('click', modo2);

function modo1 (){
    c.style.opacity = "1";
    c1.style.opacity = "0";
    c2.style.opacity = "0";

    historial1.style.opacity = "1";
    historial1.style.zIndex = "4";
    
    historial2.style.opacity = "0";
    historial2.style.zIndex = "1";

    estado = 1;
}

function modo2 (){
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



const random = ["rotate(0deg)", "rotateY(-90deg)", "rotateY(90deg)", "rotateX(90deg)", "rotateX(-90deg)", "rotateY(180deg)"];

var randomBt = document.getElementById('randomBt');
randomBt.addEventListener('click', setRandom);

function setRandom (){
    var valorRandom = Math.floor(Math.random() * 6);
    var valorRandomc1 = Math.floor(Math.random() * 6);
    var valorRandomc2 = Math.floor(Math.random() * 6);

    dado.style.transform = random[valorRandom];
    dadoc1.style.transform = random[valorRandomc1];
    dadoc2.style.transform = random[valorRandomc2];

    if (estado == 1) {
        valor1.innerHTML += valorRandom + 1 + "<br>" + "<hr>";
        h1scroll.scrollTop = h1scroll.scrollHeight;
    }else{
        valor2.innerHTML += valorRandomc1 + valorRandomc2 + 2 + "<br>" + "<hr>"
        h2scroll.scrollTop = h2scroll.scrollHeight;
    }

}


            // Reiniciar

            

var reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    window.location.reload();
})