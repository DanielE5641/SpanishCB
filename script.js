const questions = [
  {
    question: "What does 'El abogado' mean?",
    choices: ["Firefighter", "Lawyer", "Doctor", "Journalist"],
    correct: 1,
  },
  {
    question: "Fill in the blank: El _____ apaga incendios.",
    choices: ["bombero", "ingeniero", "vecino", "programador"],
    correct: 0,
  },
  {
    question: "This person designs buildings. Who is it?",
    choices: ["Ingeniero(a)", "Mecánico(a)", "Peluquero(a)", "Periodista"],
    correct: 0,
  },
  {
    question: "What does 'Prestar' mean?",
    choices: ["To lend", "To drive", "To build", "To count"],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => checkAnswer(index);
    choicesElement.appendChild(button);
  });
}

function checkAnswer(choiceIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (choiceIndex === currentQuestion.correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Game Over! Final Score: " + score;
    choicesElement.innerHTML = "";
  }
  scoreElement.textContent = "Score: " + score;
}

loadQuestion();
