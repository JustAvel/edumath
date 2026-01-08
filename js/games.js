/* ================================
   EduMath - Sistema de Juegos Interactivos
   Universidad Técnica de Machala
   14 Juegos (2 por tema)
   ================================ */

// ================================
// Configuración de juegos por tema
// ================================
const gamesConfig = {
    1: {
        title: "Sucesiones multiplicativas y con división",
        games: [
            {
                id: "secuencia-pop",
                name: "Secuencia Pop",
                description: "Pop the bubble que completa la secuencia — rápido y colorido",
                icon: "fa-bolt",
                type: "sequence-pop"
            },
            {
                id: "memoria-sucesiones",
                name: "Memoria de Sucesiones",
                description: "Juego de memoria sencillo con sucesiones (parejas)",
                icon: "fa-brain",
                type: "memory"
            }
        ]
    },
    2: {
        title: "Significado de la fracción",
        games: [
            {
                id: "pizza-fractions",
                name: "Pizza Fracciones",
                description: "Corta la pizza en las fracciones correctas",
                icon: "fa-pizza-slice",
                type: "pizza"
            },
            {
                id: "fracciones-pop",
                name: "Fracciones Pop",
                description: "Haz pop a las burbujas con la fracción correcta: brillante y seguro para niños",
                icon: "fa-bell",
                type: "pop"
            }
        ]
    },
    3: {
        title: "Fracciones equivalentes",
        games: [
            {
                id: "match-equivalentes",
                name: "Match Equivalentes",
                description: "Conecta las fracciones que son equivalentes",
                icon: "fa-link",
                type: "matching"
            },
            {
                id: "escalera-fracciones",
                name: "Escalera de Fracciones",
                description: "Sube la escalera simplificando fracciones correctamente",
                icon: "fa-stairs",
                type: "ladder"
            }
        ]
    },
    4: {
        title: "Orden de fracciones",
        games: [
            {
                id: "ordenar-carrera",
                name: "Orden Visual",
                description: "Selecciona las fracciones de menor a mayor con tarjetas coloridas",
                icon: "fa-sort-numeric-up",
                type: "sorting"
            },
            {
                id: "mayor-menor-battle",
                name: "Batalla Mayor/Menor",
                description: "¿Cuál fracción es mayor? ¡Decide rápido!",
                icon: "fa-balance-scale",
                type: "comparison"
            }
        ]
    },
    5: {
        title: "Múltiplos y divisores",
        games: [
            {
                id: "atrapa-multiplos",
                name: "Múltiplos Match",
                description: "Selecciona todos los múltiplos correctos del número indicado",
                icon: "fa-check-double",
                type: "match"
            },
            {
                id: "divisor-puzzle",
                name: "Puzzle Divisores",
                description: "Arma el puzzle encontrando todos los divisores",
                icon: "fa-puzzle-piece",
                type: "puzzle"
            }
        ]
    },
    6: {
        title: "Criterios de divisibilidad",
        games: [
            {
                id: "clasificador-express",
                name: "Clasificador Express",
                description: "Clasifica los números según su divisibilidad",
                icon: "fa-filter",
                type: "classifier"
            },
            {
                id: "ruleta-divisibilidad",
                name: "Ruleta Divisible",
                description: "Gira la ruleta y responde sobre divisibilidad",
                icon: "fa-circle-notch",
                type: "wheel"
            }
        ]
    },
    7: {
        title: "Unidades de área",
        games: [
            {
                id: "constructor-areas",
                name: "Área Visual",
                description: "Observa la figura y calcula su área fácilmente",
                icon: "fa-vector-square",
                type: "builder"
            },
            {
                id: "conversor-challenge",
                name: "Quiz de Áreas",
                description: "Responde preguntas sobre áreas y conversiones",
                icon: "fa-question-circle",
                type: "converter"
            }
        ]
    }
};

// ================================
// Variables globales de juegos
// ================================
let currentGame = null;
let gameScore = 0;
let gameTimer = null;
let gameTimeLeft = 0;
let gameLevel = 1;

// ================================
// Sistema de Tutoriales de Juegos
// ================================
const gameTutorials = {
    'secuencia-pop': {
        title: '🎯 Secuencia Pop',
        steps: [
            {
                icon: '👀',
                title: 'Observa la secuencia',
                description: 'Mira los números que aparecen en orden. Identifica el patrón (multiplicación o división).'
            },
            {
                icon: '🔢',
                title: 'Encuentra el patrón',
                description: 'Pregúntate: ¿Se multiplica o divide? ¿Por qué número? Ejemplo: 2, 6, 18... (×3)'
            },
            {
                icon: '💥',
                title: '¡Haz Pop!',
                description: 'Haz clic en la burbuja que contiene el número correcto para completar la secuencia.'
            },
            {
                icon: '⏱️',
                title: 'Gana puntos',
                description: '¡Responde correctamente para ganar puntos! Tienes tiempo limitado.'
            }
        ]
    },
    'memoria-sucesiones': {
        title: '🧠 Memoria de Sucesiones',
        steps: [
            {
                icon: '🃏',
                title: 'Voltea las cartas',
                description: 'Haz clic en una carta para voltearla y ver qué hay debajo.'
            },
            {
                icon: '🔍',
                title: 'Encuentra parejas',
                description: 'Busca dos cartas con sucesiones equivalentes o relacionadas.'
            },
            {
                icon: '🧩',
                title: 'Memoriza posiciones',
                description: 'Recuerda dónde están las cartas para hacer parejas más rápido.'
            },
            {
                icon: '🏆',
                title: '¡Completa el tablero!',
                description: 'Encuentra todas las parejas para ganar. ¡Menos intentos = mejor puntuación!'
            }
        ]
    },
    'pizza-fractions': {
        title: '🍕 Pizza Fracciones',
        steps: [
            {
                icon: '📖',
                title: 'Lee la fracción',
                description: 'Observa la fracción que te piden. El denominador indica en cuántas partes se divide la pizza.'
            },
            {
                icon: '🍕',
                title: 'Selecciona las rebanadas',
                description: 'Haz clic en las rebanadas para seleccionarlas. El numerador indica cuántas debes elegir.'
            },
            {
                icon: '✅',
                title: 'Confirma tu respuesta',
                description: 'Cuando hayas seleccionado las rebanadas correctas, presiona "Verificar".'
            },
            {
                icon: '💡',
                title: 'Ejemplo',
                description: 'Para 3/8: la pizza tiene 8 rebanadas, debes seleccionar 3 de ellas.'
            }
        ]
    },
    'fracciones-pop': {
        title: '🎈 Fracciones Pop',
        steps: [
            {
                icon: '🎯',
                title: 'Mira la fracción objetivo',
                description: 'En la parte superior verás la fracción que debes buscar.'
            },
            {
                icon: '🔢',
                title: 'Busca equivalentes',
                description: 'Las burbujas contienen fracciones. Busca las que sean EQUIVALENTES a la objetivo.'
            },
            {
                icon: '💥',
                title: '¡Pop!',
                description: 'Haz clic en las burbujas correctas para hacerlas explotar y ganar puntos.'
            },
            {
                icon: '⚠️',
                title: 'Cuidado',
                description: 'Si explotas una fracción incorrecta, ¡perderás una vida!'
            }
        ]
    },
    'match-equivalentes': {
        title: '🔗 Match Equivalentes',
        steps: [
            {
                icon: '👆',
                title: 'Selecciona una fracción',
                description: 'Haz clic en una fracción de la columna izquierda.'
            },
            {
                icon: '🔍',
                title: 'Busca su equivalente',
                description: 'Encuentra la fracción equivalente en la columna derecha.'
            },
            {
                icon: '✨',
                title: 'Conecta las parejas',
                description: 'Si son equivalentes, ¡se conectarán! Ejemplo: 1/2 = 2/4 = 3/6'
            },
            {
                icon: '💡',
                title: 'Truco',
                description: 'Multiplica o divide numerador y denominador por el mismo número para encontrar equivalentes.'
            }
        ]
    },
    'escalera-fracciones': {
        title: '🪜 Escalera de Fracciones',
        steps: [
            {
                icon: '🎯',
                title: 'Observa la fracción',
                description: 'Mira la fracción que debes simplificar para subir un escalón.'
            },
            {
                icon: '📐',
                title: 'Simplifica',
                description: 'Divide numerador y denominador entre el mismo número hasta que no se pueda más.'
            },
            {
                icon: '👆',
                title: 'Elige la correcta',
                description: 'Selecciona la fracción simplificada correcta entre las opciones.'
            },
            {
                icon: '🏔️',
                title: '¡Sube la escalera!',
                description: 'Cada respuesta correcta te acerca a la cima. ¡Llega arriba para ganar!'
            }
        ]
    },
    'ordenar-carrera': {
        title: '📊 Orden Visual',
        steps: [
            {
                icon: '👀',
                title: 'Observa las fracciones',
                description: 'Verás varias fracciones en tarjetas coloridas.'
            },
            {
                icon: '📏',
                title: 'Compara valores',
                description: 'Determina cuál fracción es menor y cuál es mayor. Tip: usa el mismo denominador.'
            },
            {
                icon: '👆',
                title: 'Selecciona en orden',
                description: 'Haz clic en las fracciones de MENOR a MAYOR, una por una.'
            },
            {
                icon: '✅',
                title: 'Completa el orden',
                description: 'Cuando termines, verifica si el orden es correcto. ¡Ganarás puntos por cada acierto!'
            }
        ]
    },
    'mayor-menor-battle': {
        title: '⚔️ Batalla Mayor/Menor',
        steps: [
            {
                icon: '🆚',
                title: 'Dos fracciones compiten',
                description: 'Verás dos fracciones enfrentadas. ¡Decide cuál es mayor!'
            },
            {
                icon: '🧮',
                title: 'Compara',
                description: 'Convierte a común denominador o cruza: a/b vs c/d → compara a×d con b×c'
            },
            {
                icon: '👆',
                title: 'Elige la mayor',
                description: 'Haz clic en la fracción que tenga mayor valor.'
            },
            {
                icon: '⚡',
                title: '¡Rápido!',
                description: 'Responde rápido para ganar más puntos. ¡Practica tu agilidad mental!'
            }
        ]
    },
    'atrapa-multiplos': {
        title: '✓ Múltiplos Match',
        steps: [
            {
                icon: '🔢',
                title: 'Mira el número base',
                description: 'En la parte superior verás de qué número debes seleccionar múltiplos.'
            },
            {
                icon: '🎯',
                title: 'Selecciona las tarjetas',
                description: 'Haz clic en todas las tarjetas que contengan múltiplos del número indicado.'
            },
            {
                icon: '✓',
                title: 'Marca correctamente',
                description: 'Las tarjetas seleccionadas se destacarán. Puedes deseleccionar haciendo clic de nuevo.'
            },
            {
                icon: '💡',
                title: 'Verifica tu respuesta',
                description: 'Un múltiplo de N es cualquier número que resulta de N × algo. Ej: Múltiplos de 3: 3, 6, 9, 12...'
            }
        ]
    },
    'divisor-puzzle': {
        title: '🧩 Puzzle Divisores',
        steps: [
            {
                icon: '🔢',
                title: 'Observa el número',
                description: 'Verás un número grande del cual debes encontrar los divisores.'
            },
            {
                icon: '🔍',
                title: '¿Qué es un divisor?',
                description: 'Un divisor divide exactamente al número sin dejar residuo. Ej: Divisores de 12: 1, 2, 3, 4, 6, 12'
            },
            {
                icon: '👆',
                title: 'Selecciona divisores',
                description: 'Haz clic en todos los números que sean divisores del número dado.'
            },
            {
                icon: '🧩',
                title: 'Completa el puzzle',
                description: '¡Encuentra todos los divisores correctos para armar el puzzle completo!'
            }
        ]
    },
    'clasificador-express': {
        title: '🏷️ Clasificador Express',
        steps: [
            {
                icon: '🔢',
                title: 'Aparece un número',
                description: 'Un número caerá y deberás clasificarlo rápidamente.'
            },
            {
                icon: '📋',
                title: 'Criterios de divisibilidad',
                description: 'Recuerda: div. por 2 (termina en par), por 3 (suma de dígitos), por 5 (termina en 0 o 5)...'
            },
            {
                icon: '🗂️',
                title: 'Arrastra al contenedor',
                description: 'Haz clic en el contenedor correcto según el criterio de divisibilidad.'
            },
            {
                icon: '⚡',
                title: '¡Express!',
                description: 'Clasifica rápido antes de que se acabe el tiempo. ¡Cada acierto suma puntos!'
            }
        ]
    },
    'ruleta-divisibilidad': {
        title: '🎡 Ruleta Divisible',
        steps: [
            {
                icon: '🎰',
                title: 'Gira la ruleta',
                description: 'Haz clic en "Girar" para que la ruleta seleccione un número al azar.'
            },
            {
                icon: '❓',
                title: 'Responde la pregunta',
                description: 'Te preguntarán sobre la divisibilidad del número que salió.'
            },
            {
                icon: '✅❌',
                title: 'Verdadero o Falso',
                description: 'Decide si la afirmación sobre divisibilidad es verdadera o falsa.'
            },
            {
                icon: '🎯',
                title: 'Acumula puntos',
                description: 'Cada respuesta correcta te da puntos. ¡Responde todas para ganar!'
            }
        ]
    },
    'constructor-areas': {
        title: '📐 Área Visual',
        steps: [
            {
                icon: '🟦',
                title: 'Observa la figura',
                description: 'Verás una figura formada por cuadrados unitarios en una cuadrícula.'
            },
            {
                icon: '🧮',
                title: 'Cuenta o calcula',
                description: 'Cuenta los cuadrados o usa la fórmula: Área = base × altura'
            },
            {
                icon: '👆',
                title: 'Selecciona la respuesta',
                description: 'Elige entre las opciones el área correcta de la figura.'
            },
            {
                icon: '📏',
                title: 'Unidades',
                description: 'Recuerda que el área se mide en unidades cuadradas (u², cm², m²).'
            }
        ]
    },
    'conversor-challenge': {
        title: '🔄 Quiz de Áreas',
        steps: [
            {
                icon: '❓',
                title: 'Lee la pregunta',
                description: 'Aparecerá una pregunta sobre áreas o conversiones de unidades.'
            },
            {
                icon: '📐',
                title: 'Conversiones útiles',
                description: '1 m² = 10,000 cm², 1 km² = 1,000,000 m², 1 ha = 10,000 m²'
            },
            {
                icon: '🧮',
                title: 'Calcula',
                description: 'Realiza las operaciones necesarias para encontrar la respuesta.'
            },
            {
                icon: '✅',
                title: 'Elige la correcta',
                description: 'Selecciona la opción correcta. ¡Lee bien todas las opciones!'
            }
        ]
    }
};

// Verificar si es primera vez que se juega
function isFirstTimeGame(gameId) {
    const played = localStorage.getItem(`edumath_played_${gameId}`);
    return !played;
}

// Marcar juego como jugado
function markGameAsPlayed(gameId) {
    localStorage.setItem(`edumath_played_${gameId}`, 'true');
}

// Mostrar tutorial del juego con Shepherd (interactivo en el juego real)
function showGameTutorial(gameId, callback) {
    // Verificar que Shepherd esté disponible
    if (typeof Shepherd === 'undefined') {
        console.warn('Shepherd.js no disponible, iniciando juego directamente');
        if (callback) callback();
        return;
    }

    // Marcar como jugado de inmediato para evitar bucles
    markGameAsPlayed(gameId);
    
    // Iniciar el juego PRIMERO
    if (callback) callback();

    // Esperar a que el DOM del juego se renderice antes de mostrar tutorial
    setTimeout(() => {
        try {
            // Pausar el timer mientras se muestra el tutorial
            let timerWasPausedForTutorial = false;
            let savedTimeLeft = 0;
            
            if (gameTimer) {
                clearInterval(gameTimer);
                gameTimer = null;
                savedTimeLeft = gameTimeLeft;
                timerWasPausedForTutorial = true;
            }
            
            const tutorialTour = new Shepherd.Tour({
                useModalOverlay: true,
                defaultStepOptions: {
                    cancelIcon: { enabled: true },
                    classes: 'shepherd-theme-edumath',
                    scrollTo: { behavior: 'smooth', block: 'center' }
                }
            });

            // Configurar pasos según el juego
            const steps = getTutorialStepsForGame(gameId);
            if (!steps || steps.length === 0) {
                console.warn(`No hay pasos de tutorial para gameId: ${gameId}`);
                // Reanudar timer si no hay tutorial
                if (timerWasPausedForTutorial && savedTimeLeft > 0) {
                    startGameTimer(savedTimeLeft, gameTimerCallback);
                }
                return;
            }

            steps.forEach((step, index) => {
                tutorialTour.addStep({
                    id: step.id,
                    text: `<div class="shepherd-title">${step.title}</div><div class="shepherd-text">${step.text}</div>`,
                    attachTo: step.attachTo ? { element: step.attachTo, on: step.position || 'bottom' } : undefined,
                    buttons: index === steps.length - 1 
                        ? [
                            { text: '← Anterior', action: tutorialTour.back, classes: 'shepherd-button-secondary' },
                            { text: '¡Entendido! 🎮', action: () => tutorialTour.complete(), classes: 'shepherd-button-primary' }
                        ]
                        : index === 0
                        ? [{ text: 'Siguiente →', action: tutorialTour.next, classes: 'shepherd-button-primary' }]
                        : [
                            { text: '← Anterior', action: tutorialTour.back, classes: 'shepherd-button-secondary' },
                            { text: 'Siguiente →', action: tutorialTour.next, classes: 'shepherd-button-primary' }
                        ]
                });
            });

            // Función para reanudar el timer
            const resumeTimerAfterTutorial = () => {
                if (timerWasPausedForTutorial && savedTimeLeft > 0) {
                    startGameTimer(savedTimeLeft, gameTimerCallback);
                }
            };

            tutorialTour.on('complete', () => {
                if (typeof showToast === 'function') {
                    showToast('¡Tutorial completado! Ya puedes jugar.', 'success');
                }
                resumeTimerAfterTutorial();
            });
            
            // También reanudar si el usuario cancela/cierra el tutorial
            tutorialTour.on('cancel', () => {
                resumeTimerAfterTutorial();
            });

            tutorialTour.start();
        } catch (error) {
            console.error('Error al iniciar tutorial:', error);
        }
    }, 800);
}

