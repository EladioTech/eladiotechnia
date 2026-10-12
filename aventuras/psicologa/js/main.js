// ==========================================
// INICIALIZACIÓN DE LA APLICACIÓN
// Versión completa con todos los listeners
// ==========================================

console.log("✅ main.js cargado");

document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ DOM listo");

    // Verificar dependencias
    if (typeof STORY === 'undefined') {
        console.error("❌ STORY no está definido. Revisa js/story.js");
        return;
    }
    if (typeof GameEngine === 'undefined') {
        console.error("❌ GameEngine no está definido. Revisa js/engine.js");
        return;
    }

    console.log("✅ STORY y GameEngine cargados correctamente");

    try {
        GameEngine.init();
        console.log("✅ GameEngine inicializado");
    } catch (e) {
        console.error("❌ Error inicializando GameEngine:", e);
        return;
    }

    // ==========================================
    // BOTÓN COMENZAR
    // ==========================================
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log("🖱️ Click en COMENZAR");
            try {
                GameEngine.startGame();
            } catch (e) {
                console.error("❌ Error al iniciar partida:", e);
            }
        });
        console.log("✅ Listener de COMENZAR añadido");
    }

    // ==========================================
    // BOTÓN CONTINUAR (si existe partida guardada)
    // ==========================================
    const continueBtn = document.getElementById('continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            console.log("🖱️ Click en CONTINUAR");
            GameEngine.continueGame();
        });
        console.log("✅ Listener de CONTINUAR añadido");
    }

    // ==========================================
    // BOTÓN NUEVA AVENTURA
    // ==========================================
    const newGameBtn = document.getElementById('new-game-btn');
    if (newGameBtn) {
        newGameBtn.addEventListener('click', () => {
            console.log("🖱️ Click en NUEVA AVENTURA");
            // Confirmación (opcional pero recomendada)
            const confirmado = confirm(
                "¿Quieres empezar una nueva aventura?\n\n" +
                "Se borrará tu progreso actual. La doctora siempre recibe con los brazos abiertos."
            );
            if (confirmado) {
                GameEngine.newAdventure();
            }
        });
        console.log("✅ Listener de NUEVA AVENTURA añadido");
    }

    // ==========================================
    // BOTÓN REINICIAR (en pantalla de final)
    // ==========================================
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            console.log("🖱️ Click en REINICIAR");
            GameEngine.restart();
        });
        console.log("✅ Listener de REINICIAR añadido");
    }

    // ==========================================
    // BOTÓN DE ESTADÍSTICAS (el ojo 👁)
    // ==========================================
    const statsToggle = document.getElementById('stats-toggle');
    if (statsToggle) {
        statsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log("🖱️ Click en estadísticas");
            GameEngine.toggleStats();
        });
        console.log("✅ Listener de STATS añadido");
    } else {
        console.warn("⚠️ No se encontró #stats-toggle");
    }

    // ==========================================
    // BOTÓN DE HISTORIAL (📜)
    // ==========================================
    const historyToggle = document.getElementById('history-toggle');
    if (historyToggle) {
        historyToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log("🖱️ Click en historial");
            GameEngine.toggleHistory();
        });
        console.log("✅ Listener de HISTORIAL añadido");
    }

    // ==========================================
    // BOTÓN CERRAR HISTORIAL (✕)
    // ==========================================
    const closeHistoryBtn = document.getElementById('close-history-btn');
    if (closeHistoryBtn) {
        closeHistoryBtn.addEventListener('click', () => {
            GameEngine.toggleHistory();
        });
    }

    // ==========================================
    // MÚSICA DE LA PANTALLA DE TÍTULO
    // ==========================================
    /* const titleMusic = new Audio('audio/inicio_aventura.mp3');
    titleMusic.loop = true;
    titleMusic.volume = 0.3;

    // Estado: la música empieza pausada hasta que el usuario interactúa
    let titleMusicPlaying = false;

    // Función para actualizar el icono del botón
    const updateMusicIcon = () => {
        const btn = document.getElementById('title-music-toggle');
        if (!btn) return;
        btn.textContent = titleMusicPlaying ? '🔊' : '🔇';
        btn.classList.toggle('muted', !titleMusicPlaying);
    };

    // Iniciar la música en el primer click o pulsación de tecla
    const startTitleMusic = () => {
        titleMusic.play().then(() => {
            titleMusicPlaying = true;
            updateMusicIcon();
        }).catch(() => {
            // Si el navegador bloquea, no pasa nada
            console.warn('⚠️ No se pudo reproducir la música automáticamente');
        });
        document.removeEventListener('click', startTitleMusic);
        document.removeEventListener('keydown', startTitleMusic);
    };

    // Escuchar el primer click/tecla para iniciar la música
    document.addEventListener('click', startTitleMusic);
    document.addEventListener('keydown', startTitleMusic);

    // Botón de toggle manual
    const musicToggleBtn = document.getElementById('title-music-toggle');
    if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // No cuenta como el "primer click" global
            if (titleMusicPlaying) {
                titleMusic.pause();
                titleMusicPlaying = false;
            } else {
                titleMusic.play().catch(() => { });
                titleMusicPlaying = true;
            }
            updateMusicIcon();
        });
        console.log('✅ Listener de MÚSICA DE TÍTULO añadido');
    }

    // Detener la música cuando la lectora pulse COMENZAR o CONTINUAR
    const stopTitleMusic = () => {
        titleMusic.pause();
        titleMusic.currentTime = 0;
    };

    document.getElementById('start-btn')?.addEventListener('click', stopTitleMusic);
    document.getElementById('continue-btn')?.addEventListener('click', stopTitleMusic);
    document.getElementById('new-game-btn')?.addEventListener('click', stopTitleMusic);
*/
    // ==========================================
    // ATAJOS DE TECLADO (versión blindada)
    // ==========================================
    let lastKeyTime = 0;   // Anti-rebote global

    document.addEventListener('keydown', (e) => {
        // ESC cierra el panel de estadísticas
        if (e.key === 'Escape') {
            const panel = document.getElementById('stats-panel');
            if (panel && !panel.classList.contains('hidden')) {
                panel.classList.add('hidden');
            }

            // NUEVO: ESC también cierra el historial
            const historyPanel = document.getElementById('history-panel');
            if (historyPanel && !historyPanel.classList.contains('hidden')) {
                GameEngine.toggleHistory();
            }
        }

        // Solo procesar SPACE y ENTER
        if (e.key !== ' ' && e.key !== 'Enter') return;

        // ANTI-REBOTE: evitar doble disparo en menos de 300ms
        const now = Date.now();
        if (now - lastKeyTime < 300) return;
        lastKeyTime = now;

        // Comprobar que estamos en fase de texto
        const textPhase = document.getElementById('text-phase');
        if (!textPhase || !textPhase.classList.contains('active')) return;

        const continueBtn = document.getElementById('continue-reading-btn');
        if (!continueBtn) return;

        e.preventDefault();
        e.stopPropagation();

        console.log("⌨️ ESPACIO/ENTER en fase de texto");
        console.log("   typeInterval activo:", !!GameEngine.typeInterval);
        console.log("   currentText tiene", GameEngine.currentText ? GameEngine.currentText.length : 0, "caracteres");

        // Si el texto aún se está escribiendo, completarlo USANDO currentText
        if (GameEngine.typeInterval) {
            console.log("   → Completando texto de golpe");
            clearInterval(GameEngine.typeInterval);
            GameEngine.typeInterval = null;

            if (GameEngine.currentText) {
                document.getElementById('scene-text').textContent = GameEngine.currentText;
                const container = document.getElementById('text-container');
                if (container) container.scrollTop = container.scrollHeight;
            }

            // NUEVO: Detener el sonido de tecleo al completar
            GameEngine.stopTypingSound();

            // NUEVO: Forzar el botón a ser visible inmediatamente
            const btn = document.getElementById('continue-reading-btn');
            if (btn) {
                btn.style.opacity = '1';
                btn.style.animation = 'none';
            }
        } else {
            console.log("   → Avanzando a opciones");
            GameEngine.showOptionsPhase();
        }
    }, true);   // ← CAPTURA: intercepta antes que el navegador

    console.log("✅ Atajos de teclado configurados");

});  // ← ESTA ES LA LLAVE QUE FALTABA: cierra el DOMContentLoaded