(function() {
    const botonSi = document.getElementById("boton-si");
    const botonNo = document.getElementById("boton-no");
    const pregunta = document.getElementById("pregunta");
    const imagenFlores = document.getElementById("imagen-flores");
    const mensajeFinal = document.getElementById("mensaje-final");

    let corazones = [];

        function mostrarFlores() {
        if (botonSi && botonNo && pregunta) {
            botonSi.style.display = "none";
            botonNo.style.display = "none";
            pregunta.style.display = "none";
            // Mostrar el contenedor final centrado
            document.getElementById("final-container").style.display = "flex";
            mostrarCorazones();
        }
    }

        function moverBoton() {
            const botonNo = document.getElementById("boton-no");
            // Cambia a posición fija solo al primer click
            if (botonNo.style.position !== "fixed") {
                botonNo.style.position = "fixed";
                // Calcula la posición actual en pantalla y la mantiene
                const rect = botonNo.getBoundingClientRect();
                botonNo.style.left = rect.left + "px";
                botonNo.style.top = rect.top + "px";
                botonNo.style.margin = "0"; // Elimina el margen para evitar saltos
            }
            // Calcula límites de la ventana
            const maxX = window.innerWidth - botonNo.offsetWidth;
            const maxY = window.innerHeight - botonNo.offsetHeight;
            const nuevaPosicionX = Math.random() * maxX;
            const nuevaPosicionY = Math.random() * maxY;
            botonNo.style.left = nuevaPosicionX + "px";
            botonNo.style.top = nuevaPosicionY + "px";
        }

    function mostrarCorazones() {
        const corazonesContainer = document.getElementById("corazones-container");
        if (corazonesContainer) {
            corazones = [];
            corazonesContainer.innerHTML = "";
            const cantidad = 60; // Menos corazones para mejor rendimiento
            for (let i = 0; i < cantidad; i++) {
                const corazon = document.createElement("img");
                corazon.src = "corazon_amarillo.png";
                corazon.className = "corazon";
                corazon.style.position = "absolute";
                corazonesContainer.appendChild(corazon);

                corazones.push({
                    el: corazon,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: Math.random() * 4 - 2,
                    vy: Math.random() * 4 - 2
                });
            }
            animarCorazones();
        }
    }

    function animarCorazones() {
        const ancho = window.innerWidth;
        const alto = window.innerHeight;

        corazones.forEach(corazon => {
            corazon.x += corazon.vx;
            corazon.y += corazon.vy;

            // Rebote en los bordes
            if (corazon.x <= 0 || corazon.x >= ancho - 40) corazon.vx *= -1;
            if (corazon.y <= 0 || corazon.y >= alto - 40) corazon.vy *= -1;

            corazon.el.style.left = corazon.x + "px";
            corazon.el.style.top = corazon.y + "px";
        });

        requestAnimationFrame(animarCorazones);
    }

    if (botonSi && botonNo) {
        botonSi.addEventListener("click", mostrarFlores);
        botonNo.addEventListener("click", moverBoton);
    }
})();