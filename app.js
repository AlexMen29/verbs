// Base de datos ampliada de verbos con traducciones
const allVerbs = [
    { base: "go", past: "went", traduccion: "ir" },
    { base: "eat", past: "ate", traduccion: "comer" },
    { base: "see", past: "saw", traduccion: "ver" },
    { base: "take", past: "took", traduccion: "tomar / llevar" },
    { base: "write", past: "wrote", traduccion: "escribir" },
    { base: "drink", past: "drank", traduccion: "beber" },
    { base: "swim", past: "swam", traduccion: "nadar" },
    { base: "sing", past: "sang", traduccion: "cantar" },
    { base: "break", past: "broke", traduccion: "romper" },
    { base: "choose", past: "chose", traduccion: "elegir" },
    { base: "drive", past: "drove", traduccion: "conducir" },
    { base: "fall", past: "fell", traduccion: "caer" },
    { base: "give", past: "gave", traduccion: "dar" },
    { base: "know", past: "knew", traduccion: "saber / conocer" },
    { base: "speak", past: "spoke", traduccion: "hablar" },
    { base: "accept", past: "accepted", traduccion: "aceptar" },
    { base: "add", past: "added", traduccion: "añadir / agregar" },
    { base: "allow", past: "allowed", traduccion: "permitir" },
    { base: "answer", past: "answered", traduccion: "responder" },
    { base: "ask", past: "asked", traduccion: "preguntar" },
    { base: "bake", past: "baked", traduccion: "hornear" },
    { base: "behave", past: "behaved", traduccion: "comportarse" },
    { base: "believe", past: "believed", traduccion: "creer" },
    { base: "call", past: "called", traduccion: "llamar" },
    { base: "carry", past: "carried", traduccion: "cargar / llevar" },
    { base: "clean", past: "cleaned", traduccion: "limpiar" },
    { base: "climb", past: "climbed", traduccion: "escalar / trepar" },
    { base: "close", past: "closed", traduccion: "cerrar" },
    { base: "compare", past: "compared", traduccion: "comparar" },
    { base: "cook", past: "cooked", traduccion: "cocinar" },
    { base: "copy", past: "copied", traduccion: "copiar" },
    { base: "dance", past: "danced", traduccion: "bailar" },
    { base: "deliver", past: "delivered", traduccion: "entregar" },
    { base: "describe", past: "described", traduccion: "describir" },
    { base: "develop", past: "developed", traduccion: "desarrollar" },
    { base: "die", past: "died", traduccion: "morir" },
    { base: "discuss", past: "discussed", traduccion: "discutir" },
    { base: "enjoy", past: "enjoyed", traduccion: "disfrutar" },
    { base: "explain", past: "explained", traduccion: "explicar" },
    { base: "fill", past: "filled", traduccion: "llenar" },
    { base: "finish", past: "finished", traduccion: "terminar" },
    { base: "fix", past: "fixed", traduccion: "arreglar" },
    { base: "help", past: "helped", traduccion: "ayudar" },
    { base: "hope", past: "hoped", traduccion: "esperar / tener esperanza" },
    { base: "improve", past: "improved", traduccion: "mejorar" },
    { base: "include", past: "included", traduccion: "incluir" },
    { base: "invent", past: "invented", traduccion: "inventar" },
    { base: "invite", past: "invited", traduccion: "invitar" },
    { base: "jump", past: "jumped", traduccion: "saltar" },
    { base: "laugh", past: "laughed", traduccion: "reír" },
    { base: "learn", past: "learned", traduccion: "aprender" },
    { base: "like", past: "liked", traduccion: "gustar" },
    { base: "listen", past: "listened", traduccion: "escuchar" },
    { base: "live", past: "lived", traduccion: "vivir" },
    { base: "look", past: "looked", traduccion: "mirar" },
    { base: "love", past: "loved", traduccion: "amar" },
    { base: "move", past: "moved", traduccion: "mover" },
    { base: "need", past: "needed", traduccion: "necesitar" },
    { base: "notice", past: "noticed", traduccion: "notar" },
    { base: "open", past: "opened", traduccion: "abrir" },
    { base: "order", past: "ordered", traduccion: "ordenar / pedir" },
    { base: "paint", past: "painted", traduccion: "pintar" },
    { base: "play", past: "played", traduccion: "jugar / tocar (instrumento)" },
    { base: "practice", past: "practiced", traduccion: "practicar" },
    { base: "prefer", past: "preferred", traduccion: "preferir" },
    { base: "prepare", past: "prepared", traduccion: "preparar" },
    { base: "promise", past: "promised", traduccion: "prometer" },
    { base: "protect", past: "protected", traduccion: "proteger" },
    { base: "push", past: "pushed", traduccion: "empujar" },
    { base: "receive", past: "received", traduccion: "recibir" },
    { base: "remember", past: "remembered", traduccion: "recordar" },
    { base: "repeat", past: "repeated", traduccion: "repetir" },
    { base: "return", past: "returned", traduccion: "regresar / devolver" },
    { base: "save", past: "saved", traduccion: "guardar / salvar" },
    { base: "share", past: "shared", traduccion: "compartir" },
    { base: "show", past: "showed", traduccion: "mostrar" },
    { base: "smile", past: "smiled", traduccion: "sonreír" },
    { base: "start", past: "started", traduccion: "empezar" },
    { base: "stay", past: "stayed", traduccion: "quedarse" },
    { base: "study", past: "studied", traduccion: "estudiar" },
    { base: "talk", past: "talked", traduccion: "hablar" },
    { base: "thank", past: "thanked", traduccion: "agradecer" },
    { base: "travel", past: "traveled", traduccion: "viajar" },
    { base: "try", past: "tried", traduccion: "intentar" },
    { base: "use", past: "used", traduccion: "usar" },
    { base: "visit", past: "visited", traduccion: "visitar" },
    { base: "wait", past: "waited", traduccion: "esperar" },
    { base: "walk", past: "walked", traduccion: "caminar" },
    { base: "want", past: "wanted", traduccion: "querer" },
    { base: "watch", past: "watched", traduccion: "ver / observar" },
    { base: "work", past: "worked", traduccion: "trabajar" },
    { base: "worry", past: "worried", traduccion: "preocuparse" },
    { base: "build", past: "built", traduccion: "construir" },
    { base: "buy", past: "bought", traduccion: "comprar" },
    { base: "catch", past: "caught", traduccion: "atrapar" },
    { base: "come", past: "came", traduccion: "venir" },
    { base: "cost", past: "cost", traduccion: "costar" },
    { base: "cut", past: "cut", traduccion: "cortar" },
    { base: "do", past: "did", traduccion: "hacer" },
    { base: "find", past: "found", traduccion: "encontrar" },
    { base: "fly", past: "flew", traduccion: "volar" },
    { base: "forget", past: "forgot", traduccion: "olvidar" },
    { base: "get", past: "got", traduccion: "obtener / conseguir" },
    { base: "have", past: "had", traduccion: "tener" },
    { base: "hear", past: "heard", traduccion: "oír" },
    { base: "hold", past: "held", traduccion: "sostener / mantener" },
    { base: "keep", past: "kept", traduccion: "guardar / mantener" },
    { base: "leave", past: "left", traduccion: "dejar / salir" },
    { base: "lose", past: "lost", traduccion: "perder" },
    { base: "make", past: "made", traduccion: "hacer / fabricar" },
    { base: "meet", past: "met", traduccion: "encontrarse / conocer" },
    { base: "pay", past: "paid", traduccion: "pagar" },
    { base: "put", past: "put", traduccion: "poner" },
    { base: "read", past: "read", traduccion: "leer" },
    { base: "run", past: "ran", traduccion: "correr" },
    { base: "say", past: "said", traduccion: "decir" },
    { base: "sell", past: "sold", traduccion: "vender" },
    { base: "send", past: "sent", traduccion: "enviar" },
    { base: "sit", past: "sat", traduccion: "sentarse" },
    { base: "sleep", past: "slept", traduccion: "dormir" },
    { base: "spend", past: "spent", traduccion: "gastar / pasar (tiempo)" },
    { base: "stand", past: "stood", traduccion: "estar de pie" },
    { base: "teach", past: "taught", traduccion: "enseñar" },
    { base: "think", past: "thought", traduccion: "pensar" },
    { base: "understand", past: "understood", traduccion: "entender" },
    { base: "win", past: "won", traduccion: "ganar" },
    { base: "write", past: "wrote", traduccion: "escribir" },
    { base: "arise", past: "arose", traduccion: "surgir / levantarse" },
    { base: "begin", past: "began", traduccion: "empezar" },
    { base: "bite", past: "bit", traduccion: "morder" },
    { base: "blow", past: "blew", traduccion: "soplar" },
    { base: "bring", past: "brought", traduccion: "traer" },
    { base: "deal", past: "dealt", traduccion: "tratar / negociar" },
    { base: "dig", past: "dug", traduccion: "cavar" },
    { base: "draw", past: "drew", traduccion: "dibujar" },
    { base: "dream", past: "dreamed", traduccion: "soñar" },
    { base: "feed", past: "fed", traduccion: "alimentar" },
    { base: "fight", past: "fought", traduccion: "pelear / luchar" },
    { base: "freeze", past: "froze", traduccion: "congelar" },
    { base: "hide", past: "hid", traduccion: "esconder" },
    { base: "hit", past: "hit", traduccion: "golpear" },
    { base: "hurt", past: "hurt", traduccion: "herir / doler" },
    { base: "lay", past: "laid", traduccion: "poner / colocar" },
    { base: "lead", past: "led", traduccion: "liderar / conducir" },
    { base: "light", past: "lit", traduccion: "encender / iluminar" },
    { base: "ride", past: "rode", traduccion: "montar / cabalgar" },
    { base: "rise", past: "rose", traduccion: "subir / levantarse" },
    { base: "set", past: "set", traduccion: "poner / colocar" },
    { base: "shake", past: "shook", traduccion: "sacudir" },
    { base: "shoot", past: "shot", traduccion: "disparar" },
    { base: "sink", past: "sank", traduccion: "hundirse" },
    { base: "slide", past: "slid", traduccion: "deslizarse" },
    { base: "smell", past: "smelled", traduccion: "oler" },
    { base: "steal", past: "stole", traduccion: "robar" },
    { base: "throw", past: "threw", traduccion: "lanzar / tirar" },
];

