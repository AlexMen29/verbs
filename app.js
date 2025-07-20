// Base de datos ampliada de verbos (15 pares)
const allVerbs = [
    { base: "go", past: "went" },
    { base: "eat", past: "ate" },
    { base: "see", past: "saw" },
    { base: "take", past: "took" },
    { base: "write", past: "wrote" },
    { base: "drink", past: "drank" },
    { base: "swim", past: "swam" },
    { base: "sing", past: "sang" },
    { base: "break", past: "broke" },
    { base: "choose", past: "chose" },
    { base: "drive", past: "drove" },
    { base: "fall", past: "fell" },
    { base: "give", past: "gave" },
    { base: "know", past: "knew" },
    { base: "speak", past: "spoke" },
    { base: "accept", past: "accepted" },
    { base: "add", past: "added" },
    { base: "allow", past: "allowed" },
    { base: "answer", past: "answered" },
    { base: "ask", past: "asked" },
    { base: "bake", past: "baked" },
    { base: "behave", past: "behaved" },
    { base: "believe", past: "believed" },
    { base: "call", past: "called" },
    { base: "carry", past: "carried" },
    { base: "clean", past: "cleaned" },
    { base: "climb", past: "climbed" },
    { base: "close", past: "closed" },
    { base: "compare", past: "compared" },
    { base: "cook", past: "cooked" },
    { base: "copy", past: "copied" },
    { base: "dance", past: "danced" },
    { base: "deliver", past: "delivered" },
    { base: "describe", past: "described" },
    { base: "develop", past: "developed" },
    { base: "die", past: "died" },
    { base: "discuss", past: "discussed" },
    { base: "enjoy", past: "enjoyed" },
    { base: "explain", past: "explained" },
    { base: "fill", past: "filled" },
    { base: "finish", past: "finished" },
    { base: "fix", past: "fixed" },
    { base: "help", past: "helped" },
    { base: "hope", past: "hoped" },
    { base: "improve", past: "improved" },
    { base: "include", past: "included" },
    { base: "invent", past: "invented" },
    { base: "invite", past: "invited" },
    { base: "jump", past: "jumped" },
    { base: "laugh", past: "laughed" },
    { base: "learn", past: "learned" },
    { base: "like", past: "liked" },
    { base: "listen", past: "listened" },
    { base: "live", past: "lived" },
    { base: "look", past: "looked" },
    { base: "love", past: "loved" },
    { base: "move", past: "moved" },
    { base: "need", past: "needed" },
    { base: "notice", past: "noticed" },
    { base: "open", past: "opened" },
    { base: "order", past: "ordered" },
    { base: "paint", past: "painted" },
    { base: "play", past: "played" },
    { base: "practice", past: "practiced" },
    { base: "prefer", past: "preferred" },
    { base: "prepare", past: "prepared" },
    { base: "promise", past: "promised" },
    { base: "protect", past: "protected" },
    { base: "push", past: "pushed" },
    { base: "receive", past: "received" },
    { base: "remember", past: "remembered" },
    { base: "repeat", past: "repeated" },
    { base: "return", past: "returned" },
    { base: "save", past: "saved" },
    { base: "share", past: "shared" },
    { base: "show", past: "showed" },
    { base: "smile", past: "smiled" },
    { base: "start", past: "started" },
    { base: "stay", past: "stayed" },
    { base: "study", past: "studied" },
    { base: "talk", past: "talked" },
    { base: "thank", past: "thanked" },
    { base: "travel", past: "traveled" },
    { base: "try", past: "tried" },
    { base: "use", past: "used" },
    { base: "visit", past: "visited" },
    { base: "wait", past: "waited" },
    { base: "walk", past: "walked" },
    { base: "want", past: "wanted" },
    { base: "watch", past: "watched" },
    { base: "work", past: "worked" },
    { base: "worry", past: "worried" },
    { base: "build", past: "built" },
    { base: "buy", past: "bought" },
    { base: "catch", past: "caught" },
    { base: "come", past: "came" },
    { base: "cost", past: "cost" },
    { base: "cut", past: "cut" },
    { base: "do", past: "did" },
    { base: "find", past: "found" },
    { base: "fly", past: "flew" },
    { base: "forget", past: "forgot" },
    { base: "get", past: "got" },
    { base: "have", past: "had" },
    { base: "hear", past: "heard" },
    { base: "hold", past: "held" },
    { base: "keep", past: "kept" },
    { base: "leave", past: "left" },
    { base: "lose", past: "lost" },
    { base: "make", past: "made" },
    { base: "meet", past: "met" },
    { base: "pay", past: "paid" },
    { base: "put", past: "put" },
    { base: "read", past: "read" },
    { base: "run", past: "ran" },
    { base: "say", past: "said" },
    { base: "sell", past: "sold" },
    { base: "send", past: "sent" },
    { base: "sit", past: "sat" },
    { base: "sleep", past: "slept" },
    { base: "spend", past: "spent" },
    { base: "stand", past: "stood" },
    { base: "teach", past: "taught" },
    { base: "think", past: "thought" },
    { base: "understand", past: "understood" },
    { base: "win", past: "won" },
    { base: "write", past: "wrote" },
    { base: "arise", past: "arose" },
    { base: "begin", past: "began" },
    { base: "bite", past: "bit" },
    { base: "blow", past: "blew" },
    { base: "bring", past: "brought" },
    { base: "build", past: "built" },
    { base: "catch", past: "caught" },
    { base: "choose", past: "chose" },
    { base: "come", past: "came" },
    { base: "deal", past: "dealt" },
    { base: "dig", past: "dug" },
    { base: "draw", past: "drew" },
    { base: "dream", past: "dreamed" },
    { base: "feed", past: "fed" },
    { base: "fight", past: "fought" },
    { base: "find", past: "found" },
    { base: "freeze", past: "froze" },
    { base: "hide", past: "hid" },
    { base: "hit", past: "hit" },
    { base: "hold", past: "held" },
    { base: "hurt", past: "hurt" },
    { base: "lay", past: "laid" },
    { base: "lead", past: "led" },
    { base: "light", past: "lit" },
    { base: "ride", past: "rode" },
    { base: "rise", past: "rose" },
    { base: "set", past: "set" },
    { base: "shake", past: "shook" },
    { base: "shoot", past: "shot" },
    { base: "sing", past: "sang" },
    { base: "sink", past: "sank" },
    { base: "slide", past: "slid" },
    { base: "smell", past: "smelled" },
    { base: "steal", past: "stole" },
    { base: "swim", past: "swam" },
    { base: "throw", past: "threw" }
];