// Obtener pasos del tutorial según el juego
function getTutorialStepsForGame(gameId) {
    const tutorials = {
        'secuencia-pop': [
            {
                id: 'intro',
                title: '🎯 Bienvenido a Secuencia Pop',
                text: 'Tu objetivo es completar la secuencia numérica. Observa el patrón y selecciona el número que falta.'
            },
            {
                id: 'sequence-display',
                title: '🔢 La Secuencia',
                text: 'Aquí se muestra la secuencia con un número oculto (marcado con <strong>?</strong>). Analiza los números para descubrir el patrón (multiplicación o división).',
                attachTo: '#sequenceDisplay',
                position: 'bottom'
            },
            {
                id: 'pop-target',
                title: '📋 El Reto',
                text: 'En esta área puedes ver la secuencia completa y una explicación del patrón cuando respondes.',
                attachTo: '#popTarget',
                position: 'bottom'
            },
            {
                id: 'options',
                title: '🎈 Burbujas de Respuesta',
                text: 'Haz clic en la <strong>burbuja correcta</strong> con el número que completa la secuencia. ¡Cuidado! Solo una es correcta.',
                attachTo: '#popField',
                position: 'top'
            },
            {
                id: 'timer',
                title: '⏱️ Tiempo',
                text: 'Tienes <strong>90 segundos</strong> para conseguir la mayor puntuación posible. ¡Responde rápido!',
                attachTo: '.game-timer',
                position: 'left'
            },
            {
                id: 'score',
                title: '⭐ Puntuación',
                text: 'Cada respuesta correcta suma <strong>+100 puntos</strong>. Al final verás tu desempeño.',
                attachTo: '.game-score',
                position: 'left'
            }
        ],
        'memoria-sucesiones': [
            {
                id: 'intro',
                title: '🧠 Memoria de Sucesiones',
                text: 'Encuentra los pares de tarjetas que coinciden. Cada par representa la misma secuencia numérica.'
            },
            {
                id: 'memorize',
                title: '👀 Fase de Memorización',
                text: 'Al iniciar, todas las tarjetas se mostrarán <strong>volteadas por 5 segundos</strong>. ¡Usa este tiempo para memorizar dónde está cada par!',
                attachTo: '#memoryGrid',
                position: 'bottom'
            },
            {
                id: 'cards',
                title: '🃏 Voltea las Tarjetas',
                text: 'Después de la fase de memorización, haz clic en <strong>dos tarjetas</strong> para voltearlas. Si coinciden, se quedan descubiertas y sumas puntos.',
                attachTo: '#memoryGrid',
                position: 'bottom'
            },
            {
                id: 'score',
                title: '⭐ Sin Límite de Tiempo',
                text: 'No hay temporizador. Tómate tu tiempo para encontrar todos los pares. ¡Cada par encontrado suma <strong>+150 puntos</strong>!',
                attachTo: '.game-score',
                position: 'left'
            }
        ],
        'pizza-fractions': [
            {
                id: 'intro',
                title: '🍕 Pizza Fracciones',
                text: 'Aprende fracciones de forma visual y deliciosa. Selecciona las porciones de pizza según la fracción indicada.'
            },
            {
                id: 'challenge',
                title: '📋 El Reto',
                text: 'Observa la <strong>fracción</strong> que debes representar. El <strong>numerador</strong> indica cuántas porciones seleccionar y el <strong>denominador</strong> en cuántas partes está dividida la pizza.',
                attachTo: '#pizzaChallenge',
                position: 'bottom'
            },
            {
                id: 'pizza',
                title: '🍕 Selecciona Porciones',
                text: 'Haz clic en las <strong>porciones de pizza</strong> para seleccionarlas. Se iluminarán cuando las selecciones.',
                attachTo: '#pizzaContainer',
                position: 'top'
            },
            {
                id: 'controls',
                title: '✅ Verifica tu Respuesta',
                text: 'Cuando hayas seleccionado las porciones correctas, presiona el botón <strong>"Verificar"</strong> para comprobar.',
                attachTo: '#pizzaControls',
                position: 'top'
            },
            {
                id: 'timer',
                title: '⏱️ Tiempo',
                text: 'Tienes <strong>60 segundos</strong>. ¡Practica las fracciones lo más rápido posible!',
                attachTo: '.game-timer',
                position: 'left'
            }
        ],
        'fracciones-pop': [
            {
                id: 'intro',
                title: '🎈 Fracciones Pop',
                text: 'Lee la fracción escrita en palabras y haz pop a la burbuja con su representación numérica correcta.'
            },
            {
                id: 'target',
                title: '📝 Fracción en Palabras',
                text: 'Aquí aparece la fracción escrita en <strong>palabras</strong> (ejemplo: "un cuarto"). Debes identificar cuál es su forma numérica.',
                attachTo: '#popTarget',
                position: 'bottom'
            },
            {
                id: 'bubbles',
                title: '🎈 Burbujas Numéricas',
                text: 'Las burbujas muestran <strong>fracciones en números</strong>. Haz clic en la que corresponda a la fracción escrita arriba.',
                attachTo: '#popField',
                position: 'top'
            },
            {
                id: 'timer',
                title: '⏱️ Tiempo',
                text: 'Tienes <strong>45 segundos</strong>. ¡Conecta palabras con números rápidamente!',
                attachTo: '.game-timer',
                position: 'left'
            }
        ],
        'match-equivalentes': [
            {
                id: 'intro',
                title: '🔗 Match Equivalentes',
                text: 'Conecta fracciones que son <strong>equivalentes</strong> entre sí (representan la misma cantidad).'
            },
            {
                id: 'left-column',
                title: '⬅️ Columna Izquierda',
                text: 'Primero, haz clic en una fracción de esta columna para seleccionarla.',
                attachTo: '#leftColumn',
                position: 'right'
            },
            {
                id: 'right-column',
                title: '➡️ Columna Derecha',
                text: 'Luego, busca su <strong>fracción equivalente</strong> en esta columna y haz clic. Por ejemplo: 1/2 = 2/4 = 3/6',
                attachTo: '#rightColumn',
                position: 'left'
            },
            {
                id: 'timer',
                title: '⏱️ Tiempo',
                text: 'Tienes <strong>90 segundos</strong> para conectar todas las parejas equivalentes.',
                attachTo: '.game-timer',
                position: 'left'
            }
        ],
        'escalera-fracciones': [
            {
                id: 'intro',
                title: '🪜 Escalera de Fracciones',
                text: 'Sube la escalera simplificando fracciones correctamente en cada paso.'
            },
            {
                id: 'ladder',
                title: '🪜 La Escalera',
                text: 'Aquí está la escalera. Cada respuesta correcta te sube <strong>un escalón</strong>. ¡Llega hasta la cima para ganar!',
                attachTo: '#ladderContainer',
                position: 'right'
            },
            {
                id: 'question',
                title: '📋 Simplifica la Fracción',
                text: 'Se te mostrará una fracción. Elige la opción que representa su <strong>forma más simplificada</strong> (dividiendo numerador y denominador entre su MCD).',
                attachTo: '#ladderQuestion',
                position: 'left'
            },
            {
                id: 'timer',
                title: '⏱️ Tiempo',
                text: 'Tienes <strong>60 segundos</strong>. ¡Simplifica rápido para llegar a la cima!',
                attachTo: '.game-timer',
                position: 'left'
            }
        ],
        'ordenar-carrera': [
            {
                id: 'intro',
                title: '📊 Orden Visual',
                text: 'Ordena las fracciones de <strong>MENOR a MAYOR</strong> haciendo clic en el orden correcto.'
            },
            {
                id: 'instructions',
                title: '📝 Instrucciones',
                text: 'Lee las instrucciones aquí. Debes ordenar las fracciones de menor a mayor valor.',
                attachTo: '.sorting-instructions',
                position: 'bottom'
            },
            {
                id: 'cards',
                title: '🃏 Tarjetas de Fracciones',
                text: 'Haz clic en las tarjetas en el <strong>orden correcto</strong> (de menor a mayor). Cada clic asigna un número de orden.',
                attachTo: '#sortingContainer',
                position: 'bottom'
            },
            {
                id: 'selected',
                title: '📋 Tu Orden',
                text: 'Aquí puedes ver el orden que has seleccionado. Verifica antes de confirmar.',
                attachTo: '#sortingSelected',
                position: 'top'
            },
            {
                id: 'buttons',
                title: '🔘 Controles',
                text: 'Usa <strong>"Reiniciar"</strong> para empezar de nuevo o <strong>"Verificar"</strong> para comprobar tu respuesta.',
                attachTo: '.sorting-buttons',
                position: 'top'
            }
        ],
        'mayor-menor-battle': [
            {
                id: 'intro',
                title: '⚔️ Batalla Mayor/Menor',
                text: 'Decide rápidamente cuál fracción es <strong>MAYOR</strong> entre las dos opciones.'
            },
            {
                id: 'comparison',
                title: '⚖️ Compara las Fracciones',
                text: 'Verás dos fracciones enfrentadas. Haz clic en la que tenga <strong>mayor valor</strong>. Tip: convierte a decimales o usa denominadores comunes.',
                attachTo: '#comparisonContainer',
                position: 'bottom'
            },
            {
                id: 'timer',
                title: '⚡ ¡Rápido!',
                text: 'Solo tienes <strong>45 segundos</strong>. ¡Responde lo más rápido posible para sumar más puntos!',
                attachTo: '.game-timer',
                position: 'left'
            }
        ],
        'atrapa-multiplos': [
            {
                id: 'intro',
                title: '✓ Múltiplos Match',
                text: 'Selecciona todas las tarjetas que contienen <strong>múltiplos</strong> del número objetivo.'
            },
            {
                id: 'target',
                title: '🔢 Número Objetivo',
                text: 'Este es el número del cual debes encontrar los múltiplos. Por ejemplo, múltiplos de 3 son: 3, 6, 9, 12...',
                attachTo: '#multipleTarget',
                position: 'bottom'
            },
            {
                id: 'grid',
                title: '🎯 Tarjetas de Números',
                text: 'Haz clic en cada tarjeta que contenga un <strong>múltiplo</strong>. Las tarjetas seleccionadas cambiarán de color. Puedes deseleccionar haciendo clic de nuevo.',
                attachTo: '#multiplesGrid',
                position: 'top'
            },
            {
                id: 'verify',
                title: '✅ Verificar',
                text: 'Cuando hayas seleccionado todos los múltiplos, presiona este botón para <strong>verificar tu respuesta</strong>.',
                attachTo: '#checkMultiplesBtn',
                position: 'top'
            },
            {
                id: 'progress',
                title: '📊 Progreso',
                text: 'Completa <strong>6 rondas</strong> para terminar el juego. ¡Cada ronda te acerca a la victoria!',
                attachTo: '#multiplesProgress',
                position: 'bottom'
            }
        ],
        'divisor-puzzle': [
            {
                id: 'intro',
                title: '🧩 Puzzle Divisores',
                text: 'Encuentra todos los <strong>divisores</strong> de un número para completar el puzzle.'
            },
            {
                id: 'number',
                title: '🔢 Número Objetivo',
                text: 'Este es el número del cual debes encontrar <strong>todos los divisores</strong>. Un divisor divide exactamente sin dejar residuo.',
                attachTo: '#puzzleNumber',
                position: 'bottom'
            },
            {
                id: 'grid',
                title: '🧩 Piezas del Puzzle',
                text: 'Haz clic en los números que sean <strong>divisores</strong>. Por ejemplo, divisores de 12: 1, 2, 3, 4, 6, 12.',
                attachTo: '#puzzleGrid',
                position: 'top'
            },
            {
                id: 'verify',
                title: '✅ Verificar',
                text: 'Cuando tengas todos los divisores seleccionados, presiona para <strong>verificar</strong>.',
                attachTo: '#checkPuzzleBtn',
                position: 'top'
            }
        ],
        'clasificador-express': [
            {
                id: 'intro',
                title: '🏷️ Clasificador Express',
                text: 'Clasifica rápidamente los números según los <strong>criterios de divisibilidad</strong>.'
            },
            {
                id: 'number',
                title: '🔢 Número a Clasificar',
                text: 'Observa el número que aparece. Debes decidir por cuál de los números es <strong>divisible</strong>.',
                attachTo: '#classifierNumber',
                position: 'bottom'
            },
            {
                id: 'bins',
                title: '📦 Contenedores',
                text: 'Haz clic en el contenedor correcto:<br>• <strong>Por 2:</strong> termina en 0, 2, 4, 6, 8<br>• <strong>Por 3:</strong> suma de dígitos divisible por 3<br>• <strong>Por 5:</strong> termina en 0 o 5<br>• <strong>Ninguno:</strong> si no cumple ninguno',
                attachTo: '.classifier-bins',
                position: 'top'
            },
            {
                id: 'timer',
                title: '⚡ ¡Express!',
                text: 'Tienes <strong>60 segundos</strong>. Clasifica lo más rápido posible para sumar puntos.',
                attachTo: '.game-timer',
                position: 'left'
            }
        ],
        'ruleta-divisibilidad': [
            {
                id: 'intro',
                title: '🎡 Ruleta Divisible',
                text: 'Gira la ruleta y responde preguntas sobre <strong>criterios de divisibilidad</strong>.'
            },
            {
                id: 'wheel',
                title: '🎰 La Ruleta',
                text: 'La ruleta contiene diferentes divisores (2, 3, 4, 5, 6, 9). Gírala para obtener un criterio de divisibilidad.',
                attachTo: '#phaserWheelContainer',
                position: 'bottom'
            },
            {
                id: 'spin',
                title: '🔄 Girar',
                text: 'Presiona este botón para <strong>girar la ruleta</strong>. Espera a que se detenga para ver tu pregunta.',
                attachTo: '#spinBtn',
                position: 'top'
            },
            {
                id: 'question',
                title: '❓ Pregunta',
                text: 'Después de girar, aparecerá una pregunta. Responde <strong>Verdadero</strong> o <strong>Falso</strong> según el criterio.',
                attachTo: '#wheelQuestion',
                position: 'top'
            }
        ],
        'constructor-areas': [
            {
                id: 'intro',
                title: '📐 Contador de Área',
                text: 'Cuenta los cuadritos de cada figura para calcular su <strong>área</strong>.'
            },
            {
                id: 'figure',
                title: '🟦 La Figura',
                text: 'Observa la figura formada por cuadrados. Cada cuadrito equivale a <strong>1 cm²</strong>. Cuenta cuántos hay en total.',
                attachTo: '#builderFigure',
                position: 'bottom'
            },
            {
                id: 'options',
                title: '🔢 Opciones de Respuesta',
                text: 'Selecciona la opción con el <strong>área correcta</strong>. Recuerda: Área = base × altura, o simplemente cuenta los cuadritos.',
                attachTo: '#builderOptions',
                position: 'top'
            },
            {
                id: 'timer',
                title: '⏱️ Tiempo',
                text: 'Tienes <strong>60 segundos</strong>. ¡Practica el cálculo de áreas!',
                attachTo: '.game-timer',
                position: 'left'
            }
        ],
        'conversor-challenge': [
            {
                id: 'intro',
                title: '📏 Quiz de Áreas',
                text: 'Responde preguntas sobre <strong>áreas y conversiones</strong> de unidades.'
            },
            {
                id: 'question',
                title: '❓ Pregunta',
                text: 'Lee cuidadosamente la pregunta. Puede ser sobre <strong>conversiones de unidades</strong> o <strong>cálculo de áreas</strong>.',
                attachTo: '#converterQuestion',
                position: 'bottom'
            },
            {
                id: 'options',
                title: '📋 Opciones',
                text: 'Selecciona la respuesta correcta. Recuerda las conversiones:<br>• 1 m² = 10,000 cm²<br>• 1 dm² = 100 cm²<br>• Área = largo × ancho',
                attachTo: '#converterOptions',
                position: 'top'
            },
            {
                id: 'hint',
                title: '💡 Pista',
                text: 'Si necesitas ayuda, aquí pueden aparecer pistas útiles para resolver el problema.',
                attachTo: '#converterHint',
                position: 'top'
            }
        ]
    };

    return tutorials[gameId] || [];
}

