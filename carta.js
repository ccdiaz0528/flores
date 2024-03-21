// Definir la función para mostrar las flores y el mensaje
function mostrarFlores() {
    // Ocultar los botones y la pregunta
    document.getElementById("boton-si").style.display = "none";
    document.getElementById("boton-no").style.display = "none";
    document.getElementById("pregunta").style.display = "none";

    // Mostrar la imagen de las flores
    document.getElementById("imagen-flores").style.display = "block";

    // Mostrar el mensaje final
    document.getElementById("mensaje-final").style.display = "block";
    document.getElementById("mensaje-final").innerText = "Para ti, preciosa";

    // Mostrar corazones
    mostrarCorazones();
}

// Definir la función para mover el botón No
function moverBoton() {
    var botonNo = document.getElementById("boton-no");
    var nuevaPosicionX = Math.random() * (window.innerWidth - botonNo.offsetWidth);
    var nuevaPosicionY = Math.random() * (window.innerHeight - botonNo.offsetHeight);
    botonNo.style.left = nuevaPosicionX + "px";
    botonNo.style.top = nuevaPosicionY + "px";
}

// Función para mostrar corazones
function mostrarCorazones() {
    var corazonesContainer = document.getElementById("corazones-container");
    for (var i = 0; i < 150; i++) { // Mostrar 150 corazones
        var corazon = document.createElement("img");
        corazon.src = "corazon_amarillo.png";
        corazon.className = "corazon";
        corazonesContainer.appendChild(corazon);
        moverCorazon(corazon);
    }
}

// Función para mover un corazón
function moverCorazon(corazon) {
    var ventanaAncho = window.innerWidth;
    var ventanaAlto = window.innerHeight;
    var corazonAncho = corazon.offsetWidth;
    var corazonAlto = corazon.offsetHeight;
    var posX = Math.random() * (ventanaAncho - corazonAncho);
    var posY = Math.random() * (ventanaAlto - corazonAlto);
    corazon.style.left = posX + "px";
    corazon.style.top = posY + "px";

    var velocidadX = Math.random() * 4 - 2;
    var velocidadY = Math.random() * 4 - 2;

    function mover() {
        posX += velocidadX;
        posY += velocidadY;

        if (posX <= 0 || posX >= ventanaAncho - corazonAncho) {
            velocidadX *= -1;
        }
        if (posY <= 0 || posY >= ventanaAlto - corazonAlto) {
            velocidadY *= -1;
        }

        corazon.style.left = posX + "px";
        corazon.style.top = posY + "px";

        requestAnimationFrame(mover);
    }

    mover();
}

// Asignar eventos a los botones al cargar la página
window.onload = function() {
    document.getElementById("boton-si").addEventListener("click", mostrarFlores);
    document.getElementById("boton-no").addEventListener("click", moverBoton);
};
