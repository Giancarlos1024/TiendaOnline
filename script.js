
/*script del Juego de Preguntas y Respuestas*/
const questions = [
  {
    question: "¿Qué es un disco duro en informática?",
    options: [
      "Un dispositivo de almacenamiento de datos que emplea un sistema de grabación magnética",
      "Un dispositivo de almacenamiento de datos que emplea un sistema de grabación óptica",
      "Un dispositivo de almacenamiento de datos que emplea un sistema de grabación electrónica"
    ],
    answer: "Un dispositivo de almacenamiento de datos que emplea un sistema de grabación magnética"
  },
  {
    question: "¿De qué están recubiertos los discos rígidos de un disco duro?",
    options: [
      "Material magnético",
      "Material óptico",
      "Material electrónico"
    ],
    answer: "Material magnético"
  },
  {
    question: "¿Qué mide la velocidad de rotación de un disco duro?",
    options: [
      "Número de revoluciones por minuto (RPM)",
      "Número de revoluciones por segundo (RPS)",
      "Número de revoluciones por hora (RPH)"
    ],
    answer: "Número de revoluciones por minuto (RPM)"
  },
  {
    question: "¿Qué es el tiempo medio de acceso en un disco duro?",
    options: [
      "Tiempo medio que tarda la aguja en situarse en la pista y el sector deseado",
      "Tiempo medio que tarda la aguja en leer o escribir nueva información",
      "Tiempo medio que tarda el disco en transferir la información a la computadora"
    ],
    answer: "Tiempo medio que tarda el disco en transferir la información a la computadora"
  },
  {
    question: "¿Qué es el tiempo medio de búsqueda en un disco duro?",
    options: [
      "Tiempo medio que tarda la aguja en situarse en la pista deseada",
      "Tiempo medio que tarda el disco en leer o escribir nueva información",
      "Tiempo medio que tarda la aguja en situarse en el sector deseado"
    ],
    answer: "Tiempo medio que tarda el disco en leer o escribir nueva información"
  },
  {
    question: "¿Cuál es la función de la tasa de transferencia en un disco duro?",
    options: [
      "Velocidad a la que puede transferir la información a la computadora",
      "Velocidad a la que giran los discos del disco duro",
      "Velocidad a la que se mueve la aguja en el disco duro"
    ],
    answer: "Velocidad a la que puede transferir la información a la computadora"
  },
  {
    question: "¿Cómo se puede proteger la pantalla de una computadora?",
    options: [
      "Evitando ensuciarla para no tener que limpiarla mucho",
      "Limpiándola con frecuencia para mantenerla brillante",
      "Cubriendo el teclado con una tela para evitar rayarla"
    ],
    answer: "Evitando ensuciarla para no tener que limpiarla mucho"
  },
  {
    question: "¿Qué se recomienda hacer para proteger una computadora del polvo?",
    options: [
      "Dar vuelta al teclado y sacudirlo suavemente para expulsar las partículas acumuladas",
      "Dejar la computadora al aire libre para que se ventile",
      "Utilizar una secadora de pelo con calor para eliminar el polvo"
    ],
    answer: "Dar vuelta al teclado y sacudirlo suavemente para expulsar las partículas acumuladas"
  },
  {
    question: "¿Qué se debe usar para limpiar la pantalla y la carcasa de una computadora?",
    options: [
      "Una gamuza o franela humedecida con agua o una solución especial",
      "Un paño seco para evitar dañar los componentes",
      "Un trapo sucio con productos químicos fuertes"
    ],
    answer: "Una gamuza o franela humedecida con agua o una solución especial"
  },
  {
    question: "¿Cómo se puede prevenir el derrame de líquidos sobre el teclado de una computadora?",
    options: [
      "Evitando colocar bebidas cerca de la computadora",
      "Colocando un protector impermeable sobre el teclado",
      "Desconectando el teclado cuando no se está usando"
    ],
    answer: "Evitando colocar bebidas cerca de la computadora"
  }
  
];

// Función para barajar un array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Barajar las preguntas al inicio
shuffleArray(questions);