// Mostrar tutorial desde botón de ayuda
function showGameHelp() {
    if (currentGame && currentGame.gameId) {
        showGameTutorial(currentGame.gameId, null);
    }
}

// ================================
// Renderizar selector de juegos
// ================================
function renderGameSelector(topicId) {
    const topic = gamesConfig[topicId];
    if (!topic) return '';
    
    return `
        <div class="game-selector">
            <div class="game-selector-header">
                <i class="fas fa-gamepad"></i>
                <h3>Elige tu juego</h3>
                <p>${topic.title}</p>
            </div>
            <div class="game-cards">
                ${topic.games.map((game, index) => `
                    <div class="game-card" onclick="startGame(${topicId}, '${game.id}')">
                        <div class="game-card-icon">
                            <i class="fas ${game.icon}"></i>
                        </div>
                        <div class="game-card-info">
                            <h4>${game.name}</h4>
                            <p>${game.description}</p>
                        </div>
                        <div class="game-card-arrow">
                            <i class="fas fa-play-circle"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ================================
// Iniciar juego específico
// ================================
function startGame(topicId, gameId) {
    currentGame = { topicId, gameId };
    gameScore = 0;
    gameLevel = 1;
    
    // Guardar como último juego jugado
    const gameName = gamesConfig[topicId]?.games[gameId]?.name || 'Juego';
    if (typeof saveLastGame === 'function') {
        saveLastGame(topicId, gameId, gameName);
    }
    
    const gameBody = document.getElementById('gameBody');
    
    // Función para inicializar el juego
    const initializeGame = () => {
        // Mostrar pantalla de carga
        gameBody.innerHTML = `
            <div class="game-loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Cargando juego...</p>
            </div>
        `;
        
        // Lanzar el juego después de un breve delay
        setTimeout(() => {
            launchGame(gameId, topicId);
        }, 300);
    };
    
    // Verificar si es primera vez
    if (isFirstTimeGame(gameId)) {
        window.pendingGameStart = initializeGame;
        showGameTutorial(gameId, initializeGame);
    } else {
        initializeGame();
    }
}

// Lanzar el juego según su tipo
function launchGame(gameId, topicId) {
    const gameBody = document.getElementById('gameBody');
    
    try {
        switch(gameId) {
            // Tema 1: Sucesiones
            case 'secuencia-pop':
                initSequencePop();
                break;
            case 'memoria-sucesiones':
                initMemoryGame(topicId);
                break;
            
            // Tema 2: Fracciones básicas
            case 'pizza-fractions':
                initPizzaGame();
                break;
            case 'fracciones-pop':
                initFractionPop();
                break;
            
            // Tema 3: Fracciones equivalentes
            case 'match-equivalentes':
                initMatchingGame();
                break;
            case 'escalera-fracciones':
                initLadderGame();
                break;
            
            // Tema 4: Orden de fracciones
            case 'ordenar-carrera':
                initSortingGame();
                break;
            case 'mayor-menor-battle':
                initComparisonGame();
                break;
            
            // Tema 5: Múltiplos y divisores
            case 'atrapa-multiplos':
                initCatcherGame();
                break;
            case 'divisor-puzzle':
                initPuzzleGame();
                break;
            
            // Tema 6: Criterios de divisibilidad
            case 'clasificador-express':
                initClassifierGame();
                break;
            case 'ruleta-divisibilidad':
                initWheelGame();
                break;
            
            // Tema 7: Unidades de área
            case 'constructor-areas':
                initBuilderGame();
                break;
            case 'conversor-challenge':
                initConverterGame();
                break;
            
            default:
                throw new Error(`Juego no encontrado: ${gameId}`);
        }
    } catch (error) {
        console.error('Error al cargar juego:', error);
        gameBody.innerHTML = `
            <div class="game-error">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e74c3c;"></i>
                <h3>Error al cargar el juego</h3>
                <p>Hubo un problema al iniciar el juego. Por favor, inténtalo de nuevo.</p>
                <button class="btn btn-primary" onclick="location.reload()">Recargar página</button>
            </div>
        `;
    }
}

// ================================
// Componentes comunes de juegos
// ================================
function renderGameHeader(title, showTimer = true, showScore = true) {
    return `
        <div class="game-header">
            <button class="game-back-btn" onclick="backToGameSelector()">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="game-title-area">
                <h3>${title}</h3>
                <span class="game-level">Nivel ${gameLevel}</span>
            </div>
            <div class="game-stats">
                ${showTimer ? '<div class="game-timer"><i class="fas fa-clock"></i> <span id="gameTime">60</span>s</div>' : ''}
                ${showScore ? '<div class="game-score"><i class="fas fa-star"></i> <span id="gameScore">0</span></div>' : ''}
                <button class="game-help-btn" onclick="showGameHelp()" title="¿Cómo jugar?">
                    <i class="fas fa-question-circle"></i>
                </button>
            </div>
        </div>
    `;
}

function renderGameOver(score, message = "¡Juego terminado!") {
    stopGameTimer();
    
    // Calcular estrellas ganadas (1-3 estrellas basado en puntaje)
    let earnedStars = 0;
    if (score >= 300) earnedStars = 1;
    if (score >= 600) earnedStars = 2;
    if (score >= 900) earnedStars = 3;
    
    // Guardar estrellas en localStorage si hay juego activo
    if (currentGame && currentGame.gameId && earnedStars > 0) {
        const starsKey = `edumath_stars_${currentGame.gameId}`;
        const currentStars = parseInt(localStorage.getItem(starsKey) || '0');
        // Solo guardar si las nuevas estrellas son mayores
        if (earnedStars > currentStars) {
            localStorage.setItem(starsKey, earnedStars);
        }
        // Actualizar el total de estrellas en la pantalla de inicio
        if (typeof updateTotalStars === 'function') {
            updateTotalStars();
        }
    }
    
    return `
        <div class="game-over">
            <div class="game-over-content">
                <i class="fas fa-trophy"></i>
                <h2>${message}</h2>
                <div class="final-score">
                    <span>Puntuación Final</span>
                    <strong>${score}</strong>
                </div>
                <div class="game-over-stars">
                    ${score >= 300 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                    ${score >= 600 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                    ${score >= 900 ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                </div>
                <div class="game-over-buttons">
                    <button class="btn btn-primary" onclick="startGame(${currentGame.topicId}, '${currentGame.gameId}')">
                        <i class="fas fa-redo"></i> Jugar de nuevo
                    </button>
                    <button class="btn btn-outline" onclick="backToGameSelector()">
                        <i class="fas fa-th"></i> Otros juegos
                    </button>
                </div>
            </div>
        </div>
    `;
}

let gameTimerCallback = null; // Guardar el callback para reanudar

function startGameTimer(seconds, onComplete) {
    gameTimeLeft = seconds;
    gameTimerCallback = onComplete; // Guardar el callback
    updateTimerDisplay();
    
    gameTimer = setInterval(() => {
        gameTimeLeft--;
        updateTimerDisplay();
        
        if (gameTimeLeft <= 0) {
            stopGameTimer();
            if (onComplete) onComplete();
        }
    }, 1000);
}

function stopGameTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('gameTime');
    if (timerEl) {
        timerEl.textContent = gameTimeLeft;
        if (gameTimeLeft <= 10) {
            timerEl.parentElement.classList.add('warning');
        }
    }
}

function updateScore(points) {
    gameScore += points;
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) {
        scoreEl.textContent = gameScore;
        scoreEl.parentElement.classList.add('pulse');
        setTimeout(() => scoreEl.parentElement.classList.remove('pulse'), 300);
    }
}

function backToGameSelector() {
    stopGameTimer();
    const topicId = currentGame ? currentGame.topicId : 1;
    document.getElementById('gameBody').innerHTML = renderGameSelector(topicId);
}

// ================================
// SISTEMA DE RETROALIMENTACIÓN MEJORADO
// Modal que requiere interacción del usuario
// ================================

/**
 * Muestra un modal de retroalimentación mejorado
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.isCorrect - Si la respuesta fue correcta
 * @param {string} options.title - Título principal (opcional)
 * @param {string} options.message - Mensaje de retroalimentación
 * @param {string} options.correctAnswer - La respuesta correcta (para errores)
 * @param {string} options.userAnswer - La respuesta del usuario (para errores)
 * @param {string} options.explanation - Explicación educativa
 * @param {number} options.points - Puntos ganados/perdidos
 * @param {function} options.onContinue - Callback cuando el usuario continúa
 * @param {boolean} options.autoClose - Si se cierra automáticamente (para aciertos rápidos)
 * @param {number} options.autoCloseDelay - Delay en ms para auto-cierre (default 2000)
 */
function showFeedbackModal(options) {
    const {
        isCorrect = true,
        title = isCorrect ? '¡Correcto!' : '¡Incorrecto!',
        message = '',
        correctAnswer = '',
        userAnswer = '',
        explanation = '',
        points = 0,
        onContinue = null,
        autoClose = isCorrect,  // Por defecto, auto-cierra solo si es correcto
        autoCloseDelay = 2000
    } = options;
    
    // Variable para saber si pausamos el timer
    let timerWasPaused = false;
    
    // Pausar el timer mientras se muestra el modal (solo para errores)
    if (gameTimer && !isCorrect) {
        clearInterval(gameTimer);
        gameTimer = null; // Importante: marcar como null para poder reanudar
        timerWasPaused = true;
    }
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'feedback-modal-overlay';
    overlay.id = 'feedbackModalOverlay';
    
    // Generar contenido del modal
    let pointsHTML = '';
    if (points !== 0) {
        const pointsClass = points > 0 ? '' : 'negative';
        const pointsSign = points > 0 ? '+' : '';
        pointsHTML = `<div class="feedback-modal-points ${pointsClass}">${pointsSign}${points} puntos</div>`;
    }
    
    let bodyContent = '';
    
    if (message) {
        bodyContent += `<p class="feedback-modal-message">${message}</p>`;
    }
    
    // Para respuestas incorrectas, mostrar las respuestas
    if (!isCorrect) {
        if (userAnswer) {
            bodyContent += `
                <div class="feedback-your-answer">
                    <i class="fas fa-times"></i>
                    <span>Tu respuesta: ${userAnswer}</span>
                </div>
            `;
        }
        if (correctAnswer) {
            bodyContent += `
                <div class="feedback-correct-answer">
                    <i class="fas fa-check"></i>
                    <span>Respuesta correcta: ${correctAnswer}</span>
                </div>
            `;
        }
    }
    
    // Explicación educativa
    if (explanation) {
        bodyContent += `
            <div class="feedback-modal-explanation">
                <div class="feedback-modal-explanation-title">
                    <i class="fas fa-lightbulb"></i>
                    <span>${isCorrect ? '¿Sabías que...?' : '¿Por qué?'}</span>
                </div>
                <p class="feedback-modal-explanation-text">${explanation}</p>
            </div>
        `;
    }
    
    // Botón de continuar
    const buttonText = isCorrect ? '¡Continuar!' : 'Entendido, continuar';
    const buttonIcon = isCorrect ? 'fa-arrow-right' : 'fa-redo';
    
    overlay.innerHTML = `
        <div class="feedback-modal ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="feedback-modal-header">
                <div class="feedback-modal-icon">
                    <i class="fas ${isCorrect ? 'fa-check' : 'fa-times'}"></i>
                </div>
                <h3 class="feedback-modal-title">${title}</h3>
                ${pointsHTML}
                ${autoClose && isCorrect ? '<div class="feedback-auto-close-bar"></div>' : ''}
            </div>
            <div class="feedback-modal-body">
                ${bodyContent}
            </div>
            <div class="feedback-modal-actions">
                <button class="feedback-modal-btn" id="feedbackContinueBtn">
                    ${buttonText} <i class="fas ${buttonIcon}"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Función para cerrar el modal
    const closeModal = () => {
        overlay.classList.add('closing');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
            // Reanudar el timer si fue pausado y aún queda tiempo
            if (timerWasPaused && gameTimeLeft > 0) {
                startGameTimer(gameTimeLeft, gameTimerCallback);
            }
            // Ejecutar callback
            if (onContinue && typeof onContinue === 'function') {
                onContinue();
            }
        }, 250);
    };
    
    // Event listener para el botón
    const continueBtn = document.getElementById('feedbackContinueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', closeModal);
    }
    
    // Auto-cierre para respuestas correctas
    if (autoClose) {
        setTimeout(closeModal, autoCloseDelay);
    }
    
    // También permitir cerrar con click en overlay (solo para correctas)
    if (isCorrect) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });
    }
}

/**
 * Retroalimentación RÁPIDA para aciertos (no interrumpe el flujo del juego)
 * Muestra un toast animado que desaparece automáticamente
 */
function showQuickFeedback(message = '¡Correcto!', points = 0) {
    const feedback = document.createElement('div');
    feedback.className = 'game-feedback correct animated';
    feedback.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div>
            <span style="font-weight: 600;">${message}</span>
            ${points > 0 ? `<span style="margin-left: 8px; color: #f39c12;">+${points}</span>` : ''}
        </div>
    `;
    document.body.appendChild(feedback);
    
    // Remover después de 1.2 segundos para no interrumpir
    setTimeout(() => {
        feedback.style.animation = 'feedbackBounce 0.3s ease reverse';
        setTimeout(() => feedback.remove(), 300);
    }, 1200);
}

/**
 * Función simplificada para retroalimentación
 * - Aciertos: Toast rápido (no interrumpe)
 * - Errores: Modal completo (requiere interacción)
 */
function showFeedback(isCorrect, message = '', explanation = '', options = {}) {
    if (isCorrect) {
        // Para aciertos: retroalimentación rápida sin interrumpir
        showQuickFeedback(message || '¡Correcto!', options.points || 0);
        // Ejecutar callback inmediatamente si existe
        if (options.onContinue && typeof options.onContinue === 'function') {
            setTimeout(options.onContinue, 800);
        }
    } else {
        // Para errores: modal completo que requiere interacción
        showFeedbackModal({
            isCorrect: false,
            message: message || '¡Intenta de nuevo!',
            explanation,
            autoClose: false,
            ...options
        });
    }
}

/**
 * Retroalimentación detallada para errores importantes
 * Requiere que el usuario haga clic para continuar
 */
function showDetailedFeedback(options) {
    showFeedbackModal({
        ...options,
        autoClose: false  // Siempre requiere interacción
    });
}

// ================================
// JUEGO 1: Secuencia Pop (Tema 1)
// ================================
let seqTarget = null;
let seqPattern = null;
let seqProcessing = false;

function initSequencePop() {
    const gameBody = document.getElementById('gameBody');
    if (!gameBody) {
        console.error('gameBody element not found');
        return;
    }

    // Resetear estado
    seqTarget = null;
    seqPattern = null;
    seqProcessing = false;

    gameBody.innerHTML = `
        ${renderGameHeader('Secuencia Pop')}
        <div class="game-area pop-game">
            <div class="pop-target" id="popTarget">
                <p style="font-size: 1.2rem; font-weight: 600; color: var(--gray-700);">¡Completa la secuencia!</p>
                <div class="sequence-display" id="sequenceDisplay"></div>
                <div id="sequenceExplanation" style="color:var(--gray-600); margin-top:8px; font-size:0.9rem;"></div>
            </div>
            <div class="pop-field" id="popField"></div>
        </div>
    `;

    startGameTimer(90, () => {
        const body = document.getElementById('gameBody');
        if (body) {
            body.innerHTML = renderGameOver(gameScore, gameScore >= 400 ? "¡Excelente!" : "¡Buen intento!");
        }
    });

    // Generar primera secuencia con un pequeño delay para asegurar que el DOM está listo
    setTimeout(() => {
        generateSequencePop();
    }, 100);
}

// Historial de secuencias recientes para evitar repeticiones
let recentSequences = [];