// Función para seleccionar 5 verbos aleatorios
function getRandomVerbs(count) {
    const shuffled = [...allVerbs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Función para mezclar array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Variables globales para los verbos del juego actual
let currentGameVerbs = [];

function initializeGame() {
    const baseColumn = document.getElementById("base-column");
    const pastColumn = document.getElementById("past-column");
    let selectedBaseCard = null;

    // Seleccionar 5 verbos aleatorios para este juego
    currentGameVerbs = getRandomVerbs(5);
    const verbsBase = currentGameVerbs.map(v => v.base);
    const verbsPast = currentGameVerbs.map(v => v.past);

    // Limpiar columnas
    baseColumn.innerHTML = '';
    pastColumn.innerHTML = '';

    // Mezclar los verbos en pasado (solo visualmente)
    const shuffledPast = [...verbsPast];
    shuffleArray(shuffledPast);

    // Mapeo de índices originales a posiciones mezcladas
    const pastIndexMap = shuffledPast.map(verb => verbsPast.indexOf(verb));

    // Generar cajas para verbos base (orden original)
    verbsBase.forEach((verb, index) => {
        baseColumn.innerHTML += `
            <div class="verb-card base-form mb-2" id="base-${index}">
                <p class="verb-text mb-0">${verb}</p>
            </div>
        `;
    });

    // Generar cajas para verbos en pasado (orden mezclado)
    shuffledPast.forEach((verb, displayIndex) => {
        pastColumn.innerHTML += `
            <div class="verb-card irregular-form mb-2" 
                 id="past-${displayIndex}" 
                 data-original-index="${pastIndexMap[displayIndex]}">
                <p class="verb-text mb-0">${verb}</p>
            </div>
        `;
    });

    // Seleccionar verbo base
    verbsBase.forEach((_, index) => {
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

            const baseIndex = selectedBaseCard.id.split("-")[1];
            const pastOriginalIndex = card.dataset.originalIndex;

            if (parseInt(baseIndex) === parseInt(pastOriginalIndex)) {
                selectedBaseCard.classList.add("matched");
                card.classList.add("matched");
                selectedBaseCard = null;
                
                // Verificar si todos están emparejados
                if (document.querySelectorAll('.matched').length === verbsBase.length * 2) {
                    setTimeout(() => {
                        alert('¡Felicidades! Has completado el juego.\n\nVerbos aprendidos:\n' +
                            currentGameVerbs.map(v => `${v.base} → ${v.past}`).join('\n'));
                    }, 300);
                }
            } else {
                selectedBaseCard.classList.remove("selected");
                selectedBaseCard = null;
            }
        });
    });
}

// Inicializar el juego al cargar la página
document.addEventListener("DOMContentLoaded", initializeGame);

// Función para reiniciar el juego
function resetGame() {
    initializeGame();
}