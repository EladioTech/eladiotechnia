
const botonJugar = document.getElementById("boton-jugar");
const zonaJuego = document.getElementById("zona-juego");
const spectrum = document.getElementById("spectrum");

const selectorCinta = document.getElementById("selector-cinta");
const botonCambiarCinta = document.getElementById("boton-cambiar-cinta");
const estadoCinta = document.getElementById("estado-cinta");

const cintas = {
    parte1: {
        nombre: "Parte 1",
        archivo: "el_jardin_parte1.tap",
        url: "https://raw.githubusercontent.com/EladioTech/el-jardin-de-cristal/master/el_jardin_parte1.tap"
    },
    parte2a: {
        nombre: "Parte 2A",
        archivo: "el_jardin_parte2a.tap",
        url: "https://raw.githubusercontent.com/EladioTech/el-jardin-de-cristal/master/el_jardin_parte2a.tap"
    },
    parte2b: {
        nombre: "Parte 2B",
        archivo: "el_jardin_parte2b.tap",
        url: "https://raw.githubusercontent.com/EladioTech/el-jardin-de-cristal/master/el_jardin_parte2b.tap"
    },
    parte2c: {
        nombre: "Parte 2C",
        archivo: "el_jardin_parte2c.tap",
        url: "https://raw.githubusercontent.com/EladioTech/el-jardin-de-cristal/master/el_jardin_parte2c.tap"
    }
};

let emulador = null;
let emuladorCargado = false;
let cintaActual = "parte1";

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
        try {
            emulador = Turbo80(spectrum, {
                load: cintas.parte1.url,
                model: "128k",
                lang: "es",
                touch: 1,
                keyboard: 1,
                sound: true,
                crt: true
            });

            emuladorCargado = true;
            estadoCinta.textContent = "Emulador iniciado: Parte 1.";
        } catch (error) {
            estadoCinta.textContent =
                "No se ha podido iniciar el emulador.";
            console.error("Error al iniciar Turbo80:", error);
        }
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

botonCambiarCinta.addEventListener("click", async () => {
    if (!emuladorCargado || !emulador) {
        estadoCinta.textContent =
            "Primero pulsa «Jugar demo» para iniciar el emulador.";
        return;
    }

    const seleccion = selectorCinta.value;
    const cinta = cintas[seleccion];

    if (!cinta) {
        estadoCinta.textContent = "Selecciona una cinta válida.";
        return;
    }

    if (seleccion === cintaActual) {
        estadoCinta.textContent =
            `${cinta.nombre} ya es la cinta seleccionada.`;
        return;
    }

    botonCambiarCinta.disabled = true;
    selectorCinta.disabled = true;
    estadoCinta.textContent = `Preparando ${cinta.nombre}...`;

    try {
        await emulador.load(cinta.url, cinta.archivo);

        cintaActual = seleccion;

        estadoCinta.textContent =
            `${cinta.nombre} preparada. Vuelve al emulador y pulsa ENTER cuando el juego lo solicite.`;

    } catch (error) {
        estadoCinta.textContent =
            `No se ha podido cargar ${cinta.nombre}. Comprueba la conexión e inténtalo de nuevo.`;

        console.error("Error al cambiar de cinta:", error);

    } finally {
        botonCambiarCinta.disabled = false;
        selectorCinta.disabled = false;
    }
});
