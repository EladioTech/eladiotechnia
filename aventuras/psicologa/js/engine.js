// ==========================================
// MOTOR DE LA AVENTURA - Versión 3 fases (Completa y Corregida)
// ==========================================

const GameEngine = {

    // ============ ESTADO ============
    state: {
        currentNode: "0",
        variables: { deseo: 0, confianza: 0, dominio: 0, misterio: 0 },
        history: [],
        endingsSeen: [],
        umbralShown: false
    },

    elements: {},
    pendingOptions: [],
    imageTimer: null,
    typeInterval: null,
    currentText: "",
    typingAudio: null,
    shouldPlayTypingSound: false,

    init() {
        this.elements = {
            titleScreen: document.getElementById('title-screen'),
            gameScreen: document.getElementById('game-screen'),
            endScreen: document.getElementById('end-screen'),
            sceneImage: document.getElementById('scene-image'),
            sceneText: document.getElementById('scene-text'),
            optionsContainer: document.getElementById('options-container'),
            statDeseo: document.getElementById('stat-deseo'),
            statConfianza: document.getElementById('stat-confianza'),
            statDominio: document.getElementById('stat-dominio'),
            statMisterio: document.getElementById('stat-misterio'),
            endTitle: document.getElementById('end-title'),
            endText: document.getElementById('end-text'),
            bgAudio: document.getElementById('bg-audio'),
            sfxAudio: document.getElementById('sfx-audio'),
            imagePhase: document.getElementById('image-phase'),
            textPhase: document.getElementById('text-phase'),
            optionsPhase: document.getElementById('options-phase')
        };

        this.loadGame();
        this.showScreen('title');
    },

    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        if (screenName === 'title') this.elements.titleScreen.classList.add('active');
        if (screenName === 'game') this.elements.gameScreen.classList.add('active');
        if (screenName === 'end') this.elements.endScreen.classList.add('active');
    },

    // ==========================================
    // APLICAR TEMA CROMÁTICO (AL SCREEN Y AL CONTAINER)
    // ==========================================
    setTheme(themeName) {
        const screen = this.elements.gameScreen;
        const container = document.getElementById('game-container');

        if (!screen) return;

        // Temas válidos
        const themes = [
            'theme-deseo',
            'theme-dominio',
            'theme-misterio',
            'theme-confianza',
            'theme-memoria',
            'theme-personaje'
        ];

        // Quitar todos los temas del screen
        screen.classList.remove(...themes);

        // Quitar todos los temas del container
        if (container) container.classList.remove(...themes);

        // Aplicar el nuevo tema (o ninguno)
        if (themeName) {
            screen.classList.add(`theme-${themeName}`);
            if (container) container.classList.add(`theme-${themeName}`);
            console.log(`🎨 Tema aplicado: ${themeName}`);
        } else {
            console.log("🎨 Tema normal (narrativo)");
        }
    },

    startGame() {
        // Detener cualquier animación y sonido en curso
        if (this.typeInterval) {
            clearInterval(this.typeInterval);
            this.typeInterval = null;
        }
        if (this.imageTimer) {
            clearTimeout(this.imageTimer);
            this.imageTimer = null;
        }
        this.stopTypingSound();
        this.stopBackgroundMusic();

        this.state.currentNode = "0";
        this.state.variables = { deseo: 0, confianza: 0, dominio: 0, misterio: 0 };
        this.state.history = [];
        this.state.umbralShown = false;
        this.showScreen('game');
        this.renderNode("0");
    },

    renderNode(nodeId) {
        console.log("🔍 === renderNode ===");
        console.log("🔍 Nodo solicitado:", nodeId);

        this.stopBackgroundMusic();

        const node = STORY[nodeId];
        if (!node) {
            console.error("❌ Nodo no encontrado:", nodeId);
            this.showScreen('title');
            return;
        }

        this.shouldPlayTypingSound = node.typingSound || false;

        // Si es un FINAL
        if (nodeId.startsWith("FINAL_")) {
            this.setTheme(null);

            if (!this.state.umbralShown) {
                const umbral = this.checkUmbralScene(nodeId);
                if (umbral) {
                    this.state.umbralShown = true;
                    console.log("🎬 Insertando escena de umbral antes del final");
                    this.renderUmbralScene(umbral, nodeId);
                    return;
                }
            }

            this.state.currentNode = nodeId;
            this.state.history.push(nodeId);

            if (node.effects) {
                for (const [key, value] of Object.entries(node.effects)) {
                    this.state.variables[key] = Math.max(0, Math.min(10, this.state.variables[key] + value));
                }
            }

            this.updateStats();
            this.saveGame();

            if (node.image) {
                this.elements.imagePhase.classList.add('active');
                this.elements.textPhase.classList.remove('active');
                this.elements.optionsPhase.classList.remove('active');

                const img = this.elements.sceneImage;
                img.classList.remove('loaded');
                img.src = node.image;

                img.onload = () => img.classList.add('loaded');
                img.onerror = () => console.warn("Imagen no encontrada:", node.image);

                setTimeout(() => {
                    this.showEnding(node);
                }, 3000);
            } else {
                this.showEnding(node);
            }
            return;
        }

        // FLUJO NORMAL
        this.state.currentNode = nodeId;
        this.state.history.push(nodeId);

        if (node.effects) {
            this.setTheme(null);
            for (const [key, value] of Object.entries(node.effects)) {
                this.state.variables[key] = Math.max(0, Math.min(10, this.state.variables[key] + value));
            }
        }

        this.pendingOptions = node.options || [];
        this.updateStats();

        if (node.sound) this.playSound(node.sound, true);

        this.showImagePhase(node);
        this.saveGame();
    },

    showImagePhase(node) {
        this.elements.imagePhase.classList.add('active');
        this.elements.textPhase.classList.remove('active');
        this.elements.optionsPhase.classList.remove('active');

        if (!node.image) {
            this.showTextPhase(node);
            return;
        }

        const img = this.elements.sceneImage;
        img.classList.remove('loaded');
        img.src = node.image;

        img.onload = () => img.classList.add('loaded');
        img.onerror = () => this.showTextPhase(node);

        clearTimeout(this.imageTimer);
        this.imageTimer = setTimeout(() => {
            this.showTextPhase(node);
        }, 2500);

        const imagePhaseEl = this.elements.imagePhase;
        const skipHandler = () => {
            clearTimeout(this.imageTimer);
            imagePhaseEl.removeEventListener('click', skipHandler);
            this.showTextPhase(node);
        };
        imagePhaseEl.addEventListener('click', skipHandler);
    },

    showTextPhase(node) {
        clearTimeout(this.imageTimer);

        if (this.typeInterval) {
            clearInterval(this.typeInterval);
            this.typeInterval = null;
        }

        this.elements.imagePhase.classList.remove('active');
        this.elements.textPhase.classList.add('active');
        this.elements.optionsPhase.classList.remove('active');

        this.typeText(node.text);

        const continueBtn = document.getElementById('continue-reading-btn');
        const newBtn = continueBtn.cloneNode(true);
        continueBtn.parentNode.replaceChild(newBtn, continueBtn);

        newBtn.addEventListener('click', () => {
            this.playSound('audio/click.mp3', false);
            this.showOptionsPhase();
        });
    },

    showOptionsPhase() {
        // CRÍTICO: cancelar cualquier escritura en curso
        if (this.typeInterval) {
            clearInterval(this.typeInterval);
            this.typeInterval = null;
        }

        // NUEVO: Detener el tecleo si está sonando
        this.stopTypingSound();

        this.elements.imagePhase.classList.remove('active');
        this.elements.textPhase.classList.remove('active');
        this.elements.optionsPhase.classList.add('active');

        this.renderOptions(this.pendingOptions);
    },

    typeText(text) {
        const el = this.elements.sceneText;
        this.currentText = text;

        // Detener el sonido de tecleo anterior
        this.stopTypingSound();

        // Iniciar el sonido de tecleo si el nodo lo pide
        if (this.shouldPlayTypingSound) {
            this.playTypingSound();
        }

        if (this.typeInterval) {
            clearInterval(this.typeInterval);
            this.typeInterval = null;
        }

        el.textContent = '';
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = 'fadeIn 1.2s ease';

        let i = 0;
        const speed = 60;

        this.typeInterval = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                const container = document.getElementById('text-container');
                if (container) container.scrollTop = container.scrollHeight;
            } else {
                clearInterval(this.typeInterval);
                this.typeInterval = null;

                // Detener el sonido de tecleo
                this.stopTypingSound();

                // Suena el "ding" al terminar
                if (this.shouldPlayTypingSound) {
                    const ding = new Audio('audio/ding.mp3');
                    ding.volume = 0.3;
                    ding.play().catch(() => { });
                }
            }
        }, speed);
    },

    renderOptions(options) {
        const container = this.elements.optionsContainer;
        container.innerHTML = '';

        if (!options || options.length === 0) return;

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.text;
            btn.addEventListener('click', () => {
                this.playSound('audio/click.mp3', false);

                if (option.effects) {
                    for (const [key, value] of Object.entries(option.effects)) {
                        this.state.variables[key] = Math.max(0, Math.min(10, this.state.variables[key] + value));
                    }
                    this.updateStats();
                }
                this.renderNode(option.next);
            });
            container.appendChild(btn);
        });
    },

    updateStats() {
        const vars = this.state.variables;
        document.getElementById('stat-deseo').textContent = vars.deseo;
        document.getElementById('stat-confianza').textContent = vars.confianza;
        document.getElementById('stat-dominio').textContent = vars.dominio;
        document.getElementById('stat-misterio').textContent = vars.misterio;

        document.getElementById('bar-deseo').style.width = (vars.deseo * 10) + '%';
        document.getElementById('bar-confianza').style.width = (vars.confianza * 10) + '%';
        document.getElementById('bar-dominio').style.width = (vars.dominio * 10) + '%';
        document.getElementById('bar-misterio').style.width = (vars.misterio * 10) + '%';
    },

    toggleStats() {
        document.getElementById('stats-panel').classList.toggle('hidden');
    },

    toggleHistory() {
        const panel = document.getElementById('history-panel');
        if (!panel) return;

        panel.classList.toggle('hidden');

        if (!panel.classList.contains('hidden')) {
            const content = document.getElementById('history-content');
            content.innerHTML = '';

            this.state.history.forEach((nodeId, index) => {
                let textoNodo = "";

                if (STORY[nodeId]) {
                    textoNodo = STORY[nodeId].text;
                }
                else if (typeof UMBRAL_ESCENAS !== 'undefined') {
                    const umbral = Object.values(UMBRAL_ESCENAS).find(u => u.id === nodeId);
                    if (umbral) textoNodo = umbral.text;
                }
                if (!textoNodo && typeof MEMORIA_ESCENAS !== 'undefined') {
                    const memoria = Object.values(MEMORIA_ESCENAS).find(m => m.id === nodeId);
                    if (memoria) textoNodo = memoria.text;
                }

                if (textoNodo) {
                    const block = document.createElement('div');
                    block.className = 'history-item';
                    block.innerHTML = `
                        <div class="history-number">#${index + 1}</div>
                        <div class="history-text">${textoNodo}</div>
                    `;
                    content.appendChild(block);
                }
            });

            content.scrollTop = content.scrollHeight;
        }
    },

    checkUmbralScene(nodeIdDestino) {
        const vars = this.state.variables;
        const candidatos = Object.entries(UMBRAL_ESCENAS)
            .filter(([key, escena]) =>
                escena.finalAsociado === nodeIdDestino &&
                escena.condition(vars)
            )
            .map(([key, escena]) => ({
                key,
                escena,
                valor: vars[key.toLowerCase()]
            }))
            .sort((a, b) => b.valor - a.valor);

        if (candidatos.length > 0) {
            return candidatos[0].escena;
        }
        return null;
    },

    renderUmbralScene(escena, nextNodeId) {
        console.log("🎬 renderUmbralScene iniciada:", escena.id, "→", nextNodeId);

        this.state.currentNode = escena.id;
        this.state.history.push(escena.id);

        const themeMap = {
            "UMBRAL_DESEO": "deseo",
            "UMBRAL_DOMINIO": "dominio",
            "UMBRAL_MISTERIO": "misterio",
            "UMBRAL_CONFIANZA": "confianza"
        };
        this.setTheme(themeMap[escena.id] || null);

        // CRÍTICO: Detener cualquier animación Y tecleo en curso
        if (this.typeInterval) {
            clearInterval(this.typeInterval);
            this.typeInterval = null;
        }
        if (this.imageTimer) {
            clearTimeout(this.imageTimer);
            this.imageTimer = null;
        }
        this.stopTypingSound();

        this.elements.imagePhase.classList.add('active');
        this.elements.textPhase.classList.remove('active');
        this.elements.optionsPhase.classList.remove('active');

        if (escena.image) {
            const img = this.elements.sceneImage;
            img.classList.remove('loaded');
            img.src = escena.image;
            img.onload = () => img.classList.add('loaded');
            img.onerror = () => img.classList.add('loaded');
        }

        if (escena.sound) {
            this.playSound(escena.sound, true);
        }

        this.imageTimer = setTimeout(() => {
            this.elements.imagePhase.classList.remove('active');
            this.elements.textPhase.classList.add('active');
            this.typeText(escena.text);
        }, 2000);

        const continueBtn = document.getElementById('continue-reading-btn');
        const newBtn = continueBtn.cloneNode(true);
        continueBtn.parentNode.replaceChild(newBtn, continueBtn);

        let continuado = false;
        newBtn.addEventListener('click', () => {
            if (continuado) return;
            continuado = true;
            this.pendingOptions = [{ text: "Continuar...", next: nextNodeId }];
            this.showOptionsPhase();
        });
    },

    showEnding(node) {
        // CRÍTICO: Detener cualquier sonido de fondo Y de tecleo
        this.stopBackgroundMusic();
        this.stopTypingSound();

        // CRÍTICO: Cancelar cualquier escritura en curso
        if (this.typeInterval) {
            clearInterval(this.typeInterval);
            this.typeInterval = null;
        }

        this.setTheme(null);

        this.elements.imagePhase.classList.remove('active');
        this.elements.textPhase.classList.remove('active');
        this.elements.optionsPhase.classList.remove('active');

        if (!this.state.endingsSeen.includes(node.id)) {
            this.state.endingsSeen.push(node.id);
        }
        this.saveGame();

        const vars = this.state.variables;
        const interpretacion = this.interpretVars(vars, node.id);

        document.getElementById('end-title').textContent = node.endTitle;

        const html = `
            <p class="end-frase">"${node.endText}"</p>
            <div class="end-stats">
                <div class="end-stats-title">Tu viaje en números</div>
                <div class="end-stats-grid">
                    <div><strong>Deseo:</strong> ${vars.deseo}/10</div>
                    <div><strong>Confianza:</strong> ${vars.confianza}/10</div>
                    <div><strong>Dominio:</strong> ${vars.dominio}/10</div>
                    <div><strong>Misterio:</strong> ${vars.misterio}/10</div>
                </div>
                <div class="end-stats-quote">"${interpretacion}"</div>
            </div>
            
            <div class="end-demo-message">
                <div class="end-demo-title">✦ FIN DE LA DEMO ✦</div>
                <p class="end-demo-text">
                    Has llegado al final del <strong>Acto I</strong>.<br>
                    Gracias por jugar esta aventura narrativa.
                </p>
                <p class="end-demo-coming-soon">
                    <em>El <strong>Acto II</strong> está en camino...</em>
                </p>
                <p class="end-demo-thanks">
                    🖤 Gracias por acompañar a la doctora Valeria 🖤
                </p>
            </div>
        `;
        document.getElementById('end-text').innerHTML = html;

        this.showScreen('end');
    },

    interpretVars(vars, finalId) {
        if (finalId) {
            if (finalId === "FINAL_A_BESO" && vars.deseo >= 7) return "Has sido alguien que se entrega. Que no tiene miedo al placer. Que sabe pedir lo que quiere.";
            if (finalId === "FINAL_B_CONTROL" && vars.dominio >= 7) return "Has sido alguien que toma el control. Que decide. Que no espera permiso para desear.";
            if (finalId === "FINAL_C_ESPEJO" && vars.misterio >= 7) return "Has sido alguien curioso. Alguien que busca. Alguien que no se conforma con la superficie.";
        }

        const max = Math.max(vars.deseo, vars.confianza, vars.dominio, vars.misterio);
        if (max === vars.deseo) return "Has sido alguien que se entrega y vive con pasión.";
        if (max === vars.confianza) return "Has sido alguien que confía y busca conexiones sinceras.";
        if (max === vars.dominio) return "Has sido alguien que toma el control de las situaciones.";
        if (max === vars.misterio) return "Has sido alguien curioso que lee entre líneas.";
        return "Has vivido una experiencia única.";
    },

    playSound(src, loop) {
        if (loop) {
            this.elements.bgAudio.src = src;
            this.elements.bgAudio.loop = true;
            this.elements.bgAudio.volume = 0.25;
            this.elements.bgAudio.play().catch(() => { });
        } else {
            this.elements.sfxAudio.src = src;
            this.elements.sfxAudio.volume = 0.8;
            this.elements.sfxAudio.currentTime = 0;
            this.elements.sfxAudio.play().catch(() => { });
        }
    },

    stopBackgroundMusic() {
        const bg = this.elements.bgAudio;
        if (bg) {
            bg.pause();
            bg.currentTime = 0;
            bg.removeAttribute('src');
            bg.load();
            console.log("🔇 Música de fondo detenida y limpiada");
        }
    },

    playTypingSound() {
        if (!this.shouldPlayTypingSound) return;
        if (this.typingAudio) {
            this.typingAudio.pause();
            this.typingAudio = null;
        }
        const audio = new Audio('audio/tecleo.mp3');
        audio.loop = true;
        audio.volume = 0.2;
        audio.play().catch(() => { });
        this.typingAudio = audio;
    },

    stopTypingSound() {
        if (this.typingAudio) {
            try {
                this.typingAudio.pause();
                this.typingAudio.currentTime = 0;
            } catch (e) {
                console.warn("Error al detener tecleo:", e);
            }
            this.typingAudio = null;
        }
    },

    saveGame() {
        const saveData = {
            currentNode: this.state.currentNode,
            variables: this.state.variables,
            history: this.state.history,
            endingsSeen: this.state.endingsSeen
        };
        localStorage.setItem('psicologa_save', JSON.stringify(saveData));
    },

    continueGame() {
        const saved = localStorage.getItem('psicologa_save');
        if (saved) {
            const data = JSON.parse(saved);
            this.state.currentNode = data.currentNode;
            this.state.variables = data.variables;
            this.state.history = data.history;
            this.state.endingsSeen = data.endingsSeen || [];
            this.showScreen('game');
            this.renderNode(data.currentNode);
        }
    },

    loadGame() {
        const saved = localStorage.getItem('psicologa_save');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.state.endingsSeen = data.endingsSeen || [];

                const continueBtn = document.getElementById('continue-btn');
                if (continueBtn) continueBtn.classList.remove('hidden');

                if (this.state.endingsSeen.length > 0) {
                    const newGameBtn = document.getElementById('new-game-btn');
                    if (newGameBtn) newGameBtn.classList.remove('hidden');
                }
            } catch (e) {
                console.error("Error cargando partida:", e);
            }
        }
    },

    restart() {
        console.log("🔄 Volviendo a empezar");
        localStorage.removeItem('psicologa_save');
        this.startGame();
    },

    newAdventure() {
        console.log("🔄 Iniciando nueva aventura (borrando guardado)");
        localStorage.removeItem('psicologa_save');
        this.state.endingsSeen = [];
        this.startGame();
    }

};