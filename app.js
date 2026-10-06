const botonJugar = document.getElementById("boton-jugar");
const zonaJuego = document.getElementById("zona-juego");
const spectrum = document.getElementById("spectrum");

let emuladorCargado = false;

botonJugar.addEventListener("click", () => {

    zonaJuego.classList.remove("oculto");

    zonaJuego.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    if (emuladorCargado) {
        return;
    }

    const script = document.createElement("script");

    script.src = "https://turbo80.com/turbo80.js";

    script.onload = () => {

        Turbo80(spectrum, {
            load: "https://raw.githubusercontent.com/EladioTech/el-jardin-de-cristal/master/el_jardin_parte1.tap",
            model: "128k",
            lang: "es",
            touch: 1,
            keyboard: 1,
            sound: true,
            crt: true
        });

        emuladorCargado = true;
    };

    script.onerror = () => {

        spectrum.innerHTML = `
            <p style="padding:30px;text-align:center;color:#aaa;">
                No se ha podido cargar el emulador.
                Comprueba la conexión a Internet.
            </p>
        `;
    };

    document.body.appendChild(script);
});
