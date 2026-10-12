// ==========================================
// UNA PSICÓLOGA ME INVITA A ENTRAR EN SU OFICINA
// Estructura de nodos y variables
// ==========================================

const STORY = {

    // ==========================================
    // NODO 0 - ESCENA MADRE
    // ==========================================
    "0": {
        id: "0",
        text: `El edificio huele a desinfectante y a silencio. Las luces del pasillo parpadean con un zumbido eléctrico que se mezcla con el eco de tus propios pasos. Has venido a buscar un café, a matar el tiempo, a huir de la tarde gris que se cuela por los ventanales.

Pero algo te detiene.

Al final del pasillo, una puerta está entreabierta. De ella emerge una luz tenue, cálida, como de lámpara de aceite. Un aroma embriagador a magnolias y vainilla se enreda en tu garganta y baja hasta tu pecho, instalándose allí como una caricia líquida.

No puedes moverte.

La puerta cruje suavemente, como si alguien al otro lado supiera que estás ahí. Y entonces, una voz. Aterciopelada, grave, con una cadencia que parece acariciar cada sílaba:

— No te quedes ahí fuera, por favor... Puedes entrar.

Tu piel se eriza. Algo en su tono te dice que no es una invitación, es una orden disfrazada de oferta. Sientes un calor repentino en el vientre, un pulso que se acelera sin motivo aparente.

La mano te tiembla al empujar la puerta.`,
        image: "img/nodo0.jpg",
        sound: "audio/ambiente.mp3",
        effects: { deseo: 0, confianza: 0, dominio: 0, misterio: 0 },
        options: [
            { text: "Sentarte en el diván", next: "1.1", effects: { confianza: 2, deseo: 1 } },
            { text: "Quedarte de pie, desafiando su mirada", next: "1.2", effects: { dominio: 2, misterio: 1 } },
            { text: "Acercarte a la estantería y tocar un libro", next: "1.3", effects: { misterio: 2, confianza: 1 } }
        ]
    },

    // ==========================================
    // NODO 1.1 - EL DIVÁN
    // ==========================================
    "1.1": {
        id: "1.1",
        text: `El diván exhala un aroma a lavanda y a secretos. Te hundes en su terciopelo crema y sientes cómo la tela se adapta a la curva de tu espalda, como si te conociera de antes.

Ella se levanta con una lentitud deliberada. El roce de su falda lápiz contra sus muslos produce un susurro que se mezcla con el crepitar de la lámpara. Camina hacia ti con la seguridad de quien sabe exactamente el efecto que causa.

Se sienta en el borde del diván, a la altura de tu cadera. No demasiado cerca, pero lo suficiente para que percibas el calor que desprende su cuerpo. Su perfume a magnolias se intensifica, envolviéndote en una niebla densa y dulce.

— Me gusta cómo te has sentado —dice, con un tono que es mitad observación clínica, mitad caricia—. Sin rigidez. Sin defensas. Como si supieras que aquí no necesitas protegerte de nada.

Sus dedos juegan con el borde de su falda, subiendo y bajando un centímetro, como si estuviera acariciando la tela... o como si estuviera marcando el ritmo de algo que aún no ha empezado.

— Dime... ¿qué es lo que más deseas en este momento?`,
        image: "img/nodo1_1.jpg",
        sound: "audio/susurro.mp3",
        effects: { confianza: 2, deseo: 1 },
        options: [
            { text: "Responder con honestidad: \"Deseo que me toques\"", next: "1.1.1", effects: { deseo: 3, confianza: 1 } },
            { text: "Responder con un juego: \"Y tú, ¿qué deseas?\"", next: "1.1.2", effects: { dominio: 2, misterio: 2 } },
            { text: "Guardar silencio y sostener su mirada", next: "1.1.3", effects: { misterio: 2, dominio: 1 } }
        ]
    },

    // ==========================================
    // NODO 1.1.1 - EL CONTACTO
    // ==========================================
    "1.1.1": {
        id: "1.1.1",
        text: `Su mano sigue entrelazada con la tuya. Sus dedos son largos, sus uñas cuidadas, y su piel huele a crema de almendras. Sin soltarte, se inclina y apoya su mejilla contra tu hombro. Sientes el peso de su cabeza, el calor de su aliento a través de la tela de tu camisa.

— ¿Sabes una cosa? —murmura contra tu cuello—. Cuando entraste por esa puerta, supe que no venías a por café.

Su mano libre se posa sobre tu rodilla. La palma caliente, estática, esperando tu permiso tácito.

— Venías a que alguien te viera. A que alguien te deseara. A que alguien... —sus dedos trazan un círculo lento en tu muslo— ...te recordara que eres carne viva, y no solo una mente que se agota.

Su boca roza tu lóbulo de la oreja. Un roce apenas perceptible, pero que envía una descarga eléctrica hasta tu vientre.

— ¿Quieres que te recuerde quién eres?`,
        image: "img/nodo1_1_1.jpg",
        sound: "audio/respiracion.mp3",
        options: [
            { text: "Decir \"Sí\" con la voz rota", next: "FINAL_A_BESO", effects: { deseo: 4, confianza: 2 } },
            { text: "Tomar su mano y llevarla a tu pecho", next: "FINAL_B_CONTROL", effects: { dominio: 2, deseo: 1 } },
            { text: "Apartar su mano suavemente y sonreír", next: "FINAL_C_ESPEJO", effects: { misterio: 3, confianza: 1 } }
        ]
    },

    // ==========================================
    // NODO 1.1.2 - EL JUEGO DEL ESPEJO
    // ==========================================
    "1.1.2": {
        id: "1.1.2",
        text: `Ella se ríe con suavidad, un sonido que vibra en el aire como una nota musical.

— Astuto —dice—. Me gusta que devuelvas la pregunta. Eso significa que no eres un libro abierto.

Se levanta y camina hacia la ventana. La luz de la lámpara dibuja su silueta a través de la blusa de seda: el arco de su espalda, la curva de sus caderas, el contorno de sus piernas bajo la falda.

— Llevo tres años en este edificio. He visto pasar cientos de personas. Pero tú... —se gira lentamente— tú tienes algo que no sabes que tienes.

Apoya sus manos en el respaldo de una silla y te mira desde la distancia.

— Tienes el poder de hacer que la gente quiera desnudarse delante de ti. Sin que digas una palabra.

Se acerca de nuevo, pero esta vez no se sienta. Se detiene frente a ti, con sus piernas rozando tus rodillas.

— Dime... ¿te gusta el poder que tienes?`,
        image: "img/nodo1_1_2.jpg",
        sound: "audio/misterio.mp3",
        options: [
            { text: "Decir \"Sí, y me encanta usarlo contigo\"", next: "FINAL_B_CONTROL", effects: { dominio: 3, deseo: 2 } },
            { text: "Decir \"No lo sé. Tú dime qué ves en mí\"", next: "FINAL_C_ESPEJO", effects: { confianza: 2, misterio: 2 } },
            { text: "Poner tu mano sobre su cadera y atraerla hacia ti", next: "FINAL_A_BESO", effects: { deseo: 3, dominio: 1 } }
        ]
    },

    // ==========================================
    // NODO 1.1.3 - EL LENGUAJE DEL CUERPO
    // ==========================================
    "1.1.3": {
        id: "1.1.3",
        text: `El silencio se extiende como una manta. Ella no aparta la mirada. Tú tampoco. En algún lugar del edificio, un ascensor se abre y se cierra. Pero aquí, en esta burbuja de luz ámbar, solo existís vosotros.

Ella da un paso adelante. Luego otro. Se detiene a un palmo de ti y, sin apartar los ojos, se arrodilla lentamente.

Sí. Se arrodilla.

Queda a la altura de tus rodillas, con las manos apoyadas sobre sus muslos, y te mira desde abajo. Es una postura de sumisión que, en ella, se convierte en una declaración de poder.

— Sabes —dice con voz baja— hay silencios que gritan más que las palabras. Y el tuyo... —acaricia tu rodilla con la punta de los dedos— el tuyo me está diciendo que quieres que te toque, pero que necesitas que yo dé el primer paso.

Sus dedos suben un centímetro.

— ¿He acertado?`,
        image: "img/nodo1_1_3.jpg",
        sound: "audio/silencio.mp3",
        options: [
            { text: "Asentir sin palabras", next: "FINAL_A_BESO", effects: { deseo: 3, confianza: 2 } },
            { text: "Tomar su barbilla y levantarla", next: "FINAL_B_CONTROL", effects: { dominio: 3, deseo: 1 } },
            { text: "Bajar también tú al suelo, frente a ella", next: "FINAL_C_ESPEJO", effects: { confianza: 3, misterio: 2 } }
        ]
    },

    // ==========================================
    // NODO 1.2 - QUEDARTE DE PIE
    // ==========================================
    "1.2": {
        id: "1.2",
        text: `No te sientas.

Cruzas los brazos y te quedas de pie en el centro de la habitación, con la luz ámbar dibujando tu silueta sobre la alfombra. Es una postura sencilla, pero lo cambia todo. Ya no eres alguien que viene a recibir. Eres alguien que está decidiendo si se queda.

Ella lo nota. Claro que lo nota. Es psicóloga. Lee el lenguaje corporal como otras personas leen el periódico. Y lo que ve en ti le hace inclinar la cabeza con un gesto que es mitad curiosidad, mitad hambre.

— Interesante —dice, y se levanta de su silla con una lentitud que parece calculada—. La mayoría de la gente se sienta en cuanto se lo pido. Es como si tuvieran miedo de ocupar espacio.

Camina hacia ti. No directamente. Da un rodeo. Pasa por detrás del diván, roza la estantería con los dedos, se detiene junto a la lámpara y baja la intensidad de la luz. La habitación se vuelve más íntima. Más secreta.

— Pero tú no —continúa, acercándose—. Tú te quedas de pie. Tú ocupas espacio. Tú... —se detiene a un paso de ti— ...me obligas a mirarte desde abajo.

Sus ojos recorren tu cuerpo de arriba abajo. Sin prisa. Sin disimulo. Como si fueras una obra de arte que está considerando comprar.

— Dime —dice, y su voz se ha vuelto más grave—. ¿Qué es lo que quieres? ¿Que te admire? ¿Que te tema? ¿Que me arrodille?

Sus labios se curvan.

— O todo a la vez.`,
        image: "img/nodo1_2.jpg",
        sound: "audio/tension.mp3",
        effects: { dominio: 2, misterio: 1 },
        options: [
            { text: "Decir: \"Quiero que me digas la verdad\"", next: "1.2.1", effects: { confianza: 2, misterio: 2 } },
            { text: "Decir: \"Quiero que te arrodilles\"", next: "1.2.2", effects: { dominio: 3, deseo: 1 } },
            { text: "No decir nada. Simplemente mirarla.", next: "1.2.3", effects: { misterio: 2, dominio: 1 } }
        ]
    },

    // ==========================================
    // NODO 1.2.1 - LA VERDAD DESNUDA
    // ==========================================
    "1.2.1": {
        id: "1.2.1",
        text: `Ella te mira durante un largo segundo. Luego, hace algo inesperado. Se gira y camina hacia su escritorio. Abre un cajón. Saca una pequeña libreta de cuero negro y un bolígrafo.

— Siéntate —dice, señalando el diván—. Pero no porque yo te lo ordene. Siéntate porque vamos a hacer un ejercicio.

Esperas. No te sientas. Ella resopla, pero sonríe.

— Vale. De pie. Como quieras.

Abre la libreta por una página en blanco y escribe algo. Luego te la enseña. Solo hay una frase:

"Lo que más deseo en este momento es..."

— Complétala —dice—. En voz alta. Y después, yo te diré si es verdad o mentira.

Te tiende el bolígrafo.

— Pero antes —añade, y su voz baja hasta convertirse en un susurro—, quiero que sepas algo. Si mientes, lo sabré. Y si dices la verdad... —se muerde el labio inferior— ...puede que no pueda controlarme.`,
        image: "img/nodo1_2_1.jpg",
        sound: "audio/confesion.mp3",
        typingSound: true,   // ← NUEVO: activa el sonido de máquina de escribir
        options: [
            { text: "Escribir: \"Lo que más deseo es que me beses\"", next: "FINAL_A_BESO", effects: { deseo: 3, confianza: 2 } },
            { text: "Escribir: \"Lo que más deseo es verte perder el control\"", next: "FINAL_B_CONTROL", effects: { dominio: 3, deseo: 2 } },
            { text: "Escribir: \"Lo que más deseo es saber qué deseas tú\"", next: "FINAL_C_ESPEJO", effects: { misterio: 3, confianza: 2 } }
        ]
    },

    // ==========================================
    // NODO 1.2.2 - LA ORDEN
    // ==========================================
    "1.2.2": {
        id: "1.2.2",
        text: `La palabra queda flotando en el aire. Arrodíllate. No es una petición. No es una sugerencia. Es una orden. Y ella lo sabe.

Su sonrisa no desaparece. Pero cambia. Se vuelve más afilada. Más interesada.

— ¿Perdona? —dice, dando un paso hacia ti.

— Que te arrodilles —repites. Tu voz no tiembla. Eso te sorprende.

Ella se detiene a un palmo de ti. Su perfume te envuelve. Su mirada te taladra.

— ¿Y si no quiero?

— Entonces no lo hagas —respondes—. Pero entonces yo me iré. Y los dos sabremos que has tenido miedo.

El silencio se espesa. Ella te estudia. Te mide. Te sopesa. Y en sus ojos hay una batalla que no sabes si estás ganando o perdiendo.

Luego, muy lentamente, sin apartar la mirada, baja.

Se arrodilla frente a ti. Su falda se tensa sobre sus muslos. Sus manos descansan sobre ellos. Su barbilla está levantada. No es una postura de sumisión. Es una postura de poder. Porque arrodillarse, cuando lo haces por elección, es la forma más alta de control.

— Hecho —dice—. ¿Y ahora qué?`,
        image: "img/nodo1_2_2.jpg",
        sound: "audio/orden.mp3",
        options: [
            { text: "Acariciarle el pelo y decir: \"Ahora te toca esperar\"", next: "FINAL_B_CONTROL", effects: { dominio: 4, deseo: 2 } },
            { text: "Arrodillarte tú también, frente a ella", next: "FINAL_C_ESPEJO", effects: { confianza: 3, misterio: 2 } },
            { text: "Inclinarte y besarle el cuello", next: "FINAL_A_BESO", effects: { deseo: 3, dominio: 1 } }
        ]
    },

    // ==========================================
    // NODO 1.2.3 - EL SILENCIO QUE HABLA
    // ==========================================
    "1.2.3": {
        id: "1.2.3",
        text: `El silencio entre vosotros es denso. Casi sólido. Ella da un paso más. Ahora está tan cerca que puedes sentir el calor que irradia su cuerpo. Su perfume te llena los pulmones. Sus ojos te sostienen.

— Sabes —dice, y su voz es apenas un hilo de seda—, hay algo que me vuelve loca de ti.

Levanta una mano. La posa sobre tu pecho. Sientes su palma caliente a través de la tela. Sientes cómo su dedo índice traza un círculo lento sobre tu esternón.

— No necesitas hablar para que yo sepa lo que quieres.

Su mano sube. Roza tu clavícula. Llega hasta tu cuello. Sus dedos se posan sobre tu nuez, subiendo y bajando con tu respiración.

— Y eso —continúa— es lo más peligroso que me ha pasado en mucho tiempo. Porque significa que no puedo controlarte con palabras.

Se pone de puntillas. Su boca queda a un centímetro de la tuya. Su aliento te roza los labios.

— Y si no puedo controlarte... —susurra— ...entonces tengo que rendirme.`,
        image: "img/nodo1_2_3.jpg",
        sound: "audio/rendicion.mp3",
        options: [
            { text: "Besarla sin esperar más", next: "FINAL_A_BESO", effects: { deseo: 3, confianza: 2 } },
            { text: "Apartarla suavemente y sonreír", next: "FINAL_B_CONTROL", effects: { dominio: 3, misterio: 2 } },
            { text: "Decir: \"Ríndete entonces\"", next: "FINAL_C_ESPEJO", effects: { confianza: 3, misterio: 2 } }
        ]
    },

    // ==========================================
    // NODO 1.3 - LA ESTANTERÍA
    // ==========================================
    "1.3": {
        id: "1.3",
        text: `Necesitas hacer algo con las manos. No puedes quedarte quieto bajo su mirada, así que te acercas a la estantería que cubre la pared izquierda. Los lomos de los libros brillan bajo la luz ámbar: poesía, ensayo, novelas con títulos que no reconoces, algunos tomos antiguos con letras doradas que se están despegando.

Tomas uno al azar. Es delgado, de tapas duras, con un título que no alcanzas a leer porque la luz no llega. Lo abres. Las páginas huelen a papel viejo y a algo más. A ella. A su perfume, impregnado en el papel como si hubiera pasado horas leyéndolo en la cama.

— Ese es mi favorito.

Su voz te llega desde muy cerca. Por detrás. Tan cerca que sientes el calor de su aliento en la nuca. No la has oído acercarse. Se ha movido como un gato.

— Lo leo cada noche —continúa, y su voz es un susurro que te recorre la columna—. Hay un pasaje en la página 47 que me sé de memoria. ¿Quieres que te lo lea?

No esperas su respuesta. No hace falta. Ella ya está rodeándote, deslizándose entre tú y la estantería, tomando el libro de tus manos con una lentitud que parece una caricia. Sus dedos rozan los tuyos. Su cuerpo queda a un palmo del tuyo. Su perfume te envuelve.

Abre el libro por la página 47. Y comienza a leer.

— Hay una hora en la que la noche deja de ser noche y se convierte en otra cosa. Una hora en la que los cuerpos hablan un idioma que las bocas no conocen. Una hora en la que el deseo deja de ser una idea y se convierte en una certeza física, en un peso en el vientre, en un calor que sube por la columna y se instala en la garganta.

Esa hora no se elige. Se reconoce. Y cuando llega, no hay marcha atrás. Porque una vez que has sentido ese calor, ya no puedes fingir que no existe. Ya no puedes volver a la conversación educada, al café a media tarde, al libro que lees sin subrayar.

Esa hora es ahora.

Cierra el libro de golpe.

— Eso —dice, y su voz ha cambiado. Es más ronca. Más íntima— es lo que sentí cuando has entrado por esa puerta. Esa hora. La reconocí en tus ojos.

Deja el libro en la estantería, sin apartar la mirada de ti.

— Y ahora —continúa— dime. ¿Tú también la has reconocido?`,
        image: "img/nodo1_3.jpg",
        sound: "audio/lectura.mp3",
        typingSound: true,   // ← AÑADIR AQUÍ
        options: [
            { text: "Decir: \"Sí. La he reconocido.\"", next: "1.3.1", effects: { deseo: 3, confianza: 2 } },
            { text: "Decir: \"No sé de qué me hablas.\"", next: "1.3.2", effects: { dominio: 2, misterio: 2 } },
            { text: "Quitarle el libro y leer tú el siguiente pasaje", next: "1.3.3", effects: { misterio: 4, dominio: 2 } }
        ]
    },

    // ==========================================
    // NODO 1.3.1 - LA CONFESIÓN
    // ==========================================
    "1.3.1": {
        id: "1.3.1",
        text: `— Entonces ya no podemos fingir —dice ella.

Su mano, que hasta ahora colgaba a su lado, se levanta y se posa sobre tu mejilla. Su palma es suave, cálida, y huele a crema de almendras. Su pulgar traza un arco lento bajo tu ojo, como si estuviera memorizando tu rostro.

— Sabes lo que va a pasar, ¿verdad? —pregunta—. Si te quedas. Si no te vas ahora mismo. Si no sales por esa puerta y vuelves a tu café y a tu vida de siempre.

No respondes. No hace falta.

— Va a pasar esto —continúa, y su voz es un hilo de seda—. Voy a acercarme más. Voy a besarte. Y después...

Se detiene. Sus ojos bajan hasta tu boca. Luego hasta tu cuello. Luego más abajo.

— Después ya no habrá vuelta atrás. Porque yo no soy de las que se conforman con un beso. Yo soy de las que quieren todo. Todo el cuerpo. Toda la noche. Todo el silencio después.

Su mano baja de tu mejilla hasta tu cuello. Sus dedos rozan tu nuez.

— ¿Estás seguro de que quieres eso?`,
        image: "img/nodo1_3_1.jpg",
        sound: "audio/confesion.mp3",
        options: [
            { text: "Decir: \"Más que nada en el mundo\"", next: "FINAL_A_BESO", effects: { deseo: 4, confianza: 2 } },
            { text: "Decir: \"Quiero todo. Pero con una condición.\"", next: "FINAL_C_ESPEJO", effects: { confianza: 3, misterio: 3 } },
            { text: "Tomarla de la cintura y atraerla hacia ti sin decir nada", next: "FINAL_B_CONTROL", effects: { deseo: 3, dominio: 2 } }
        ]
    },

    // ==========================================
    // NODO 1.3.2 - EL MENTIROSO
    // ==========================================
    "1.3.2": {
        id: "1.3.2",
        text: `— Mentiroso —dice ella, y su dedo índice se posa sobre tu pecho.

Presiona ligeramente. Justo encima del corazón. Sientes tu propio latido, acelerado, traidor, golpeando contra su dedo.

— Tu cuerpo dice lo contrario —continúa—. Tu respiración dice lo contrario. Tus pupilas dicen lo contrario. Todo tú dice lo contrario.

Su dedo baja. Lentamente. Traza una línea desde tu pecho hasta tu ombligo. Se detiene justo en el borde de tu camisa.

— Pero me gusta que mientas —dice—. Porque los mentirosos son los que mejor se desnudan. Porque cuando por fin dicen la verdad, lo hacen con todo el cuerpo. Y eso... —sonríe— ...es mucho más interesante.

Se aparta. Camina hacia su escritorio. Se sienta en el borde, cruza las piernas y te mira desde allí. La luz ámbar dibuja sus curvas bajo la blusa de seda.

— Vamos a hacer un juego —dice—. Tú vas a intentar mentirme. Y yo voy a intentar que digas la verdad. Si ganas tú, hago lo que tú quieras. Si gano yo... —se muerde el labio— ...hago lo que yo quiera. ¿Trato?`,
        image: "img/nodo1_3_2.jpg",
        sound: "audio/juego.mp3",
        options: [
            { text: "Aceptar el juego: \"Trato\"", next: "FINAL_C_ESPEJO", effects: { misterio: 2, deseo: 2 } },
            { text: "Decir: \"No juego a juegos. Prefiero la verdad.\"", next: "FINAL_A_BESO", effects: { confianza: 3, deseo: 2 } },
            { text: "Acercarte a ella y quitarle el libro de las manos", next: "FINAL_B_CONTROL", effects: { dominio: 3, misterio: 2 } }
        ]
    },

    // ==========================================
    // NODO 1.3.3 - EL JUEGO DE LAS PALABRAS
    // ==========================================
    "1.3.3": {
        id: "1.3.3",
        text: `Tomas el libro de sus manos. Buscas una página al azar. Y lees en voz alta, sin apartar los ojos de los suyos.

— Hay una hora en la que el deseo deja de ser una idea y se convierte en una certeza física, en un peso en el vientre, en un calor que sube por la columna y se instala en la garganta.

Ella contiene la respiración. Sus labios se entreabren. No esperaba eso. No esperaba que tú también supieras jugar.

— Esa hora —continúas— es ahora.

Cierras el libro de golpe. El sonido resuena en la habitación como un disparo.

— Tu turno —dices—. Ahora léeme tú a mí.

Ella te mira. Hay algo nuevo en sus ojos. Algo que no estaba antes. Respeto. Y algo más. Algo que se parece al hambre.

— Vale —dice, y toma el libro—. Pero esta vez, lo leemos juntos.

Abre el libro por otra página. Y comienza a leer. Pero no en voz alta. En voz baja. Tan baja que tienes que acercarte para oírla. Tan baja que su aliento te roza la oreja. Tan baja que sus labios casi rozan tu cuello.

— Hay una hora en la que los cuerpos hablan un idioma que las bocas no conocen...`,
        image: "img/nodo1_3_3.jpg",
        sound: "audio/susurro_libro.mp3",
        typingSound: true,   // ← AÑADIR AQUÍ
        options: [
            { text: "Cerrar los ojos y dejarte llevar por su voz", next: "FINAL_C_ESPEJO", effects: { deseo: 3, misterio: 4 } },
            { text: "Quitarle el libro y leer tú el siguiente párrafo, pero susurrando", next: "FINAL_B_CONTROL", effects: { dominio: 4, deseo: 3 } },
            { text: "Besarla para que deje de leer", next: "FINAL_C_ESPEJO", effects: { deseo: 3, confianza: 3 } }
        ]
    },

    // ==========================================
    // FINALES
    // ==========================================
    "FINAL_A_BESO": {
        id: "FINAL_A_BESO",
        text: `La besas. Y el mundo se detiene.

Sus labios son una revelación. Suaves, cálidos, con un sabor que es mitad café, mitad deseo. Gimes contra su boca antes de poder evitarlo. Ella responde con un sonido que te recorre la columna como una descarga eléctrica.

Sus manos se aferran a tu camisa. Te atrae hacia ella. Su cuerpo se pega al tuyo y sientes cada curva, cada latido, cada temblor.

— Te estaba esperando —jadea entre besos—. Desde que has entrado. Desde antes. Desde siempre.

Te aparta lo justo para mirarte a los ojos. Los suyos están oscuros, dilatados, hambrientos.

— Dime que no te vas a ir —susurra—. Dime que te quedas.

— Me quedo —respondes.

Y entonces ella te lleva de la mano hasta el diván. Te sienta. Se arrodilla frente a ti. Y con una lentitud que es casi cruel, comienza a desabrochar los botones de tu camisa. Uno. Otro. Otro.

— Quiero verte —dice—. Quiero verte todo.

Y tú la dejas. Porque en este momento, no hay nada que desees más que ser visto por ella.`,
        image: "img/final_a.jpg",
        sound: "audio/final_a.mp3",
        typingSound: true,   // ← AÑADIR AQUÍ
        endTitle: "FIN A - ENTREGA TOTAL",
        endText: "\"A veces, el mayor acto de valentía es dejarse sostener.\""
    },

    "FINAL_B_CONTROL": {
        id: "FINAL_B_CONTROL",
        text: `No apartas su mano. Pero tampoco la dejas avanzar.

La sujetas con firmeza, entrelazando tus dedos con los suyos. Sus ojos se abren ligeramente. No esperaba eso.

— No tan rápido —dices. Tu voz suena más grave de lo que recordabas. Más segura—. Si vamos a jugar, jugamos con mis reglas.

Ella parpadea. Por primera vez desde que entraste en la oficina, la has sorprendido.

— ¿Tus reglas? —repite, con una sonrisa que es mitad curiosidad, mitad desafío—. ¿Y cuáles son?

— Primero —dices, soltando su mano y levantándote del diván—, tú te sientas.

Señalas el diván. Ella te mira. Hay un instante de duda. Un tira y afloja silencioso en el que ambos medís vuestras fuerzas.

Luego, obedece.

Se sienta. Cruza las piernas con lentitud, dejando que la falda se suba unos centímetros más de lo necesario. Una provocación. Pero tú no picas.

— Segundo —continúas, acercándote—, te callas.

Te arrodillas frente a ella. No como sumisión, sino como estrategia. Para quedar a su altura. Para mirarla directamente a los ojos.

— Y tercero —susurras, posando tus manos sobre sus rodillas—, no te mueves hasta que yo te lo diga.

Ella traga saliva. Lo ves. El movimiento de su garganta. El brillo de sus pupilas. La has atrapado.

Tus manos suben lentamente por sus muslos. La tela de la falda se desliza bajo tus dedos. Ella contiene la respiración. Sus manos se aferran al borde del diván.

— ¿Estás segura de que quieres jugar a esto? —preguntas, deteniéndote a un centímetro de donde ella quiere que llegues.

— Cállate y sigue —responde ella, con la voz ronca.

Sonríes. Ahora sí. Ahora es tu turno.`,
        image: "img/final_b.jpg",
        sound: "audio/final_b.mp3",
        typingSound: true,   // ← AÑADIR AQUÍ
        endTitle: "FIN B - EL JUEGO DEL CONTROL",
        endText: "\"A veces, el mayor poder es saber cuándo ceder... y cuándo no.\""
    },

    "FINAL_C_ESPEJO": {
        id: "FINAL_C_ESPEJO",
        text: `— No tan rápido —dices, apartando su mano con suavidad.

Ella arquea una ceja. No está acostumbrada a que la frenen.

— ¿Miedo? —pregunta, con una media sonrisa.

— Curiosidad —respondes—. Quiero saber qué hay detrás de esa puerta.

Señalas con la cabeza la puerta del fondo. La que está entreabierta. La que no habías visto hasta ahora. Ella sigue tu mirada y, por un segundo, su sonrisa titubea.

— Esa puerta no es para pacientes —dice.

— Yo no soy tu paciente —respondes.

El silencio se tensa. Ella te estudia. Te mide. Te sopesa.

Luego, se levanta. Y sin decir nada, camina hacia la puerta. La abre del todo.

Detrás hay una habitación pequeña. Un espejo de cuerpo entero. Una camilla. Velas encendidas. Y en las paredes, docenas de fotografías. Mujeres. Hombres. Parejas. Todos ellos mirando a cámara. Todos ellos con una expresión que reconoces: la de alguien que acaba de ser visto de verdad.

— Esto —dice ella, apoyada en el marco— es mi archivo. Mi colección. Las personas que han pasado por aquí y han dejado algo de sí mismas.

Se gira hacia ti.

— ¿Quieres formar parte de ella?

Te acercas. Miras las fotos. Hay algo en ellas que te atrae y te asusta a partes iguales. Es la desnudez. No la física. La otra.

— ¿Por qué yo? —preguntas.

— Porque tú no has venido a que te vea —dice—. Has venido a que te recuerde. Y eso... —se acerca— ...es mucho más raro. Y mucho más valioso.

Te toma de la mano. Te lleva hasta el espejo. Y allí, frente a vuestros reflejos, comienza a desabrochar los botones de tu camisa. Uno. Otro. Otro.

— No voy a tocarte —dice—. Todavía no. Primero quiero que te veas. Que te veas como yo te veo.`,
        image: "img/final_c.jpg",
        sound: "audio/final_c.mp3",
        typingSound: true,   // ← AÑADIR AQUÍ
        endTitle: "FIN C - EL ESPEJO",
        endText: "\"Cuando te ves de verdad, dejas de necesitar que otros te vean.\""
    }
};

