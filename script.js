(function() {
    const botonSi = document.getElementById("boton-si");
    const botonNo = document.getElementById("boton-no");
    const pregunta = document.getElementById("pregunta");
    const imagenFlores = document.getElementById("imagen-flores");
    const mensajeFinal = document.getElementById("mensaje-final");

    function mostrarFlores() {
        if (botonSi && botonNo && pregunta && imagenFlores && mensajeFinal) {
            botonSi.style.display = "none";
            botonNo.style.display = "none";
            pregunta.style.display = "none";

            imagenFlores.style.display = "block";
            mensajeFinal.style.display = "block";
            mensajeFinal.innerText = "Para ti, preciosa";

            mostrarCorazones();
        }
    }

    function moverBoton() {
        const nuevaPosicionX = Math.random() * (window.innerWidth - botonNo.offsetWidth);
        const nuevaPosicionY = Math.random() * (window.innerHeight - botonNo.offsetHeight);
        botonNo.style.left = nuevaPosicionX + "px";
        botonNo.style.top = nuevaPosicionY + "px";
    }

    function mostrarCorazones() {
        const corazonesContainer = document.getElementById("corazones-container");
        if (corazonesContainer) {
            for (let i = 0; i < 150; i++) {
                const corazon = document.createElement("img");
                corazon.src = "corazon_amarillo.png";
                corazon.className = "corazon";
                corazonesContainer.appendChild(corazon);
                moverCorazon(corazon);
            }
        }
    }

    function moverCorazon(corazon) {
        const ventanaAncho = window.innerWidth;
        const ventanaAlto = window.innerHeight;
        const corazonAncho = corazon.offsetWidth;
        const corazonAlto = corazon.offsetHeight;
        let posX = Math.random() * (ventanaAncho - corazonAncho);
        let posY = Math.random() * (ventanaAlto - corazonAlto);
        let velocidadX = Math.random() * 4 - 2;
        let velocidadY = Math.random() * 4 - 2;

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

    if (botonSi && botonNo) {
        botonSi.addEventListener("click", mostrarFlores);
        botonNo.addEventListener("click", moverBoton);
    }
})();
