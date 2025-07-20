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
    { base: "speak", past: "spoke" }
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