function generateSequencePop() {
    const display = document.getElementById('sequenceDisplay');
    const field = document.getElementById('popField');
    const expl = document.getElementById('sequenceExplanation');
    
    // Verificar que los elementos existen
    if (!display || !field) {
        console.error('Elementos de secuencia no encontrados');
        return;
    }
    
    // Resetear estado de procesamiento
    seqProcessing = false;
    
    // Definir todas las secuencias posibles con números de máximo 2 cifras
    const allSequences = [
        // Multiplicación por 2
        { type: 'mult', factor: 2, start: 1, seq: [1, 2, 4, 8, 16] },
        { type: 'mult', factor: 2, start: 2, seq: [2, 4, 8, 16, 32] },
        { type: 'mult', factor: 2, start: 3, seq: [3, 6, 12, 24, 48] },
        { type: 'mult', factor: 2, start: 4, seq: [4, 8, 16, 32, 64] },
        { type: 'mult', factor: 2, start: 5, seq: [5, 10, 20, 40, 80] },
        { type: 'mult', factor: 2, start: 6, seq: [6, 12, 24, 48, 96] },
        // Multiplicación por 3 (secuencias cortas de 4 elementos para no exceder 99)
        { type: 'mult', factor: 3, start: 1, seq: [1, 3, 9, 27, 81] },
        { type: 'mult', factor: 3, start: 2, seq: [2, 6, 18, 54] },
        { type: 'mult', factor: 3, start: 3, seq: [3, 9, 27, 81] },
        // División por 2
        { type: 'div', factor: 2, start: 16, seq: [16, 8, 4, 2, 1] },
        { type: 'div', factor: 2, start: 32, seq: [32, 16, 8, 4, 2] },
        { type: 'div', factor: 2, start: 48, seq: [48, 24, 12, 6, 3] },
        { type: 'div', factor: 2, start: 64, seq: [64, 32, 16, 8, 4] },
        { type: 'div', factor: 2, start: 80, seq: [80, 40, 20, 10, 5] },
        { type: 'div', factor: 2, start: 96, seq: [96, 48, 24, 12, 6] },
        // División por 3
        { type: 'div', factor: 3, start: 81, seq: [81, 27, 9, 3, 1] },
        { type: 'div', factor: 3, start: 54, seq: [54, 18, 6, 2] },
        { type: 'div', factor: 3, start: 27, seq: [27, 9, 3, 1] },
        // Multiplicación por 5 (secuencias cortas)
        { type: 'mult', factor: 5, start: 1, seq: [1, 5, 25] },
        { type: 'mult', factor: 5, start: 2, seq: [2, 10, 50] },
        { type: 'mult', factor: 5, start: 3, seq: [3, 15, 75] },
        // División por 5
        { type: 'div', factor: 5, start: 25, seq: [25, 5, 1] },
        { type: 'div', factor: 5, start: 50, seq: [50, 10, 2] },
        { type: 'div', factor: 5, start: 75, seq: [75, 15, 3] },
        // Multiplicación por 4 (secuencias cortas)
        { type: 'mult', factor: 4, start: 1, seq: [1, 4, 16, 64] },
        { type: 'mult', factor: 4, start: 2, seq: [2, 8, 32] },
        // División por 4
        { type: 'div', factor: 4, start: 64, seq: [64, 16, 4, 1] },
        { type: 'div', factor: 4, start: 32, seq: [32, 8, 2] },
    ];
    
    // Filtrar secuencias que tengan al menos 3 elementos y no estén en el historial reciente
    let availableSequences = allSequences.filter(s => 
        s.seq.length >= 3 && !recentSequences.includes(s.start + '-' + s.factor + '-' + s.type)
    );
    
    // Si ya usamos todas, reiniciar el historial
    if (availableSequences.length === 0) {
        recentSequences = [];
        availableSequences = allSequences.filter(s => s.seq.length >= 3);
    }
    
    // Seleccionar una secuencia aleatoria
    const selected = availableSequences[Math.floor(Math.random() * availableSequences.length)];
    
    // Agregar al historial de recientes (máximo 10)
    recentSequences.push(selected.start + '-' + selected.factor + '-' + selected.type);
    if (recentSequences.length > 10) {
        recentSequences.shift();
    }
    
    const sequence = [...selected.seq];
    const isMultiplication = selected.type === 'mult';
    const factor = selected.factor;
    const start = selected.start;
    
    // Elegir índice oculto (evitar primero y último)
    const maxHiddenIndex = Math.min(sequence.length - 2, 3);
    const hiddenIndex = Math.floor(Math.random() * maxHiddenIndex) + 1;
    seqTarget = sequence[hiddenIndex];
    seqPattern = { isMultiplication, factor, sequence, start };
    
    // Mostrar secuencia
    display.innerHTML = sequence.map((num, idx) => 
        `<div class="sequence-item ${idx === hiddenIndex ? 'hidden-item' : ''}">${idx === hiddenIndex ? '?' : num}</div>`
    ).join('');
    
    // Actualizar explicación
    if (expl) {
        expl.textContent = isMultiplication 
            ? `Patrón: multiplicando por ${factor}` 
            : `Patrón: dividiendo entre ${factor}`;
    }
    
    // Limpiar campo de burbujas
    field.innerHTML = '';
    
    // Generar respuestas incorrectas
    const wrongAnswers = [];
    let attempts = 0;
    while (wrongAnswers.length < 5 && attempts < 50) {
        attempts++;
        let wrong;
        if (isMultiplication) {
            // Respuestas incorrectas para multiplicación
            const wrongFactor = factor + (Math.floor(Math.random() * 3) - 1);
            if (Math.random() > 0.5) {
                wrong = seqPattern.start * Math.pow(wrongFactor > 1 ? wrongFactor : 2, hiddenIndex);
            } else {
                wrong = seqTarget + (Math.floor(Math.random() * 10) - 5) * factor;
            }
        } else {
            // Respuestas incorrectas para división
            if (Math.random() > 0.5) {
                wrong = seqTarget * factor; // Un nivel arriba
            } else if (Math.random() > 0.5) {
                wrong = seqTarget / factor; // Un nivel abajo
            } else {
                wrong = seqTarget + (Math.floor(Math.random() * 6) - 3) * factor;
            }
        }
        wrong = Math.round(wrong); // Asegurar enteros
        if (wrong !== seqTarget && wrong > 0 && !wrongAnswers.includes(wrong) && !sequence.includes(wrong)) {
            wrongAnswers.push(wrong);
        }
    }
    
    // Mezclar opciones
    const allOptions = [seqTarget, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    // Crear burbujas SIN onclick inline
    allOptions.forEach(num => {
        const bubble = document.createElement('div');
        bubble.className = 'pop-bubble';
        bubble.style.background = `hsl(${Math.random()*360}, 70%, 60%)`;
        bubble.dataset.value = num;
        bubble.textContent = num;
        
        // Usar addEventListener en lugar de onclick
        bubble.addEventListener('click', function() {
            popSequenceBubble(this);
        });
        
        field.appendChild(bubble);
    });
}

function popSequenceBubble(bubble) {
    // Prevenir múltiples clics
    if (seqProcessing || !bubble || bubble.classList.contains('popped')) {
        return;
    }
    
    seqProcessing = true;
    const value = parseInt(bubble.dataset.value, 10);
    
    // Animar burbuja
    bubble.classList.add('popped');
    setTimeout(() => {
        if (bubble && bubble.parentNode) {
            bubble.remove();
        }
    }, 300);
    
    const expl = document.getElementById('sequenceExplanation');
    
    if (value === seqTarget) {
        updateScore(100);
        
        // Retroalimentación rápida para aciertos (no interrumpe)
        showQuickFeedback('¡Correcto! +100', 100);
        
        if (expl) {
            expl.textContent = seqPattern.isMultiplication 
                ? `¡Correcto! La secuencia multiplica por ${seqPattern.factor} cada vez.`
                : `¡Correcto! La secuencia divide entre ${seqPattern.factor} cada vez.`;
        }
        
        // Continuar rápidamente
        setTimeout(() => {
            seqProcessing = false;
            generateSequencePop();
        }, 800);
    } else {
        // Retroalimentación de error mejorada con modal
        const patternExplanation = seqPattern.isMultiplication 
            ? `Observa: cada número se multiplica por ${seqPattern.factor}. ${seqPattern.sequence[0]} × ${seqPattern.factor} = ${seqPattern.sequence[1]}, ${seqPattern.sequence[1]} × ${seqPattern.factor} = ${seqPattern.sequence[2]}...`
            : `Observa: cada número se divide entre ${seqPattern.factor}. ${seqPattern.sequence[0]} ÷ ${seqPattern.factor} = ${seqPattern.sequence[1]}, ${seqPattern.sequence[1]} ÷ ${seqPattern.factor} = ${seqPattern.sequence[2]}...`;
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡No es correcto!',
            message: value > seqTarget 
                ? `${value} es demasiado alto para esta secuencia.`
                : `${value} es demasiado bajo para esta secuencia.`,
            userAnswer: String(value),
            correctAnswer: String(seqTarget),
            explanation: patternExplanation,
            points: 0,
            autoClose: false,
            onContinue: () => {
                seqProcessing = false;
                generateSequencePop();
            }
        });
        
        if (expl) {
            expl.textContent = seqPattern.isMultiplication 
                ? `El patrón multiplica por ${seqPattern.factor}. El correcto era ${seqTarget}.`
                : `El patrón divide entre ${seqPattern.factor}. El correcto era ${seqTarget}.`;
        }
    }
}


// ================================
// JUEGO 2: Memoria de Sucesiones (Tema 1)
// ================================
let memoryGameStarted = false;

function initMemoryGame(topicId) {
    const gameBody = document.getElementById('gameBody');
    
    const pairs = generateMemoryPairs();
    const cards = [...pairs, ...pairs].sort(() => Math.random() - 0.5);
    
    // Reiniciar estado del juego
    memoryGameStarted = false;
    flippedCards = [];
    matchedPairs = 0;
    
    gameBody.innerHTML = `
        ${renderGameHeader('Memoria de Sucesiones', false, true)}
        <div class="game-area memory-game">
            <div class="memory-phase-indicator" id="memoryPhaseIndicator">
                <div class="phase-content">
                    <i class="fas fa-eye"></i>
                    <span>¡Memoriza las posiciones!</span>
                    <div class="countdown-bar" id="memoryCountdown"></div>
                </div>
            </div>
            <div class="memory-grid" id="memoryGrid">
                ${cards.map((card, i) => `
                    <div class="memory-card" data-index="${i}" data-value="${card.id}" onclick="flipCard(this)">
                        <div class="memory-card-inner">
                            <div class="memory-card-front">
                                <i class="fas fa-question"></i>
                            </div>
                            <div class="memory-card-back">
                                ${card.display}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Iniciar fase de memorización
    startMemorizationPhase();
}

function startMemorizationPhase() {
    const allCards = document.querySelectorAll('.memory-card');
    const indicator = document.getElementById('memoryPhaseIndicator');
    const countdown = document.getElementById('memoryCountdown');
    
    // Mostrar todas las tarjetas volteadas
    allCards.forEach(card => {
        card.classList.add('flipped');
        card.style.pointerEvents = 'none'; // Desactivar clics durante memorización
    });
    
    // Animar la barra de cuenta regresiva (5 segundos)
    if (countdown) {
        countdown.style.animation = 'countdownShrink 5s linear forwards';
    }
    
    // Después de 5 segundos, voltear las tarjetas y comenzar el juego
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.remove('flipped');
            card.style.pointerEvents = 'auto'; // Reactivar clics
        });
        
        // Ocultar indicador de fase
        if (indicator) {
            indicator.style.opacity = '0';
            setTimeout(() => {
                indicator.style.display = 'none';
            }, 300);
        }
        
        memoryGameStarted = true;
    }, 5000);
}

function generateMemoryPairs() {
    const pairs = [];
    for (let i = 0; i < 6; i++) {
        const base = (i + 1) * 2;
        pairs.push({
            id: i,
            display: `${base}, ${base*2}, ${base*3}, ?`
        });
    }
    return pairs;
}

let flippedCards = [];
let matchedPairs = 0;

function flipCard(card) {
    // No permitir voltear durante la fase de memorización
    if (!memoryGameStarted) {
        return;
    }
    
    if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }
    
    card.classList.add('flipped');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        setTimeout(checkMemoryMatch, 800);
    }
}

function checkMemoryMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.dataset.value === card2.dataset.value;
    
    if (match) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        updateScore(150);
        
        // Retroalimentación mejorada con animación
        const gameArea = document.querySelector('.memory-game');
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'game-feedback correct animated';
        feedbackDiv.innerHTML = `
            <div style="font-size: 1.5rem; font-weight: bold;">¡Par encontrado!</div>
            <div style="font-size: 1rem;">¡Excelente memoria!</div>
            <div style="font-size: 1.2rem; margin-top: 0.5rem; color: #f39c12;">+150 puntos</div>
        `;
        gameArea.appendChild(feedbackDiv);
        
        setTimeout(() => feedbackDiv.remove(), 1500);
        matchedPairs++;
        
        if (matchedPairs === 6) {
            setTimeout(() => {
                document.getElementById('gameBody').innerHTML = renderGameOver(gameScore, '¡Memoria perfecta!');
            }, 500);
        }
    } else {
        // Retroalimentación de error mejorada
        const gameArea = document.querySelector('.memory-game');
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'game-feedback incorrect animated';
        feedbackDiv.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 0.3rem;">🔄</div>
            <div style="font-size: 1.2rem; font-weight: bold;">No coinciden</div>
            <div style="font-size: 0.9rem; opacity: 0.8;">¡Sigue intentando!</div>
        `;
        gameArea.appendChild(feedbackDiv);
        
        setTimeout(() => feedbackDiv.remove(), 1000);
        
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    
    flippedCards = [];
}

// ================================
// JUEGO 3: Pizza Fracciones (Tema 2)
// ================================
function initPizzaGame() {
    const gameBody = document.getElementById('gameBody');
    
    // Reiniciar variables
    targetFraction = { num: 1, den: 4 };
    selectedSlices = 0;
    lastPizzaFraction = null;
    
    gameBody.innerHTML = `
        ${renderGameHeader('Pizza Fracciones')}
        <div class="game-area pizza-game">
            <div class="pizza-challenge" id="pizzaChallenge"></div>
            <div class="pizza-container" id="pizzaContainer"></div>
            <div class="pizza-controls" id="pizzaControls"></div>
        </div>
    `;
    
    startGameTimer(60, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    generatePizzaChallenge();
}

let targetFraction = { num: 1, den: 4 };
let selectedSlices = 0;
let lastPizzaFraction = null;

function generatePizzaChallenge() {
    const denominators = [2, 3, 4, 6, 8];
    let den, num;
    let attempts = 0;
    
    // Asegurar que se genere una fracción diferente a la anterior
    do {
        den = denominators[Math.floor(Math.random() * denominators.length)];
        num = Math.floor(Math.random() * (den - 1)) + 1;
        attempts++;
    } while (lastPizzaFraction && lastPizzaFraction.num === num && lastPizzaFraction.den === den && attempts < 10);
    
    targetFraction = { num, den };
    lastPizzaFraction = { num, den };
    selectedSlices = 0;
    
    document.getElementById('pizzaChallenge').innerHTML = `
        <div class="pizza-target">
            <span>Selecciona</span>
            <div class="fraction-display">
                <span class="numerator">${num}</span>
                <span class="fraction-line"></span>
                <span class="denominator">${den}</span>
            </div>
            <span>de la pizza</span>
        </div>
    `;
    
    // Crear pizza con SVG para mejor visualización
    const size = 280;
    const cx = size / 2;
    const cy = size / 2;
    const radius = 120;
    const innerRadius = 25;
    
    let pizzaSVG = `
        <svg class="pizza-svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
            <defs>
                <filter id="pizzaShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.3"/>
                </filter>
                <radialGradient id="pizzaBase" cx="30%" cy="30%">
                    <stop offset="0%" stop-color="#f5d6a7"/>
                    <stop offset="100%" stop-color="#d4a574"/>
                </radialGradient>
                <radialGradient id="toppingGradient" cx="40%" cy="40%">
                    <stop offset="0%" stop-color="#ff6b6b"/>
                    <stop offset="100%" stop-color="#c0392b"/>
                </radialGradient>
                <radialGradient id="centerGradient" cx="30%" cy="30%">
                    <stop offset="0%" stop-color="#f1c40f"/>
                    <stop offset="100%" stop-color="#d4ac0d"/>
                </radialGradient>
            </defs>
            
            <!-- Base de la pizza -->
            <circle cx="${cx}" cy="${cy}" r="${radius + 10}" fill="url(#pizzaBase)" filter="url(#pizzaShadow)" stroke="#c4956a" stroke-width="3"/>
            
            <!-- Porciones -->
    `;
    
    const sliceAngle = 360 / den;
    
    for (let i = 0; i < den; i++) {
        const startAngle = (i * sliceAngle - 90) * Math.PI / 180;
        const endAngle = ((i + 1) * sliceAngle - 90) * Math.PI / 180;
        
        const x1 = cx + radius * Math.cos(startAngle);
        const y1 = cy + radius * Math.sin(startAngle);
        const x2 = cx + radius * Math.cos(endAngle);
        const y2 = cy + radius * Math.sin(endAngle);
        
        const largeArc = sliceAngle > 180 ? 1 : 0;
        
        const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
        
        pizzaSVG += `
            <path 
                class="pizza-slice-svg" 
                data-index="${i}"
                d="${pathData}"
                fill="transparent"
                stroke="#d4a574"
                stroke-width="2"
                onclick="toggleSliceSVG(this)"
            />
        `;
    }
    
    // Centro de la pizza
    pizzaSVG += `
            <circle cx="${cx}" cy="${cy}" r="${innerRadius}" fill="url(#centerGradient)" stroke="#b8960b" stroke-width="2"/>
        </svg>
    `;
    
    // Contador de selección
    pizzaSVG += `
        <div class="pizza-selection-counter">
            <span id="sliceCounter">0</span> / ${den} seleccionadas
        </div>
    `;
    
    document.getElementById('pizzaContainer').innerHTML = pizzaSVG;
    
    document.getElementById('pizzaControls').innerHTML = `
        <button class="btn btn-primary btn-lg" onclick="checkPizza()">
            <i class="fas fa-check"></i> Verificar
        </button>
    `;
}

function toggleSliceSVG(slice) {
    slice.classList.toggle('selected');
    
    if (slice.classList.contains('selected')) {
        slice.setAttribute('fill', 'url(#toppingGradient)');
        slice.setAttribute('stroke', '#fff');
        slice.setAttribute('stroke-width', '3');
    } else {
        slice.setAttribute('fill', 'transparent');
        slice.setAttribute('stroke', '#d4a574');
        slice.setAttribute('stroke-width', '2');
    }
    
    selectedSlices = document.querySelectorAll('.pizza-slice-svg.selected').length;
    const counter = document.getElementById('sliceCounter');
    if (counter) counter.textContent = selectedSlices;
}

function toggleSlice(slice) {
    slice.classList.toggle('selected');
    selectedSlices = document.querySelectorAll('.pizza-slice.selected').length;
}

function checkPizza() {
    if (selectedSlices === targetFraction.num) {
        updateScore(100);
        
        // Retroalimentación rápida para aciertos
        showQuickFeedback(`¡Pizza Perfecta! ${selectedSlices}/${targetFraction.den}`, 100);
        
        // Continuar rápidamente
        setTimeout(generatePizzaChallenge, 800);
    } else {
        // Retroalimentación de error mejorada con modal
        const difference = selectedSlices - targetFraction.num;
        let hint = '';
        if (difference > 0) {
            hint = `Seleccionaste ${Math.abs(difference)} ${Math.abs(difference) === 1 ? 'porción' : 'porciones'} de más.`;
        } else {
            hint = `Te faltan ${Math.abs(difference)} ${Math.abs(difference) === 1 ? 'porción' : 'porciones'} por seleccionar.`;
        }
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡Casi lo logras!',
            message: hint,
            userAnswer: `${selectedSlices} porciones`,
            correctAnswer: `${targetFraction.num} porciones`,
            explanation: `La fracción <strong>${targetFraction.num}/${targetFraction.den}</strong> significa que debes seleccionar <strong>${targetFraction.num}</strong> partes de las <strong>${targetFraction.den}</strong> partes totales de la pizza. El numerador (${targetFraction.num}) te dice cuántas seleccionar.`,
            autoClose: false,
            onContinue: generatePizzaChallenge
        });
    }
}

// ================================
// JUEGO 4: Fracciones Pop (Tema 2)
// Versión no-violenta: burbujas coloridas para niños con explicaciones
// ================================
function initFractionPop() {
    const gameBody = document.getElementById('gameBody');

    gameBody.innerHTML = `
        ${renderGameHeader('Fracciones Pop')}
        <div class="game-area pop-game">
            <div class="pop-target" id="popTarget">
                <p>Haz pop a la fracción:</p>
                <div class="fraction-large" id="popTargetFraction"></div>
                <div id="popExplanation" style="color:var(--gray-600); margin-top:8px"></div>
            </div>
            <div class="pop-field" id="popField"></div>
        </div>
    `;

    startGameTimer(45, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });

    generateFractionPop();
}

let popTarget = null;

// Convierte una fracción (numerador/denominador) a texto en español
function fractionToWords(n, d) {
    const numeradores = {
        1: 'un', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco',
        6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve', 10: 'diez'
    };
    const denominadoresSingular = {
        2: 'medio', 3: 'tercio', 4: 'cuarto', 5: 'quinto',
        6: 'sexto', 7: 'séptimo', 8: 'octavo', 9: 'noveno', 10: 'décimo'
    };
    const denominadoresPlural = {
        2: 'medios', 3: 'tercios', 4: 'cuartos', 5: 'quintos',
        6: 'sextos', 7: 'séptimos', 8: 'octavos', 9: 'novenos', 10: 'décimos'
    };
    
    const numText = numeradores[n] || n.toString();
    const denText = n === 1 ? denominadoresSingular[d] : denominadoresPlural[d];
    
    return `${numText} ${denText || d}`;
}

function generateFractionPop() {
    // Lista ampliada de fracciones para mayor variedad
    const allFractions = [
        { n:1,d:2 }, { n:1,d:3 }, { n:1,d:4 }, { n:1,d:5 }, { n:1,d:6 }, { n:1,d:8 },
        { n:2,d:3 }, { n:2,d:5 }, { n:2,d:7 },
        { n:3,d:4 }, { n:3,d:5 }, { n:3,d:8 },
        { n:4,d:5 }, { n:5,d:6 }, { n:5,d:8 },
        { n:7,d:8 }, { n:3,d:7 }, { n:4,d:9 }
    ];

    // Seleccionar fracción objetivo aleatoria
    const idx = Math.floor(Math.random() * allFractions.length);
    popTarget = allFractions[idx];

    const targetEl = document.getElementById('popTargetFraction');
    targetEl.textContent = fractionToWords(popTarget.n, popTarget.d);

    const field = document.getElementById('popField');
    field.innerHTML = '';

    // Seleccionar 5 fracciones aleatorias diferentes a la correcta
    const otherFractions = allFractions.filter(f => !(f.n === popTarget.n && f.d === popTarget.d));
    const shuffledOthers = otherFractions.sort(() => Math.random() - 0.5).slice(0, 5);
    
    // Crear array con la correcta + 5 incorrectas y mezclar
    const choices = [popTarget, ...shuffledOthers].sort(() => Math.random() - 0.5);

    choices.forEach((f, i) => {
        const bubble = document.createElement('div');
        bubble.className = 'pop-bubble';
        bubble.style.background = `hsl(${Math.random()*360} , 70% , 60%)`;
        bubble.dataset.n = f.n;
        bubble.dataset.d = f.d;
        bubble.innerHTML = `<div class="fraction-small"><span class="numerator">${f.n}</span><span class="fraction-line"></span><span class="denominator">${f.d}</span></div>`;
        bubble.onclick = () => popBubble(bubble);
        field.appendChild(bubble);
    });
}

function popBubble(bubble) {
    const n = parseInt(bubble.dataset.n,10);
    const d = parseInt(bubble.dataset.d,10);
    const userVal = n / d;
    const targetVal = popTarget.n / popTarget.d;

    bubble.classList.add('popped');
    setTimeout(() => bubble.remove(), 300);

    if (Math.abs(userVal - targetVal) < 0.0001) {
        updateScore(100);
        
        // Retroalimentación rápida para aciertos
        showQuickFeedback(`¡Correcto! ${n}/${d}`, 100);
        
        // Continuar rápidamente
        setTimeout(generateFractionPop, 800);
    } else {
        updateScore(-10);
        
        // Retroalimentación de error mejorada
        const comparison = userVal > targetVal ? 'mayor' : 'menor';
        const targetWords = fractionToWords(popTarget.n, popTarget.d);
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡No es esa!',
            message: `La fracción ${n}/${d} es <strong>${comparison}</strong> que la que buscamos.`,
            userAnswer: `${n}/${d}`,
            correctAnswer: `${popTarget.n}/${popTarget.d}`,
            explanation: `Buscamos "${targetWords}" que se escribe como <strong>${popTarget.n}/${popTarget.d}</strong>. Compara: ${n}/${d} = ${(userVal * 100).toFixed(0)}% mientras que ${popTarget.n}/${popTarget.d} = ${(targetVal * 100).toFixed(0)}% del total.`,
            points: -10,
            autoClose: false,
            onContinue: generateFractionPop
        });
    }
}

// ================================
// JUEGO 5: Match Equivalentes (Tema 3)
// ================================
function initMatchingGame() {
    const gameBody = document.getElementById('gameBody');
    
    // Reiniciar contadores
    matchedCount = 0;
    selectedMatch = { left: null, right: null };
    
    const equivalentPairs = [
        { left: '1/2', right: '2/4' },
        { left: '2/3', right: '4/6' },
        { left: '1/4', right: '2/8' },
        { left: '3/4', right: '6/8' },
        { left: '1/3', right: '2/6' }
    ];
    
    const leftItems = equivalentPairs.map(p => p.left).sort(() => Math.random() - 0.5);
    const rightItems = equivalentPairs.map(p => p.right).sort(() => Math.random() - 0.5);
    
    gameBody.innerHTML = `
        ${renderGameHeader('Match Equivalentes')}
        <div class="game-area matching-game">
            <p class="matching-instructions">Conecta cada fracción con su equivalente</p>
            <div class="matching-container">
                <div class="matching-column left-column" id="leftColumn">
                    ${leftItems.map((item, i) => `
                        <div class="matching-item" data-value="${item}" data-pair="${equivalentPairs.find(p => p.left === item).right}" onclick="selectMatchItem(this, 'left')">
                            ${formatFraction(item)}
                        </div>
                    `).join('')}
                </div>
                <svg class="matching-lines" id="matchingLines"></svg>
                <div class="matching-column right-column" id="rightColumn">
                    ${rightItems.map((item, i) => `
                        <div class="matching-item" data-value="${item}" onclick="selectMatchItem(this, 'right')">
                            ${formatFraction(item)}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    startGameTimer(90, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
}

let selectedMatch = { left: null, right: null };
let matchedCount = 0;

function formatFraction(str) {
    const [num, den] = str.split('/');
    return `<span class="numerator">${num}</span><span class="fraction-line"></span><span class="denominator">${den}</span>`;
}

function selectMatchItem(item, side) {
    if (item.classList.contains('matched')) return;
    
    // Deseleccionar anterior del mismo lado
    document.querySelectorAll(`.${side}-column .matching-item.selected`).forEach(el => el.classList.remove('selected'));
    
    item.classList.add('selected');
    selectedMatch[side] = item;
    
    // Verificar si hay match
    if (selectedMatch.left && selectedMatch.right) {
        checkMatch();
    }
}

function checkMatch() {
    const leftValue = selectedMatch.left.dataset.value;
    const expectedRight = selectedMatch.left.dataset.pair;
    const rightValue = selectedMatch.right.dataset.value;
    
    if (expectedRight === rightValue) {
        selectedMatch.left.classList.add('matched');
        selectedMatch.right.classList.add('matched');
        updateScore(200);
        
        // Calcular factor de equivalencia
        const [leftNum, leftDen] = leftValue.split('/').map(Number);
        const [rightNum, rightDen] = rightValue.split('/').map(Number);
        const factor = rightNum / leftNum;
        
        // Retroalimentación rápida para aciertos
        showQuickFeedback(`¡Par encontrado! ${leftValue} = ${rightValue}`, 200);
        matchedCount++;
        
        if (matchedCount === 5) {
            setTimeout(() => {
                document.getElementById('gameBody').innerHTML = renderGameOver(gameScore, '¡Todas las parejas!');
            }, 1000);
        }
    } else {
        // Calcular por qué no son equivalentes
        const [leftNum, leftDen] = leftValue.split('/').map(Number);
        const [rightNum, rightDen] = rightValue.split('/').map(Number);
        const leftDecimal = (leftNum / leftDen * 100).toFixed(0);
        const rightDecimal = (rightNum / rightDen * 100).toFixed(0);
        
        // Guardar referencias antes de mostrar el modal
        const leftItem = selectedMatch.left;
        const rightItem = selectedMatch.right;
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡No son equivalentes!',
            message: `Estas dos fracciones representan valores diferentes.`,
            userAnswer: `${leftValue} ↔ ${rightValue}`,
            correctAnswer: `${leftValue} ↔ ${expectedRight}`,
            explanation: `${leftValue} = ${leftDecimal}% del total, mientras que ${rightValue} = ${rightDecimal}% del total. Para ser equivalentes, ambas deben representar el mismo porcentaje.`,
            autoClose: false,
            onContinue: () => {
                leftItem.classList.remove('selected', 'matched');
                rightItem.classList.remove('selected', 'matched');
            }
        });
    }
    
    selectedMatch = { left: null, right: null };
}

// ================================
// JUEGO 6: Escalera de Fracciones (Tema 3)
// ================================
function initLadderGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Escalera de Fracciones')}
        <div class="game-area ladder-game">
            <div class="ladder-layout">
                <div class="ladder-left">
                    <div class="ladder-container" id="ladderContainer"></div>
                </div>
                <div class="ladder-right">
                    <div class="ladder-question" id="ladderQuestion"></div>
                </div>
            </div>
        </div>
    `;
    
    startGameTimer(90, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    initLadder();
}

let ladderPosition = 0;

function initLadder() {
    ladderPosition = 0;
    usedLadderQuestions = [];
    renderLadder();
    generateLadderQuestion();
}

function renderLadder() {
    const container = document.getElementById('ladderContainer');
    let ladderHTML = '<div class="ladder">';
    
    for (let i = 5; i >= 0; i--) {
        const isActive = i === ladderPosition;
        const isPassed = i < ladderPosition;
        ladderHTML += `
            <div class="ladder-step ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}">
                <div class="ladder-rung"></div>
                <div class="ladder-player">${isActive ? '<i class="fas fa-child"></i>' : ''}</div>
                ${i === 5 ? '<div class="ladder-goal"><i class="fas fa-trophy"></i></div>' : ''}
            </div>
        `;
    }
    
    ladderHTML += '</div>';
    container.innerHTML = ladderHTML;
}

let usedLadderQuestions = [];

function generateLadderQuestion() {
    const simplifications = [
        // Simplificaciones a 1/2
        { original: '2/4', simplified: '1/2', options: ['1/2', '2/3', '1/4'], divisor: 2 },
        { original: '3/6', simplified: '1/2', options: ['1/2', '1/3', '2/3'], divisor: 3 },
        { original: '4/8', simplified: '1/2', options: ['1/2', '1/4', '2/4'], divisor: 4 },
        { original: '5/10', simplified: '1/2', options: ['1/2', '1/5', '2/5'], divisor: 5 },
        { original: '6/12', simplified: '1/2', options: ['1/2', '1/6', '3/4'], divisor: 6 },
        // Simplificaciones a 1/3
        { original: '2/6', simplified: '1/3', options: ['1/3', '1/2', '2/3'], divisor: 2 },
        { original: '3/9', simplified: '1/3', options: ['1/3', '1/9', '3/9'], divisor: 3 },
        { original: '4/12', simplified: '1/3', options: ['1/3', '1/4', '2/6'], divisor: 4 },
        // Simplificaciones a 2/3
        { original: '4/6', simplified: '2/3', options: ['2/3', '1/2', '4/5'], divisor: 2 },
        { original: '6/9', simplified: '2/3', options: ['2/3', '3/4', '1/3'], divisor: 3 },
        { original: '8/12', simplified: '2/3', options: ['2/3', '4/6', '1/2'], divisor: 4 },
        // Simplificaciones a 3/4
        { original: '6/8', simplified: '3/4', options: ['3/4', '2/3', '1/2'], divisor: 2 },
        { original: '9/12', simplified: '3/4', options: ['3/4', '2/3', '4/5'], divisor: 3 },
        // Simplificaciones a 1/4
        { original: '2/8', simplified: '1/4', options: ['1/4', '1/2', '2/4'], divisor: 2 },
        { original: '3/12', simplified: '1/4', options: ['1/4', '1/3', '3/6'], divisor: 3 },
        // Simplificaciones a 1/5
        { original: '2/10', simplified: '1/5', options: ['1/5', '1/2', '2/5'], divisor: 2 },
        { original: '3/15', simplified: '1/5', options: ['1/5', '1/3', '3/5'], divisor: 3 },
        // Simplificaciones a 2/5
        { original: '4/10', simplified: '2/5', options: ['2/5', '1/2', '4/5'], divisor: 2 },
        { original: '6/15', simplified: '2/5', options: ['2/5', '2/3', '3/5'], divisor: 3 },
        // Simplificaciones a 3/5
        { original: '6/10', simplified: '3/5', options: ['3/5', '1/2', '2/5'], divisor: 2 },
        { original: '9/15', simplified: '3/5', options: ['3/5', '3/4', '2/3'], divisor: 3 },
        // Simplificaciones a 4/5
        { original: '8/10', simplified: '4/5', options: ['4/5', '3/4', '2/3'], divisor: 2 },
        // Más variadas
        { original: '10/12', simplified: '5/6', options: ['5/6', '3/4', '2/3'], divisor: 2 },
        { original: '4/16', simplified: '1/4', options: ['1/4', '1/8', '2/8'], divisor: 4 },
        { original: '6/18', simplified: '1/3', options: ['1/3', '2/6', '1/6'], divisor: 6 }
    ];
    
    // Filtrar las preguntas ya usadas
    let availableQuestions = simplifications.filter(q => !usedLadderQuestions.includes(q.original));
    
    // Si se agotaron las preguntas, reiniciar el pool
    if (availableQuestions.length === 0) {
        usedLadderQuestions = [];
        availableQuestions = simplifications;
    }
    
    const question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    usedLadderQuestions.push(question.original);
    
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    document.getElementById('ladderQuestion').innerHTML = `
        <div class="ladder-q-text">
            <p>Simplifica la fracción:</p>
            <div class="fraction-large">${formatFraction(question.original)}</div>
        </div>
        <div class="ladder-options">
            ${shuffledOptions.map(opt => `
                <button class="ladder-option" onclick="checkLadderAnswer('${opt}', '${question.simplified}')">
                    ${formatFraction(opt)}
                </button>
            `).join('')}
        </div>
    `;
}

function checkLadderAnswer(answer, correct) {
    // Encontrar la pregunta actual para obtener la fracción original
    const simplifications = [
        { original: '2/4', simplified: '1/2', divisor: 2 },
        { original: '3/6', simplified: '1/2', divisor: 3 },
        { original: '4/8', simplified: '1/2', divisor: 4 },
        { original: '5/10', simplified: '1/2', divisor: 5 },
        { original: '6/12', simplified: '1/2', divisor: 6 },
        { original: '2/6', simplified: '1/3', divisor: 2 },
        { original: '3/9', simplified: '1/3', divisor: 3 },
        { original: '4/12', simplified: '1/3', divisor: 4 },
        { original: '4/6', simplified: '2/3', divisor: 2 },
        { original: '6/9', simplified: '2/3', divisor: 3 },
        { original: '8/12', simplified: '2/3', divisor: 4 },
        { original: '6/8', simplified: '3/4', divisor: 2 },
        { original: '9/12', simplified: '3/4', divisor: 3 },
        { original: '2/8', simplified: '1/4', divisor: 2 },
        { original: '3/12', simplified: '1/4', divisor: 3 },
        { original: '2/10', simplified: '1/5', divisor: 2 },
        { original: '3/15', simplified: '1/5', divisor: 3 },
        { original: '4/10', simplified: '2/5', divisor: 2 },
        { original: '6/15', simplified: '2/5', divisor: 3 },
        { original: '6/10', simplified: '3/5', divisor: 2 },
        { original: '9/15', simplified: '3/5', divisor: 3 },
        { original: '8/10', simplified: '4/5', divisor: 2 },
        { original: '10/12', simplified: '5/6', divisor: 2 },
        { original: '4/16', simplified: '1/4', divisor: 4 },
        { original: '6/18', simplified: '1/3', divisor: 6 }
    ];
    const currentQ = simplifications.find(s => s.simplified === correct);
    
    if (answer === correct) {
        ladderPosition++;
        updateScore(200);
        renderLadder();
        
        showQuickFeedback('¡Subes un escalón! 🪜', 200);
        
        setTimeout(() => {
            if (ladderPosition >= 5) {
                document.getElementById('gameBody').innerHTML = renderGameOver(gameScore, '¡Llegaste a la cima!');
            } else {
                generateLadderQuestion();
            }
        }, 800);
    } else {
        const [ansNum, ansDen] = answer.split('/').map(Number);
        const [corrNum, corrDen] = correct.split('/').map(Number);
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡Esa no es la simplificación!',
            message: `${answer} no es la forma más simple de ${currentQ?.original || 'esta fracción'}.`,
            userAnswer: answer,
            correctAnswer: correct,
            explanation: `Para simplificar una fracción, divide el numerador y el denominador entre el mismo número (su MCD). ${currentQ?.original || 'La fracción original'} se simplifica a ${correct} dividiendo entre ${currentQ?.divisor || 'su divisor común'}.`,
            autoClose: false,
            onContinue: generateLadderQuestion
        });
    }
}

// ================================
// JUEGO 7: Orden Visual (Tema 4) - Versión mejorada y atractiva
// ================================
function initSortingGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Orden Visual')}
        <div class="game-area sorting-game">
            <div class="sorting-visual-header">
                <div class="sorting-emoji"></div>
                <p class="sorting-instructions">Haz clic en las fracciones de <strong>MENOR</strong> a <strong>MAYOR</strong></p>
            </div>
            <div class="sorting-visual-container" id="sortingContainer"></div>
            <div class="sorting-selected" id="sortingSelected">
                <p>Tu orden: <span id="selectedOrder">-</span></p>
            </div>
            <div class="sorting-buttons">
                <button class="btn btn-outline" onclick="resetSortingSelection()">
                    <i class="fas fa-undo"></i> Reiniciar
                </button>
                <button class="btn btn-primary btn-lg" onclick="checkSorting()">
                    <i class="fas fa-check"></i> Verificar
                </button>
            </div>
            <div id="sortingFeedback" class="sorting-feedback"></div>
        </div>
    `;
    
    startGameTimer(60, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    generateSortingRound();
}

let correctOrder = [];
let userSelectionOrder = [];
const cardColors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];

function generateSortingRound() {
    userSelectionOrder = [];
    const fractionSets = [
        [{ num: 1, den: 4 }, { num: 1, den: 2 }, { num: 3, den: 4 }],
        [{ num: 1, den: 3 }, { num: 1, den: 2 }, { num: 2, den: 3 }],
        [{ num: 1, den: 5 }, { num: 2, den: 5 }, { num: 4, den: 5 }],
        [{ num: 1, den: 6 }, { num: 1, den: 3 }, { num: 1, den: 2 }],
        [{ num: 1, den: 8 }, { num: 1, den: 4 }, { num: 3, den: 8 }]
    ];
    
    const set = fractionSets[Math.floor(Math.random() * fractionSets.length)];
    correctOrder = set.map(f => `${f.num}/${f.den}`);
    
    const shuffled = [...set].sort(() => Math.random() - 0.5);
    
    const container = document.getElementById('sortingContainer');
    container.innerHTML = shuffled.map((frac, i) => `
        <div class="sorting-visual-card" 
             data-value="${frac.num}/${frac.den}"
             data-decimal="${frac.num/frac.den}"
             style="background: ${cardColors[i % cardColors.length]}"
             onclick="selectSortingCard(this)">
            <div class="sorting-card-fraction">
                <span class="numerator">${frac.num}</span>
                <span class="fraction-line"></span>
                <span class="denominator">${frac.den}</span>
            </div>
            <div class="sorting-card-order"></div>
        </div>
    `).join('');
    
    document.getElementById('selectedOrder').textContent = '-';
    document.getElementById('sortingFeedback').innerHTML = '';
}

function selectSortingCard(card) {
    if (card.classList.contains('selected')) return;
    
    card.classList.add('selected');
    const orderNum = userSelectionOrder.length + 1;
    card.querySelector('.sorting-card-order').textContent = orderNum;
    userSelectionOrder.push(card.dataset.value);
    
    document.getElementById('selectedOrder').textContent = userSelectionOrder.join(' → ');
}

function resetSortingSelection() {
    userSelectionOrder = [];
    document.querySelectorAll('.sorting-visual-card').forEach(card => {
        card.classList.remove('selected', 'correct', 'incorrect');
        card.querySelector('.sorting-card-order').textContent = '';
    });
    document.getElementById('selectedOrder').textContent = '-';
    document.getElementById('sortingFeedback').innerHTML = '';
}

function checkSorting() {
    if (userSelectionOrder.length !== correctOrder.length) {
        showFeedbackModal({
            isCorrect: false,
            title: '¡Faltan fracciones!',
            message: `Has seleccionado ${userSelectionOrder.length} de ${correctOrder.length} fracciones.`,
            explanation: 'Debes hacer clic en TODAS las fracciones en orden de menor a mayor antes de verificar.',
            autoClose: false,
            onContinue: () => {}
        });
        return;
    }
    
    const isCorrect = JSON.stringify(userSelectionOrder) === JSON.stringify(correctOrder);
    const feedbackEl = document.getElementById('sortingFeedback');
    
    if (isCorrect) {
        updateScore(150);
        document.querySelectorAll('.sorting-visual-card').forEach(c => c.classList.add('correct'));
        feedbackEl.innerHTML = `<span class="feedback-correct">✓ ¡Excelente! El orden correcto es: ${correctOrder.join(' < ')}</span>`;
        
        // Calcular los valores decimales para explicar
        const fractionValues = correctOrder.map(f => {
            const [n, d] = f.split('/').map(Number);
            return { frac: f, decimal: (n/d*100).toFixed(0) };
        });
        
        showQuickFeedback('¡Orden perfecto! 📊', 150);
        
        setTimeout(() => {
            generateSortingRound();
        }, 800);
    } else {
        document.querySelectorAll('.sorting-visual-card').forEach(c => c.classList.add('incorrect'));
        
        // Calcular los valores decimales para explicar
        const fractionValues = correctOrder.map(f => {
            const [n, d] = f.split('/').map(Number);
            return { frac: f, decimal: (n/d*100).toFixed(0) };
        });
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡El orden no es correcto!',
            message: `Tu orden: ${userSelectionOrder.join(' < ')}`,
            userAnswer: userSelectionOrder.join(' < '),
            correctAnswer: correctOrder.join(' < '),
            explanation: `Tip: Convierte a porcentajes para comparar fácilmente. ${fractionValues.map(v => `${v.frac} = ${v.decimal}%`).join(', ')}. Ordena de menor a mayor porcentaje.`,
            autoClose: false,
            onContinue: resetSortingSelection
        });
    }
}

// ================================
// JUEGO 8: Batalla Mayor/Menor (Tema 4) - Con retroalimentación
// ================================
function initComparisonGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Batalla Mayor/Menor')}
        <div class="game-area comparison-game">
            <div class="comparison-container" id="comparisonContainer"></div>
            <div class="comparison-feedback" id="comparisonFeedback"></div>
        </div>
    `;
    
    startGameTimer(45, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    generateComparison();
}

let comparisonFrac1 = null;
let comparisonFrac2 = null;
let comparisonCorrectSide = '';

function generateComparison() {
    const fractions = [
        { num: 1, den: 2, value: 0.5 },
        { num: 1, den: 3, value: 0.33 },
        { num: 1, den: 4, value: 0.25 },
        { num: 2, den: 3, value: 0.67 },
        { num: 3, den: 4, value: 0.75 },
        { num: 2, den: 5, value: 0.4 },
        { num: 3, den: 5, value: 0.6 }
    ];
    
    const shuffled = [...fractions].sort(() => Math.random() - 0.5);
    comparisonFrac1 = shuffled[0];
    comparisonFrac2 = shuffled[1];
    
    comparisonCorrectSide = comparisonFrac1.value > comparisonFrac2.value ? 'left' : 'right';
    
    document.getElementById('comparisonContainer').innerHTML = `
        <p class="comparison-question">¿Cuál fracción es <strong>MAYOR</strong>?</p>
        <div class="comparison-cards">
            <div class="comparison-card" onclick="checkComparison('left')">
                <div class="fraction-large">
                    ${formatFraction(`${comparisonFrac1.num}/${comparisonFrac1.den}`)}
                </div>
            </div>
            <div class="comparison-vs">VS</div>
            <div class="comparison-card" onclick="checkComparison('right')">
                <div class="fraction-large">
                    ${formatFraction(`${comparisonFrac2.num}/${comparisonFrac2.den}`)}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('comparisonFeedback').innerHTML = '';
}

function checkComparison(choice) {
    const feedbackEl = document.getElementById('comparisonFeedback');
    const f1 = comparisonFrac1;
    const f2 = comparisonFrac2;
    
    const winner = comparisonCorrectSide === 'left' ? f1 : f2;
    const loser = comparisonCorrectSide === 'left' ? f2 : f1;
    
    if (choice === comparisonCorrectSide) {
        updateScore(80);
        
        showQuickFeedback('¡Correcto! ⚔️', 80);
        
        setTimeout(() => {
            generateComparison();
        }, 800);
    } else {
        updateScore(-30);
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡Esa no es la mayor!',
            message: `Elegiste <strong>${choice === 'left' ? f1.num + '/' + f1.den : f2.num + '/' + f2.den}</strong>, pero la mayor es <strong>${winner.num}/${winner.den}</strong>`,
            userAnswer: `${choice === 'left' ? f1.num + '/' + f1.den : f2.num + '/' + f2.den}`,
            correctAnswer: `${winner.num}/${winner.den}`,
            explanation: `Compara los decimales: ${winner.num}/${winner.den} = ${winner.value.toFixed(2)} y ${loser.num}/${loser.den} = ${loser.value.toFixed(2)}. El número decimal más grande indica la fracción mayor. También puedes cruzar: ${f1.num}×${f2.den} = ${f1.num * f2.den} vs ${f2.num}×${f1.den} = ${f2.num * f1.den}.`,
            points: -30,
            autoClose: false,
            onContinue: generateComparison
        });
    }
}

// ================================
// JUEGO 9: Atrapa Múltiplos (Tema 5) - Versión corregida
// ================================
let catcherInterval = null;

// ================================
// JUEGO 9: Múltiplos Match (Tema 5)
// ================================
function initCatcherGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Múltiplos Match')}
        <div class="game-area multiples-match-game">
            <div class="multiples-layout">
                <div class="multiples-left">
                    <div class="multiples-header">
                        <div class="multiples-instruction">
                            <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">Selecciona todos los múltiplos de:</p>
                            <div class="number-target" id="multipleTarget" style="font-size: 3.5rem; font-weight: 900; color: #fff; background: linear-gradient(135deg, #667eea, #764ba2); padding: 1rem 2rem; border-radius: 20px; display: inline-block; box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);"></div>
                        </div>
                        <div class="multiples-progress" id="multiplesProgress">
                            <div class="progress-bar">
                                <div class="progress-fill" id="multiplesProgressFill" style="width:0%"></div>
                            </div>
                            <div class="progress-text" id="multiplesProgressText">Ronda 1 de 6</div>
                        </div>
                    </div>
                    <div class="multiples-grid" id="multiplesGrid"></div>
                </div>
                <div class="multiples-right">
                    <div class="multiples-actions">
                        <button class="btn btn-primary btn-lg" id="checkMultiplesBtn">
                            <i class="fas fa-check-circle"></i> Verificar Respuesta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    startGameTimer(60, () => {
        gameBody.innerHTML = renderGameOver(gameScore, gameScore >= 300 ? "¡Excelente!" : "¡Buen intento!");
    });
    
    currentRound = 1;
    totalRounds = 6;
    updateMultiplesProgress();
    generateMultiplesRound();
}

let currentMultipleBase = 0;
let selectedBubbles = [];
let correctMultiples = [];
let currentRound = 1;
let totalRounds = 6;

function generateMultiplesRound() {
    // Número base para los múltiplos (2-10)
    currentMultipleBase = Math.floor(Math.random() * 7) + 2;
    selectedBubbles = [];
    correctMultiples = [];
    
    document.getElementById('multipleTarget').textContent = currentMultipleBase;
    const expl = document.getElementById('multipleExplanation');
    if (expl) expl.textContent = '';
    
    // Generar números únicos de 2 cifras (3 múltiplos correctos + 3 no múltiplos)
    const numbers = [];
    const used = new Set();
    const minTwoDigits = 10;
    const maxTwoDigits = 99;
    
    // Rango de factores para que el múltiplo sea de 2 cifras
    const minFactor = Math.ceil(minTwoDigits / currentMultipleBase);
    const maxFactor = Math.floor(maxTwoDigits / currentMultipleBase);
    const availableFactors = [];
    for (let f = minFactor; f <= maxFactor; f++) availableFactors.push(f);
    availableFactors.sort(() => Math.random() - 0.5);
    
    // Añadir 3 múltiplos correctos únicos (2 cifras)
    let i = 0;
    while (numbers.filter(n => n.isMultiple).length < 3 && i < availableFactors.length) {
        const multiple = currentMultipleBase * availableFactors[i];
        if (!used.has(multiple)) {
            used.add(multiple);
            numbers.push({ value: multiple, isMultiple: true });
        }
        i++;
    }
    
    // Añadir 3 números que NO son múltiplos, únicos (2 cifras)
    let attempts = 0;
    while (numbers.filter(n => !n.isMultiple).length < 3 && attempts < 1000) {
        const num = Math.floor(Math.random() * (maxTwoDigits - minTwoDigits + 1)) + minTwoDigits;
        if (num % currentMultipleBase !== 0 && !used.has(num)) {
            used.add(num);
            numbers.push({ value: num, isMultiple: false });
        }
        attempts++;
    }
    
    // Asegurar que la lista de correctos coincide con lo que realmente aparece
    correctMultiples = numbers.filter(n => n.isMultiple).map(n => n.value);
    
    // Mezclar y crear tarjetas (máximo 6)
    numbers.sort(() => Math.random() - 0.5);
    const limited = numbers.slice(0, 6);
    
    const grid = document.getElementById('multiplesGrid');
    grid.innerHTML = '';
    
    limited.forEach(numObj => {
        const card = document.createElement('div');
        card.className = 'multiple-card';
        card.dataset.value = numObj.value;
        card.dataset.isMultiple = numObj.isMultiple;
        card.innerHTML = `
            <div class="card-inner">
                <span class="card-number">${numObj.value}</span>
                <div class="card-check"><i class="fas fa-check"></i></div>
            </div>
        `;
        card.onclick = () => toggleMultipleCard(card);
        grid.appendChild(card);
    });
    
    // Ajustar correctMultiples a los mostrados
    correctMultiples = limited.filter(n => n.isMultiple).map(n => n.value);
    
    // Configurar botón de verificar
    document.getElementById('checkMultiplesBtn').onclick = checkMultiplesAnswer;
}

function toggleMultipleCard(card) {
    const value = parseInt(card.dataset.value);
    
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        selectedBubbles = selectedBubbles.filter(v => v !== value);
    } else {
        card.classList.add('selected');
        selectedBubbles.push(value);
    }
}

function checkMultiplesAnswer() {
    // Deshabilitar botón
    const btn = document.getElementById('checkMultiplesBtn');
    btn.disabled = true;
    btn.style.opacity = '0.5';
    
    // Verificar si seleccionó todos los correctos
    const allCorrectSelected = correctMultiples.every(m => selectedBubbles.includes(m));
    const noIncorrectSelected = selectedBubbles.every(s => correctMultiples.includes(s));
    
    if (allCorrectSelected && noIncorrectSelected) {
        updateScore(150);
        
        // Generar ejemplos de cálculo
        const examples = correctMultiples.slice(0, 3).map(m => `${currentMultipleBase} × ${m/currentMultipleBase} = ${m}`).join(', ');
        
        showQuickFeedback('¡Perfecto! ✓', 150);
        
        setTimeout(() => {
            advanceRoundOrScore();
            btn.disabled = false;
            btn.style.opacity = '';
        }, 800);
    } else {
        const missing = correctMultiples.filter(m => !selectedBubbles.includes(m));
        const wrong = selectedBubbles.filter(s => !correctMultiples.includes(s));
        
        let message = '';
        if (!allCorrectSelected && missing.length > 0) {
            message = `Te faltaron múltiplos: <strong>${missing.join(', ')}</strong>`;
        }
        if (wrong.length > 0) {
            if (message) message += '<br>';
            message += `<strong>${wrong.join(', ')}</strong> no ${wrong.length === 1 ? 'es múltiplo' : 'son múltiplos'} de ${currentMultipleBase}`;
        }
        
        // Generar explicación detallada
        let explanationParts = [];
        if (wrong.length > 0) {
            wrong.forEach(w => {
                const remainder = w % currentMultipleBase;
                explanationParts.push(`${w} ÷ ${currentMultipleBase} = ${Math.floor(w/currentMultipleBase)} con resto ${remainder}`);
            });
        }
        const explanation = `Los múltiplos de ${currentMultipleBase} son: ${correctMultiples.join(', ')}. Para verificar si un número es múltiplo, divídelo entre ${currentMultipleBase}. Si el resto es 0, es múltiplo. ${explanationParts.length > 0 ? 'Por ejemplo: ' + explanationParts.join('; ') + ' (no son múltiplos porque tienen resto).' : ''}`;
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡Revisa tu selección!',
            message: message,
            correctAnswer: `Múltiplos de ${currentMultipleBase}: ${correctMultiples.join(', ')}`,
            explanation: explanation,
            autoClose: false,
            onContinue: () => {
                advanceRoundOrScore();
                btn.disabled = false;
                btn.style.opacity = '';
            }
        });
    }
}

function updateMultiplesProgress() {
    const fill = document.getElementById('multiplesProgressFill');
    const text = document.getElementById('multiplesProgressText');
    if (!fill || !text) return;
    const pct = Math.round((currentRound - 1) / totalRounds * 100);
    fill.style.width = pct + '%';
    text.textContent = `Ronda ${currentRound} de ${totalRounds}`;
}

function advanceRoundOrScore() {
    if (currentRound < totalRounds) {
        currentRound++;
        updateMultiplesProgress();
        generateMultiplesRound();
    } else {
        updateScore(200);
        const gameArea = document.querySelector('.multiples-match-game');
        const note = document.createElement('div');
        note.className = 'game-feedback correct animated';
        note.innerHTML = '<div style="font-size:1.2rem;font-weight:700;">Rondas completadas</div><div>Bonus +200</div>';
        gameArea.appendChild(note);
        setTimeout(() => note.remove(), 2000);
        currentRound = 1;
        updateMultiplesProgress();
        generateMultiplesRound();
    }
}

// ================================
// JUEGO 10: Puzzle Divisores (Tema 5)
// ================================
function initPuzzleGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Puzzle Divisores')}
        <div class="game-area puzzle-game">
            <div class="puzzle-number" id="puzzleNumber"></div>
            <div class="puzzle-grid" id="puzzleGrid"></div>
            <button class="btn btn-primary" onclick="checkPuzzle()" id="checkPuzzleBtn">
                <i class="fas fa-check"></i> Verificar
            </button>
        </div>
    `;
    
    startGameTimer(90, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    generatePuzzle();
}

let puzzleTarget = 12;
let puzzleDivisors = [];

function generatePuzzle() {
    const numbers = [12, 18, 20, 24, 30];
    puzzleTarget = numbers[Math.floor(Math.random() * numbers.length)];
    
    // Calcular divisores
    puzzleDivisors = [];
    for (let i = 1; i <= puzzleTarget; i++) {
        if (puzzleTarget % i === 0) puzzleDivisors.push(i);
    }
    
    // Crear números mezclados (divisores + no divisores)
    const allNumbers = [...puzzleDivisors];
    while (allNumbers.length < 12) {
        const random = Math.floor(Math.random() * 30) + 1;
        if (!allNumbers.includes(random) && puzzleTarget % random !== 0) {
            allNumbers.push(random);
        }
    }
    
    allNumbers.sort(() => Math.random() - 0.5);
    
    document.getElementById('puzzleNumber').innerHTML = `
        <p>Encuentra todos los divisores de:</p>
        <strong>${puzzleTarget}</strong>
    `;
    
    document.getElementById('puzzleGrid').innerHTML = allNumbers.map(num => `
        <div class="puzzle-piece" data-value="${num}" onclick="togglePuzzlePiece(this)">
            ${num}
        </div>
    `).join('');
}

function togglePuzzlePiece(piece) {
    piece.classList.toggle('selected');
}

function checkPuzzle() {
    const selected = Array.from(document.querySelectorAll('.puzzle-piece.selected')).map(p => parseInt(p.dataset.value));
    
    const correct = selected.length === puzzleDivisors.length && 
                   selected.every(n => puzzleDivisors.includes(n));
    
    if (correct) {
        updateScore(200);
        
        document.querySelectorAll('.puzzle-piece.selected').forEach(p => p.classList.add('correct'));
        
        // Generar ejemplos de divisiones
        const examples = puzzleDivisors.slice(0, 4).map(d => `${puzzleTarget} ÷ ${d} = ${puzzleTarget/d}`).join(', ');
        
        showQuickFeedback('¡Puzzle Completo! 🧩', 200);
        
        setTimeout(() => {
            generatePuzzle();
        }, 800);
    } else {
        const missing = puzzleDivisors.filter(d => !selected.includes(d));
        const wrong = selected.filter(s => !puzzleDivisors.includes(s));
        
        let message = '';
        if (missing.length > 0) {
            message = `Te faltaron divisores: <strong>${missing.join(', ')}</strong>`;
        }
        if (wrong.length > 0) {
            if (message) message += '<br>';
            message += `<strong>${wrong.join(', ')}</strong> no ${wrong.length === 1 ? 'es divisor' : 'son divisores'} de ${puzzleTarget}`;
        }
        
        // Generar explicación detallada
        let explanationParts = [];
        if (wrong.length > 0) {
            wrong.forEach(w => {
                const remainder = puzzleTarget % w;
                explanationParts.push(`${puzzleTarget} ÷ ${w} = ${(puzzleTarget/w).toFixed(2)} (tiene resto ${remainder})`);
            });
        }
        
        const explanation = `Los divisores de ${puzzleTarget} son: ${puzzleDivisors.join(', ')}. Un divisor divide exactamente sin dejar resto. ${explanationParts.length > 0 ? 'Por ejemplo: ' + explanationParts.join('; ') + '.' : ''}`;
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡Revisa tu selección!',
            message: message,
            correctAnswer: `Divisores de ${puzzleTarget}: ${puzzleDivisors.join(', ')}`,
            explanation: explanation,
            autoClose: false,
            onContinue: () => {
                document.querySelectorAll('.puzzle-piece').forEach(p => {
                    p.classList.remove('selected', 'correct');
                });
                generatePuzzle();
            }
        });
    }
}