let currentQuestion = 0;
let correctAnswers = parseInt(localStorage.getItem('correctAnswers')) || 0;
let userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];

const questionElement = document.getElementById('question');
const optionsForm = document.getElementById('options');
const resultElement = document.getElementById('result');
const counterElement = document.getElementById('correctAnswers');
const answersListElement = document.getElementById('answersList');
const resetButton = document.getElementById('resetButton');

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsForm.innerHTML = '';

  q.options.forEach((option, index) => {
    const label = document.createElement('label');
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'option';
    radioButton.value = option;
    radioButton.addEventListener('change', () => {
      checkAnswer(option);
      radioButton.checked = true; // Marcar la opción seleccionada
      label.classList.add('selected'); // Agregar la clase CSS para resaltar la opción seleccionada
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        showResult();
      }
    });
    label.appendChild(radioButton);
    label.appendChild(document.createTextNode(option));
    optionsForm.appendChild(label);
    optionsForm.appendChild(document.createElement('br'));
  });
}


function checkAnswer(answer) {
  const q = questions[currentQuestion];
  if (answer === q.answer) {
    resultElement.textContent = '¡Correcto!';
    resultElement.classList.remove('incorrect-answer');
    resultElement.classList.add('correct-answer');
    correctAnswers++;
    localStorage.setItem('correctAnswers', correctAnswers);
  } else {
    resultElement.textContent = 'Incorrecto. La respuesta correcta es: ' + q.answer;
    resultElement.classList.remove('correct-answer');
    resultElement.classList.add('incorrect-answer');
  }
  counterElement.textContent = correctAnswers;
  counterElement.style.color = 'green';

  userAnswers.push({ question: q.question, answer, isCorrect: answer === q.answer });
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}

function showResult() {
  resultElement.textContent = '¡Juego terminado!';
  resultElement.classList.remove('correct-answer', 'incorrect-answer');
  resetButton.style.display = 'block';
}

// Función para mostrar las respuestas en el modal
// Función para mostrar las respuestas en el modal y almacenarlas en el localStorage
function showAnswersInModal() {
  const modalAnswersListElement = document.getElementById('modalAnswersList');
  const modalAnswersList = document.createElement('ul');
  modalAnswersList.className = 'modal-answers-list';
  userAnswers.forEach(answer => {
    const listItem = document.createElement('li');
    listItem.textContent = `${answer.question}: ${answer.answer}`;
    if (answer.isCorrect) {
      listItem.classList.add('correct-answer');
    } else {
      listItem.classList.add('incorrect-answer');
    }
    modalAnswersList.appendChild(listItem);
  });
  modalAnswersListElement.innerHTML = '';
  modalAnswersListElement.appendChild(modalAnswersList);

  // Almacenar las respuestas en el localStorage
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}

// Función para cargar las respuestas almacenadas en el localStorage al iniciar el juego
function loadUserAnswersFromStorage() {
  const storedUserAnswers = localStorage.getItem('userAnswers');
  if (storedUserAnswers) {
    userAnswers = JSON.parse(storedUserAnswers);
  }
}

// Llamar a la función para cargar las respuestas almacenadas al inicio del juego
loadUserAnswersFromStorage();


resetButton.addEventListener('click', () => {
  currentQuestion = 0;
  correctAnswers = 0;
  localStorage.removeItem('correctAnswers');
  localStorage.removeItem('userAnswers');
  counterElement.textContent = correctAnswers;
  counterElement.style.color = '';
  userAnswers = [];
  resetButton.style.display = 'none';
  showQuestion();
});

// Agregar evento al botón para mostrar el modal con las respuestas
const modal = document.getElementById('myModal');
const modalClose = document.getElementsByClassName('close')[0];

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const showAnswersButton = document.getElementById('showAnswersButton');
showAnswersButton.addEventListener('click', () => {
  showAnswersInModal();
  modal.style.display = 'block';
});

// También, asegúrate de que al inicio se muestre la primera pregunta
showQuestion();