// ==========================================
// ESCENAS DESBLOQUEABLES
// ==========================================

// ------------------------------------------
// ESCENAS DE UMBRAL
// Se muestran ANTES de un final, si una variable >= 7
// ------------------------------------------
const UMBRAL_ESCENAS = {
    // Cada entrada tiene un "finalAsociado" que indica a qué final pertenece
    "DESEO": {
        id: "UMBRAL_DESEO",
        finalAsociado: "FINAL_A_BESO",   // ← Solo se activa antes del FINAL A
        condition: (vars) => vars.deseo >= 7,
        text: `Antes de que el final ocurra, hay un momento de pausa. Ella te mira. Tú la miras. Y entonces, sin decir nada, se lleva la mano al escote de su blusa. Desabrocha el primer botón. Luego el segundo. Luego el tercero.

— Quiero que me veas —dice—. De verdad. No la versión profesional. No la psicóloga. Yo.

La blusa cae. Debajo, un sujetador de encaje negro que apenas cubre lo esencial. Su piel brilla bajo la luz ámbar. Sus pechos suben y bajan con una respiración que ya no puede controlar.

— ¿Te gusta lo que ves?

No esperas a que termine la pregunta. Te acercas. Posas tus manos sobre su cintura. Sientes el calor de su piel a través del encaje. Ella gime. Un sonido pequeño, húmedo, que te recorre la columna.

— Eso —dice— eso es lo que quería. Que me miraras así. Como si fuera la única mujer del mundo.

Te toma de la mano. Te lleva hasta el diván. Y allí, con la blusa abierta y el pelo suelto, se entrega a ti sin reservas. Sin prisa. Sin miedo.

— Hazme tuya —susurra—. Pero despacio. Quiero recordarlo todo.

Y tú lo haces. Despacio. Muy despacio. Hasta que los dos perdéis la noción del tiempo.`,
        image: "img/umbral_deseo.jpg",
        sound: "audio/suspiro.mp3"
    },

    "DOMINIO": {
        id: "UMBRAL_DOMINIO",
        finalAsociado: "FINAL_B_CONTROL",  // ← Solo antes del FINAL B
        condition: (vars) => vars.dominio >= 7,
        text: `Ella intenta decir algo. Pero tú no la dejas.

— Silencio —dices.

Y ella calla. Sorprendida. Excitada. Sus ojos brillan con una mezcla de desafío y rendición.

— De rodillas —ordenas.

Y ella obedece. Lentamente. Sin apartar la mirada. Su falda se tensa sobre sus muslos. Sus manos descansan sobre ellos. Su barbilla está levantada. No es sumisión. Es poder. Porque arrodillarse cuando lo haces por elección es la forma más alta de control.

— Ahora —dices, mientras caminas a su alrededor— vamos a hacer esto a mi manera.

Te detienes detrás de ella. Te inclinas. Tu boca roza su oreja.

— Vas a hacer exactamente lo que yo te diga. Ni más. Ni menos. ¿Entendido?

— Sí —jadea.

— Sí, ¿qué?

— Sí, mi... —traga saliva— ...mi dueño.

Sonríes. Saboreas el momento. Luego, posas tus manos sobre sus hombros. Y comienzas a guiarla. A mostrarle lo que quieres. A tomar lo que es tuyo.

Y ella se deja. Porque en el fondo, no hay nada que desee más que ser guiada por alguien que sabe lo que quiere.`,
        image: "img/umbral_dominio.jpg",
        sound: "audio/latido.mp3"
    },

    "MISTERIO": {
        id: "UMBRAL_MISTERIO",
        finalAsociado: "FINAL_C_ESPEJO",   // ← Solo antes del FINAL C
        condition: (vars) => vars.misterio >= 7,
        text: `— Antes de que sigamos —dice ella— hay algo que quiero que veas.

Se levanta. Camina hacia la puerta del fondo. La que nunca has visto abrir. La abre.

Detrás hay una habitación pequeña. Un espejo de cuerpo entero. Una camilla. Velas encendidas. Y en las paredes, docenas de fotografías. Mujeres. Hombres. Parejas. Todos ellos mirando a cámara. Todos ellos con una expresión que reconoces: la de alguien que acaba de ser visto de verdad.

— Esto —dice ella— es mi archivo. Mi colección. Las personas que han pasado por aquí y han dejado algo de sí mismas.

Se gira hacia ti.

— ¿Quieres formar parte de ella?

Te acercas. Miras las fotos. Hay algo en ellas que te atrae y te asusta a partes iguales. Es la desnudez. No la física. La otra.

— ¿Por qué yo? —preguntas.

— Porque tú no has venido a que te vea —dice—. Has venido a que te recuerde. Y eso... —se acerca— ...es mucho más raro. Y mucho más valioso.

Te toma de la mano. Te lleva hasta el espejo. Y allí, frente a vuestros reflejos, comienza a desabrochar los botones de tu camisa. Uno. Otro. Otro.

— No voy a tocarte —dice—. Todavía no. Primero quiero que te veas. Que te veas como yo te veo.`,
        image: "img/umbral_misterio.jpg",
        sound: "audio/latido.mp3"
    },

    "CONFIANZA": {
        id: "UMBRAL_CONFIANZA",
        finalAsociado: "FINAL_A_BESO",      // ← También puede salir con FINAL A
        condition: (vars) => vars.confianza >= 7,
        text: `— Espera —dice ella, y su voz tiembla.

La miras. Hay algo distinto en sus ojos. Algo más suave. Más vulnerable.

— Antes de seguir —continúa— quiero decirte algo. Algo que no le he dicho a nadie.

Se sienta en el borde del diván. De pronto parece más pequeña. Más real.

— Cuando entraste por esa puerta —dice— no fue casualidad. Te vi desde la ventana. Te vi cruzar el pasillo. Y supe que tenías que entrar. No porque yo te llamara. Porque necesitabas entrar.

Te mira. Sus ojos brillan.

— Llevo años buscando a alguien que no viniera a que le arreglara la vida. Alguien que viniera a... a estar. Simplemente a estar. Y tú... —traga saliva— ...tú eres el primero que lo ha hecho.

Se levanta. Se acerca. Toma tus manos.

— No quiero que esto sea una sesión. No quiero que seas un paciente. Quiero...

— ¿Qué quieres? —preguntas.

— Quiero que te quedes. No esta noche. No una hora. De verdad.

La besas. Suavemente. Sin prisa. Un beso que no es un principio, sino una promesa.`,
        image: "img/umbral_confianza.jpg",
        sound: "audio/suspiro.mp3"
    }
};