// ================================
// JUEGO 11: Clasificador Express (Tema 6)
// ================================
function initClassifierGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Clasificador Express')}
        <div class="game-area classifier-game">
            <div class="classifier-number" id="classifierNumber"></div>
            <div class="classifier-bins">
                <div class="classifier-bin" onclick="classifyNumber(2)">
                    <i class="fas fa-inbox"></i>
                    <span>Divisible por 2</span>
                </div>
                <div class="classifier-bin" onclick="classifyNumber(3)">
                    <i class="fas fa-inbox"></i>
                    <span>Divisible por 3</span>
                </div>
                <div class="classifier-bin" onclick="classifyNumber(5)">
                    <i class="fas fa-inbox"></i>
                    <span>Divisible por 5</span>
                </div>
                <div class="classifier-bin" onclick="classifyNumber(0)">
                    <i class="fas fa-inbox"></i>
                    <span>Ninguno</span>
                </div>
            </div>
        </div>
    `;
    
    startGameTimer(60, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    generateClassifierNumber();
}

let classifierCurrentNumber = 0;
let classifierCorrectBin = 0;

function generateClassifierNumber() {
    classifierCurrentNumber = Math.floor(Math.random() * 100) + 10;
    
    // Determinar el bin correcto (prioridad: 2, 3, 5, ninguno)
    if (classifierCurrentNumber % 2 === 0) {
        classifierCorrectBin = 2;
    } else if (classifierCurrentNumber % 3 === 0) {
        classifierCorrectBin = 3;
    } else if (classifierCurrentNumber % 5 === 0) {
        classifierCorrectBin = 5;
    } else {
        classifierCorrectBin = 0;
    }
    
    const numberEl = document.getElementById('classifierNumber');
    numberEl.innerHTML = `<span class="falling-number">${classifierCurrentNumber}</span>`;
}

function classifyNumber(bin) {
    const gameArea = document.querySelector('.classifier-game');
    
    // Generar explicaciones detalladas
    const digitSum = String(classifierCurrentNumber).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    const lastDigit = classifierCurrentNumber % 10;
    
    const binNames = { 2: 'Divisible por 2', 3: 'Divisible por 3', 5: 'Divisible por 5', 0: 'Ninguno' };
    
    if (bin === classifierCorrectBin) {
        updateScore(70);
        
        let explanation = '';
        if (bin === 2) {
            explanation = `${classifierCurrentNumber} termina en ${lastDigit}, que es un número par. Por eso es divisible por 2.`;
        } else if (bin === 3) {
            explanation = `Suma de dígitos de ${classifierCurrentNumber} = ${digitSum}. Como ${digitSum} es divisible por 3, el número también lo es.`;
        } else if (bin === 5) {
            explanation = `${classifierCurrentNumber} termina en ${lastDigit}. Los números que terminan en 0 o 5 son divisibles por 5.`;
        } else {
            explanation = `${classifierCurrentNumber} no cumple ningún criterio: no termina en par (div. 2), su suma de dígitos ${digitSum} no es divisible por 3, y no termina en 0 o 5 (div. 5).`;
        }
        
        showQuickFeedback('¡Clasificación correcta! 🏷️', 70);
        
        setTimeout(() => {
            generateClassifierNumber();
        }, 800);
    } else {
        updateScore(-20);
        
        let correctExplanation = '';
        if (classifierCorrectBin === 2) {
            correctExplanation = `${classifierCurrentNumber} termina en ${lastDigit}, que es par. Por eso es divisible por 2.`;
        } else if (classifierCorrectBin === 3) {
            correctExplanation = `Suma de dígitos = ${digitSum}. Como ${digitSum} es divisible por 3, el número también lo es.`;
        } else if (classifierCorrectBin === 5) {
            correctExplanation = `${classifierCurrentNumber} termina en ${lastDigit}. Es divisible por 5.`;
        } else {
            correctExplanation = `${classifierCurrentNumber} no es divisible por 2 (no termina en par), ni por 3 (suma ${digitSum}), ni por 5 (no termina en 0 o 5).`;
        }
        
        showFeedbackModal({
            isCorrect: false,
            title: '¡Clasificación incorrecta!',
            message: `<strong>${classifierCurrentNumber}</strong> pertenece a: <strong>${binNames[classifierCorrectBin]}</strong>`,
            userAnswer: binNames[bin],
            correctAnswer: binNames[classifierCorrectBin],
            explanation: `Criterios de divisibilidad:<br>• Por 2: termina en 0, 2, 4, 6, 8<br>• Por 3: suma de dígitos divisible por 3<br>• Por 5: termina en 0 o 5<br><br>${correctExplanation}`,
            points: -20,
            autoClose: false,
            onContinue: generateClassifierNumber
        });
    }
}

// ================================
// JUEGO 12: Ruleta Divisible (Tema 6) - Versión corregida
// ================================
let isSpinning = false;
let wheelTotalRotation = 0;
let currentWheelDivisor = 2;
let currentWheelNumber = 0;
let currentWheelIsMultiple = false;

let wheelGame = null;
let isWheelSpinning = false;

function initWheelGame() {
    const gameBody = document.getElementById('gameBody');
    wheelTotalRotation = 0;
    
    gameBody.innerHTML = `
        ${renderGameHeader('Ruleta Divisible', true, true)}
        <div class="game-area wheel-game">
            <div id="phaserWheelContainer" style="width: 100%; display: flex; justify-content: center; margin: 1rem 0;"></div>
            <div style="text-align: center; margin: 1rem 0;">
                <button class="btn btn-primary btn-lg" onclick="spinPhaserWheel()" id="spinBtn">
                    <i class="fas fa-sync-alt"></i> Girar Ruleta
                </button>
            </div>
            <div class="wheel-question" id="wheelQuestion"></div>
            <div class="wheel-feedback" id="wheelFeedback"></div>
        </div>
    `;
    
    startGameTimer(90, () => {
        if (wheelGame) {
            wheelGame.destroy(true);
            wheelGame = null;
        }
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    // Inicializar Phaser después de que el DOM esté listo
    setTimeout(() => createPhaserWheel(), 200);
}

function createPhaserWheel() {
    const container = document.getElementById('phaserWheelContainer');
    if (!container) return;
    
    const config = {
        type: Phaser.AUTO,
        width: 400,
        height: 400,
        parent: 'phaserWheelContainer',
        backgroundColor: '#f8f9fa',
        transparent: true,
        scene: {
            create: createWheelScene,
            update: updateWheelScene
        }
    };
    
    wheelGame = new Phaser.Game(config);
}

function createWheelScene() {
    const scene = this;
    
    // Definir segmentos de la ruleta (6 segmentos de 60° cada uno)
    const divisors = [2, 3, 4, 5, 6, 9];
    const colors = [0xFF6B6B, 0x4ECDC4, 0xFFE66D, 0x95E1D3, 0xA8E6CF, 0xFFAA85];
    const numSegments = divisors.length;
    const anglePerSegment = 360 / numSegments; // 60 grados por segmento
    
    // Crear contenedor para la ruleta (se rotará)
    scene.wheelContainer = scene.add.container(200, 200);
    
    // Dibujar segmentos - el primer segmento (índice 0) empieza en la parte superior
    scene.segments = [];
    divisors.forEach((divisor, index) => {
        // Cada segmento empieza desde arriba (270° en coordenadas estándar, o -90°)
        // y se distribuyen en sentido horario
        const startAngleDeg = index * anglePerSegment - 90;
        const endAngleDeg = (index + 1) * anglePerSegment - 90;
        const startAngle = Phaser.Math.DegToRad(startAngleDeg);
        const endAngle = Phaser.Math.DegToRad(endAngleDeg);
        
        // Crear gráfico del segmento
        const segment = scene.add.graphics();
        segment.fillStyle(colors[index], 1);
        segment.beginPath();
        segment.moveTo(0, 0);
        segment.arc(0, 0, 150, startAngle, endAngle, false);
        segment.closePath();
        segment.fillPath();
        
        // Borde del segmento
        segment.lineStyle(2, 0xffffff, 1);
        segment.beginPath();
        segment.moveTo(0, 0);
        segment.arc(0, 0, 150, startAngle, endAngle, false);
        segment.closePath();
        segment.strokePath();
        
        scene.wheelContainer.add(segment);
        
        // Texto del divisor - posicionado en el centro del segmento
        const midAngle = (startAngle + endAngle) / 2;
        const textX = Math.cos(midAngle) * 95;
        const textY = Math.sin(midAngle) * 95;
        
        const text = scene.add.text(textX, textY, divisor.toString(), {
            fontSize: '36px',
            fontFamily: 'Arial, sans-serif',
            color: '#ffffff',
            fontStyle: 'bold',
            stroke: '#000000',
            strokeThickness: 5
        });
        text.setOrigin(0.5);
        scene.wheelContainer.add(text);
        
        scene.segments.push({ divisor, color: colors[index], startAngle: startAngleDeg, endAngle: endAngleDeg });
    });
    
    // Círculo central decorativo
    const centerCircle = scene.add.graphics();
    centerCircle.fillStyle(0x2c3e50, 1);
    centerCircle.fillCircle(0, 0, 30);
    centerCircle.lineStyle(4, 0xecf0f1, 1);
    centerCircle.strokeCircle(0, 0, 30);
    scene.wheelContainer.add(centerCircle);
    
    // Borde exterior grueso
    const outerRing = scene.add.graphics();
    outerRing.lineStyle(8, 0x2c3e50, 1);
    outerRing.strokeCircle(0, 0, 150);
    scene.wheelContainer.add(outerRing);
    
    // PUNTERO FIJO - Triángulo apuntando hacia abajo al borde de la ruleta
    // Posicionado en la parte superior, apunta al centro del borde
    const pointer = scene.add.graphics();
    pointer.fillStyle(0xe74c3c, 1);
    pointer.beginPath();
    pointer.moveTo(200, 58);       // Punta inferior (apunta a la ruleta)
    pointer.lineTo(185, 35);       // Esquina superior izquierda
    pointer.lineTo(215, 35);       // Esquina superior derecha
    pointer.closePath();
    pointer.fillPath();
    pointer.lineStyle(3, 0xffffff, 1);
    pointer.strokePath();
    
    // Base del puntero (rectángulo)
    pointer.fillStyle(0xc0392b, 1);
    pointer.fillRect(192, 20, 16, 18);
    pointer.lineStyle(2, 0xffffff, 1);
    pointer.strokeRect(192, 20, 16, 18);
    
    // Guardar datos en la escena
    scene.anglePerSegment = anglePerSegment;
    scene.divisors = divisors;
    scene.numSegments = numSegments;
}

function updateWheelScene() {
    // Actualización por frame si se necesita
}

function spinPhaserWheel() {
    if (isWheelSpinning || !wheelGame) return;
    isWheelSpinning = true;
    
    const spinBtn = document.getElementById('spinBtn');
    if (spinBtn) spinBtn.disabled = true;
    document.getElementById('wheelQuestion').innerHTML = '';
    document.getElementById('wheelFeedback').innerHTML = '';
    
    const scene = wheelGame.scene.scenes[0];
    if (!scene || !scene.wheelContainer) {
        isWheelSpinning = false;
        if (spinBtn) spinBtn.disabled = false;
        return;
    }
    
    // Configurar giro: 5-8 vueltas completas + ángulo aleatorio para detenerse
    const fullSpins = (5 + Math.random() * 3) * 360;
    const randomAngle = Math.random() * 360;
    const totalRotation = scene.wheelContainer.angle + fullSpins + randomAngle;
    
    // Animar con Phaser tweens
    scene.tweens.add({
        targets: scene.wheelContainer,
        angle: totalRotation,
        duration: 4000,
        ease: 'Cubic.easeOut',
        onComplete: () => {
            // Calcular qué segmento está bajo el puntero (arriba)
            // El puntero está fijo en la parte superior (0° desde arriba)
            // La ruleta gira, así que necesitamos ver qué segmento quedó arriba
            
            // Normalizar el ángulo final a 0-360
            let finalAngle = scene.wheelContainer.angle % 360;
            if (finalAngle < 0) finalAngle += 360;
            
            // El puntero apunta a la parte superior de la ruleta
            // Los segmentos empiezan en -90° (arriba) y van en sentido horario
            // Cuando la ruleta gira X grados, el segmento que estaba a -X° ahora está arriba
            
            // Calcular qué segmento está bajo el puntero
            // Invertimos porque la ruleta gira en sentido horario
            const pointerAngle = (360 - finalAngle) % 360;
            const segmentIndex = Math.floor(pointerAngle / scene.anglePerSegment) % scene.numSegments;
            const selectedDivisor = scene.divisors[segmentIndex];
            
            console.log('Final angle:', finalAngle, 'Pointer angle:', pointerAngle, 'Segment:', segmentIndex, 'Divisor:', selectedDivisor);
            
            // Resetear estado
            isWheelSpinning = false;
            if (spinBtn) spinBtn.disabled = false;
            
            // Mostrar pregunta con el divisor seleccionado
            currentWheelDivisor = selectedDivisor;
            showWheelQuestion(currentWheelDivisor);
            
            // Efecto visual de rebote
            scene.tweens.add({
                targets: scene.wheelContainer,
                scaleX: 1.05,
                scaleY: 1.05,
                duration: 200,
                yoyo: true,
                ease: 'Sine.easeInOut'
            });
        }
    });
}

function showWheelQuestion(divisor) {
    document.getElementById('wheelQuestion').innerHTML = `
        <div class="wheel-q-content">
            <div class="wheel-divisor-display">
                <span class="divisor-label">Divisor seleccionado:</span>
                <span class="divisor-number">${divisor}</span>
            </div>
            <p class="wheel-instruction">Escribe un número que sea <strong>divisible por ${divisor}</strong></p>
            <div class="wheel-input-group">
                <input type="number" id="wheelInput" class="form-control wheel-input" min="1" max="9999" autocomplete="off">
                <button class="btn btn-success btn-lg" onclick="checkWheelInput()">
                    <i class="fas fa-check"></i> Verificar
                </button>
            </div>
            <div class="wheel-hints">
                <small>Recuerda: Un número es divisible por ${divisor} si al dividirlo el resto es 0</small>
            </div>
        </div>
    `;
    
    // Auto-focus en el input
    setTimeout(() => {
        const input = document.getElementById('wheelInput');
        if (input) {
            input.focus();
            // Permitir Enter para verificar
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') checkWheelInput();
            });
        }
    }, 100);
}

function checkWheelInput() {
    const input = document.getElementById('wheelInput');
    const userNumber = parseInt(input.value);
    const feedbackEl = document.getElementById('wheelFeedback');
    
    if (!userNumber || userNumber < 1) {
        feedbackEl.innerHTML = `<span class="text-warning">Por favor ingresa un número válido</span>`;
        return;
    }
    
    const isDivisible = userNumber % currentWheelDivisor === 0;
    
    if (isDivisible) {
        updateScore(100);
        
        // Retroalimentación mejorada con animación
        const gameArea = document.querySelector('.wheel-game');
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'game-feedback correct animated';
        feedbackDiv.innerHTML = `
            <div style="font-size: 1.5rem; font-weight: bold;">¡Excelente!</div>
            <div style="font-size: 1rem;">${userNumber} ÷ ${currentWheelDivisor} = ${userNumber/currentWheelDivisor}</div>
            <div style="font-size: 1.2rem; margin-top: 0.5rem; color: #f39c12;">+100 puntos</div>
        `;
        gameArea.appendChild(feedbackDiv);
        
        setTimeout(() => feedbackDiv.remove(), 2000);
        feedbackEl.innerHTML = '';
        document.getElementById('wheelQuestion').innerHTML = '';
    } else {
        const cociente = Math.floor(userNumber / currentWheelDivisor);
        const resto = userNumber % currentWheelDivisor;
        
        // Retroalimentación de error mejorada
        const gameArea = document.querySelector('.wheel-game');
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'game-feedback incorrect animated';
        feedbackDiv.innerHTML = `
            <div style="font-size: 1.5rem; font-weight: bold;">¡Intenta de nuevo!</div>
            <div style="font-size: 1rem;">${userNumber} ÷ ${currentWheelDivisor} = ${cociente} con resto ${resto}</div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">
                El resto debe ser 0 para que sea divisible. Prueba con: ${currentWheelDivisor * (cociente + 1)}, ${currentWheelDivisor * (cociente + 2)}, etc.
            </div>
        `;
        gameArea.appendChild(feedbackDiv);
        
        setTimeout(() => feedbackDiv.remove(), 3000);
        input.value = '';
        input.focus();
    }
}

// ================================
// JUEGO 13: Contador de Área (Tema 7) - Juego interactivo y sencillo
// ================================
function initBuilderGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Contador de Área')}
        <div class="game-area builder-game">
            <div class="builder-intro">
                <p style="font-size: 1.2rem; color: var(--gray-700);">¡Cuenta los cuadritos de la figura!</p>
            </div>
            <div class="builder-figure" id="builderFigure"></div>
            <div class="builder-options" id="builderOptions"></div>
            <div class="builder-feedback" id="builderFeedback"></div>
        </div>
    `;
    
    startGameTimer(60, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    generateAreaQuestion();
}

