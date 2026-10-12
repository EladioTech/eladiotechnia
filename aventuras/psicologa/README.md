# Una psicóloga me invita a entrar en su oficina

**Aventura narrativa interactiva para navegador**

Una experiencia narrativa en la que cada decisión modifica el desarrollo de la historia y puede influir en diferentes variables del protagonista.

El proyecto combina narrativa, imágenes, sonido y programación para crear una aventura interactiva que puede jugarse directamente desde un navegador web.

## 🎮 Jugar

**EladioTechnia**  
Proyecto creado por **Eladio Rey**.

La aventura está diseñada para ejecutarse directamente en el navegador, sin necesidad de instalar software adicional.

## 🧩 Características

- Narrativa interactiva basada en decisiones.
- Diferentes caminos y finales.
- Sistema de variables narrativas:
  - Deseo
  - Confianza
  - Dominio
  - Misterio
- Imágenes asociadas a las escenas.
- Efectos de sonido y ambientación.
- Sistema de escritura progresiva del texto.
- Historial de la conversación.
- Panel de estadísticas.
- Guardado de la partida mediante `localStorage`.
- Escenas especiales asociadas a determinados estados narrativos.

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript
- `localStorage`
- Audio HTML5
- Imágenes JPG

No utiliza frameworks externos.

## 🧠 Arquitectura

El proyecto está construido separando la narrativa del motor de funcionamiento:

```text
index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── story.js
│   ├── engine.js
│   └── main.js
│
├── img/
│
└── audio/
story.js

Contiene la estructura narrativa: escenas, textos, opciones, efectos y variables.

engine.js

Gestiona el funcionamiento de la aventura: navegación, variables, imágenes, texto, sonido, historial, estadísticas y guardado.

main.js

Conecta la interfaz del navegador con el motor de la aventura.

style.css

Define la presentación visual, las animaciones y los diferentes ambientes de la aventura.

🌱 Un proyecto pensado para crecer

Esta aventura representa una primera experiencia completa en el desarrollo de un sistema de narrativa interactiva reutilizable.

El objetivo a largo plazo es poder crear nuevas aventuras utilizando un motor común y sustituyendo principalmente sus contenidos narrativos, visuales y sonoros.

La idea es aprender construyendo proyectos reales y convertir cada experiencia en conocimiento reutilizable para los siguientes proyectos.

Objetivo → sistema → identidad.

👤 Autor

Eladio Rey

Proyecto desarrollado dentro de EladioTechnia.

© 2026 Eladio Rey