// Variables globales
let currentGameVerbs = [];
let showTranslations = false;
let selectedBaseCard = null;

// Función para seleccionar verbos aleatorios
function getRandomVerbs(count) {
    const shuffled = [...allVerbs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function toggleTranslations() {
    showTranslations = !showTranslations;
    const button = document.getElementById('toggle-translate-btn');
    button.textContent = showTranslations ? 'Ocultar Traducciones' : 'Mostrar Traducciones';
    
    currentGameVerbs.forEach((_, index) => {
        const translationElement = document.getElementById(`translation-${index}`);
        if (translationElement) {
            translationElement.style.display = showTranslations ? 'block' : 'none';
        }
    });
}

function initializeGame() {
    const baseColumn = document.getElementById("base-column");
    const pastColumn = document.getElementById("past-column");
    selectedBaseCard = null;
    showTranslations = false;

    // Seleccionar 5 verbos aleatorios
    currentGameVerbs = getRandomVerbs(5);
    const verbsPast = currentGameVerbs.map(v => v.past);

    // Limpiar columnas
    baseColumn.innerHTML = '';
    pastColumn.innerHTML = '';

    // Mezclar verbos en pasado
    const shuffledPast = [...verbsPast];
    shuffleArray(shuffledPast);

    // Generar cajas para verbos base
    currentGameVerbs.forEach((verb, index) => {
        baseColumn.innerHTML += `
            <div class="verb-card base-form mb-2" id="base-${index}" data-verb-index="${index}">
                <p class="verb-text mb-0">${verb.base}</p>
                <p class="translation-text" id="translation-${index}" style="display: none; font-size: 0.8em; color: #666; margin-top: 5px;">
                    ${verb.traduccion}
                </p>
            </div>
        `;
    });

    // Generar cajas para verbos en pasado (mezclados)
    shuffledPast.forEach((verb, displayIndex) => {
        const originalIndex = verbsPast.indexOf(verb);
        pastColumn.innerHTML += `
            <div class="verb-card irregular-form mb-2" 
                 id="past-${displayIndex}" 
                 data-original-index="${originalIndex}">
                <p class="verb-text mb-0">${verb}</p>
            </div>
        `;
    });

    // Configurar eventos
    setupEventListeners();
}

function setupEventListeners() {
    // Seleccionar verbo base
    currentGameVerbs.forEach((_, index) => {
        const card = document.getElementById(`base-${index}`);
        card.addEventListener("click", () => {
            if (selectedBaseCard) {
                selectedBaseCard.classList.remove("selected");
            }
            selectedBaseCard = card;
            card.classList.add("selected");
        });
    });

    // Emparejar con verbo irregular
    document.querySelectorAll('[id^="past-"]').forEach(card => {
        card.addEventListener("click", () => {
            if (!selectedBaseCard) return;

            const baseIndex = selectedBaseCard.dataset.verbIndex;
            const pastOriginalIndex = card.dataset.originalIndex;

            if (baseIndex === pastOriginalIndex) {
                selectedBaseCard.classList.add("matched");
                card.classList.add("matched");
                selectedBaseCard = null;
                
                // Verificar si todos están emparejados
                if (document.querySelectorAll('.matched').length === currentGameVerbs.length * 2) {
                    setTimeout(() => {
                        alert('¡Felicidades! Has completado el juego.\n\nVerbos aprendidos:\n' +
                            currentGameVerbs.map(v => `${v.base} → ${v.past} (${v.traduccion})`).join('\n'));
                    }, 300);
                }
            } else {
                selectedBaseCard.classList.remove("selected");
                selectedBaseCard = null;
            }
        });
    });
}

// Inicializar el juego
document.addEventListener("DOMContentLoaded", () => {
    initializeGame();
    document.getElementById('toggle-translate-btn').addEventListener('click', toggleTranslations);
    document.getElementById('reset-btn').addEventListener('click', initializeGame);
});