let correctArea = 0;

function generateAreaQuestion() {
    // Generar figuras simples con áreas calculables
    const figures = [
        { type: 'rectangle', width: 3, height: 2, area: 6, color: '#e74c3c' },
        { type: 'rectangle', width: 4, height: 3, area: 12, color: '#3498db' },
        { type: 'rectangle', width: 5, height: 2, area: 10, color: '#2ecc71' },
        { type: 'square', width: 3, height: 3, area: 9, color: '#f39c12' },
        { type: 'square', width: 4, height: 4, area: 16, color: '#9b59b6' },
        { type: 'rectangle', width: 2, height: 4, area: 8, color: '#1abc9c' },
        { type: 'rectangle', width: 6, height: 2, area: 12, color: '#e67e22' },
        { type: 'rectangle', width: 3, height: 3, area: 9, color: '#34495e' }
    ];
    
    const fig = figures[Math.floor(Math.random() * figures.length)];
    correctArea = fig.area;
    
    // Dibujar figura con cuadrados unitarios más grandes y vistosos
    let figureHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <span style="font-size: 1.1rem; color: var(--gray-700);">
                Cada cuadrito = 1 cm² 
                <span style="font-size: 1.5rem; margin-left: 0.5rem;">📦</span>
            </span>
        </div>
        <div class="area-grid" style="
            display: inline-grid;
            grid-template-columns: repeat(${fig.width}, 50px);
            gap: 3px;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,240,0.9));
            border-radius: var(--border-radius-lg);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        ">`;
    
    for (let i = 0; i < fig.area; i++) {
        figureHTML += `
            <div class="area-cell" style="
                width: 50px;
                height: 50px;
                background: ${fig.color};
                border: 2px solid rgba(0,0,0,0.1);
                border-radius: 4px;
                box-shadow: inset 0 2px 4px rgba(255,255,255,0.3), 
                            inset 0 -2px 4px rgba(0,0,0,0.2);
                transition: transform 0.2s;
            "></div>`;
    }
    figureHTML += '</div>';
    
    document.getElementById('builderFigure').innerHTML = figureHTML;
    
    // Generar opciones con mejor diseño
    const options = [correctArea];
    while (options.length < 4) {
        const delta = Math.floor(Math.random() * 8) - 4;
        const opt = correctArea + delta;
        if (opt > 0 && !options.includes(opt)) options.push(opt);
    }
    options.sort(() => Math.random() - 0.5);
    
    document.getElementById('builderOptions').innerHTML = `
        <p style="font-size: 1.3rem; font-weight: 600; color: var(--gray-800); margin: 1.5rem 0;">
            ¿Cuántos cuadritos tiene la figura?
        </p>
        <div class="area-options-grid" style="
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            max-width: 400px;
            margin: 0 auto;
        ">
            ${options.map(opt => `
                <button class="area-option-btn" onclick="checkAreaAnswer(${opt})" style="
                    padding: 1.2rem;
                    font-size: 1.3rem;
                    font-weight: bold;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    border-radius: var(--border-radius-lg);
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                ">
                    ${opt} cm²
                </button>
            `).join('')}
        </div>
    `;
    
    document.getElementById('builderFeedback').innerHTML = '';
    
    // Agregar efecto hover a las celdas
    setTimeout(() => {
        document.querySelectorAll('.area-cell').forEach(cell => {
            cell.addEventListener('mouseenter', () => {
                cell.style.transform = 'scale(1.1) rotate(2deg)';
            });
            cell.addEventListener('mouseleave', () => {
                cell.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }, 100);
}

function checkAreaAnswer(userAnswer) {
    // Obtener dimensiones de la figura actual para la explicación
    const figures = [
        { type: 'rectangle', width: 3, height: 2, area: 6 },
        { type: 'rectangle', width: 4, height: 3, area: 12 },
        { type: 'rectangle', width: 5, height: 2, area: 10 },
        { type: 'square', width: 3, height: 3, area: 9 },
        { type: 'square', width: 4, height: 4, area: 16 },
        { type: 'rectangle', width: 2, height: 4, area: 8 },
        { type: 'rectangle', width: 6, height: 2, area: 12 },
        { type: 'rectangle', width: 3, height: 3, area: 9 }
    ];
    const currentFig = figures.find(f => f.area === correctArea);
    
    if (userAnswer === correctArea) {
        updateScore(100);
        
        showQuickFeedback('¡Perfecto! 📐', 100);
        
        setTimeout(() => {
            generateAreaQuestion();
        }, 800);
    } else {
        showFeedbackModal({
            isCorrect: false,
            title: '¡Casi lo logras!',
            message: `La respuesta correcta es <strong>${correctArea} cm²</strong>`,
            userAnswer: `${userAnswer} cm²`,
            correctAnswer: `${correctArea} cm²`,
            explanation: currentFig 
                ? `Esta figura tiene ${currentFig.width} cuadritos de ancho × ${currentFig.height} de alto = ${currentFig.width} × ${currentFig.height} = ${correctArea} cm². <br><br>💡 <strong>Tip:</strong> Puedes multiplicar largo × ancho, o contar los cuadritos uno por uno.`
                : `💡 <strong>Tip:</strong> Cuenta todos los cuadritos de la figura, o multiplica largo × ancho.`,
            autoClose: false,
            onContinue: generateAreaQuestion
        });
    }
}

// ================================
// JUEGO 14: Quiz de Áreas (Tema 7) - Versión simplificada con opciones
// ================================
function initConverterGame() {
    const gameBody = document.getElementById('gameBody');
    
    gameBody.innerHTML = `
        ${renderGameHeader('Quiz de Áreas')}
        <div class="game-area converter-game">
            <div class="converter-intro">
                <div class="converter-emoji">📏</div>
            </div>
            <div class="converter-question" id="converterQuestion"></div>
            <div class="converter-options" id="converterOptions"></div>
            <div class="converter-feedback" id="converterFeedback"></div>
            <div class="converter-hint" id="converterHint"></div>
        </div>
    `;
    
    startGameTimer(60, () => {
        gameBody.innerHTML = renderGameOver(gameScore);
    });
    
    generateConversion();
}

let conversionCorrect = '';
let conversionExplanation = '';

function generateConversion() {
    // Preguntas más simples y con contexto visual
    const questions = [
        {
            question: '¿Cuántos cm² hay en 1 dm²?',
            correct: '100 cm²',
            options: ['10 cm²', '100 cm²', '1000 cm²', '50 cm²'],
            explanation: '1 dm = 10 cm, entonces 1 dm² = 10 × 10 = 100 cm²'
        },
        {
            question: '¿Cuántos mm² hay en 1 cm²?',
            correct: '100 mm²',
            options: ['10 mm²', '100 mm²', '1000 mm²', '50 mm²'],
            explanation: '1 cm = 10 mm, entonces 1 cm² = 10 × 10 = 100 mm²'
        },
        {
            question: '¿Cuántos dm² hay en 1 m²?',
            correct: '100 dm²',
            options: ['10 dm²', '100 dm²', '1000 dm²', '50 dm²'],
            explanation: '1 m = 10 dm, entonces 1 m² = 10 × 10 = 100 dm²'
        },
        {
            question: '¿Cuántos cm² hay en 1 m²?',
            correct: '10000 cm²',
            options: ['100 cm²', '1000 cm²', '10000 cm²', '100000 cm²'],
            explanation: '1 m = 100 cm, entonces 1 m² = 100 × 100 = 10000 cm²'
        },
        {
            question: 'Un cuadrado de 2 cm de lado tiene un área de:',
            correct: '4 cm²',
            options: ['2 cm²', '4 cm²', '8 cm²', '6 cm²'],
            explanation: 'Área = lado × lado = 2 × 2 = 4 cm²'
        },
        {
            question: 'Un rectángulo de 3 cm × 4 cm tiene un área de:',
            correct: '12 cm²',
            options: ['7 cm²', '12 cm²', '14 cm²', '10 cm²'],
            explanation: 'Área = largo × ancho = 3 × 4 = 12 cm²'
        },
        {
            question: 'Si una baldosa mide 1 dm², ¿cuántas baldosas caben en 1 m²?',
            correct: '100 baldosas',
            options: ['10 baldosas', '50 baldosas', '100 baldosas', '1000 baldosas'],
            explanation: '1 m² = 100 dm², así que caben 100 baldosas de 1 dm² cada una'
        }
    ];
    
    const q = questions[Math.floor(Math.random() * questions.length)];
    conversionCorrect = q.correct;
    conversionExplanation = q.explanation;
    
    document.getElementById('converterQuestion').innerHTML = `
        <p class="converter-q-text">${q.question}</p>
    `;
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    document.getElementById('converterOptions').innerHTML = `
        <div class="converter-options-grid">
            ${shuffledOptions.map(opt => `
                <button class="converter-option-btn" onclick="checkConversionAnswer('${opt}')">
                    ${opt}
                </button>
            `).join('')}
        </div>
    `;
    
    document.getElementById('converterFeedback').innerHTML = '';
    document.getElementById('converterHint').innerHTML = '<small>💡 Recuerda: al convertir áreas, multiplicas dos veces el factor de conversión lineal.</small>';
}

function checkConversionAnswer(userAnswer) {
    const gameArea = document.querySelector('.converter-game');
    
    if (userAnswer === conversionCorrect) {
        updateScore(100);
        
        showQuickFeedback('¡Excelente! 📐', 100);
        
        setTimeout(() => {
            document.getElementById('converterHint').innerHTML = '';
            generateConversion();
        }, 800);
    } else {
        showFeedbackModal({
            isCorrect: false,
            title: '¡Respuesta incorrecta!',
            message: `Tu respuesta: ${userAnswer}`,
            userAnswer: userAnswer,
            correctAnswer: conversionCorrect,
            explanation: conversionExplanation + '<br><br>💡 <strong>Tip:</strong> Para convertir unidades de área, recuerda que 1 unidad de longitud² = (factor)². Por ejemplo, 1 m² = (100 cm)² = 10,000 cm².',
            autoClose: false,
            onContinue: () => {
                document.getElementById('converterHint').innerHTML = '';
                generateConversion();
            }
        });
    }
}