// ------------------------------------------
// ESCENAS DE MEMORIA
// Se muestran al INICIO de una nueva partida,
// si ya se ha completado cierto final antes
// ------------------------------------------
const MEMORIA_ESCENAS = {
    "FINAL_C_ESPEJO": {
        id: "MEMORIA_ESPEJO",
        text: `Vuelves al pasillo. La misma luz parpadeante. El mismo olor a desinfectante. Pero algo ha cambiado. Algo en ti.

Recuerdas sus ojos. Su voz. La forma en que te miró frente al espejo. "Mírate", te dijo. "Y dime qué ves."

Y ahora, mientras caminas hacia la puerta entreabierta, te das cuenta de que ya no tienes miedo de lo que vas a encontrar. Porque ya no eres el mismo que entró la primera vez.

La puerta se abre. Y ella está ahí. Como si nunca se hubiera ido.

— Has vuelto —dice, y su voz es una caricia—. Sabía que lo harías.`,
        image: "img/memoria_espejo.jpg",
        sound: "audio/memoria_espejo.mp3"
    }
};

// ------------------------------------------
// ESCENAS DE PERSONAJE
// Se muestran si una variable es DEMASIADO BAJA (< 3)
// para compensar la carencia narrativa
// ------------------------------------------
const PERSONAJE_ESCENAS = {
    "DOMINIO_BAJO": {
        condition: (vars) => vars.dominio < 3 && vars.deseo >= 3,
        text: `Ella nota tu duda. Tu inseguridad. Y sonríe con una ternura que no esperabas.

— No pasa nada —dice—. No tienes que saber qué hacer. Para eso estoy yo.

Te toma de la mano. Te guía hasta el diván. Te sienta. Se arrodilla frente a ti.

— Vamos a hacer esto a mi manera. Tú solo tienes que dejarte llevar. ¿Confías en mí?

Asientes. Y por primera vez en mucho tiempo, sientes que no tienes que tener el control. Que puedes simplemente... ser.`,
        image: "img/personaje_dominio.jpg",
        sound: "audio/personaje_dominio.mp3"
    }
};