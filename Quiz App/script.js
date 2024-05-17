const questions = [
  {
    question: "Which command will stop an infinite loop?",
    answers: [
      { text: " Alt - C", correct: false },
      { text: " Shift - C", correct: false },
      { text: " Esc", correct: false },
      { text: " Ctrl - C", correct: true },
    ]
  },

  {
    question: "int fun(char *str1){  char *str2 = str1;  while(*++str1);  return (str1-str2);}int main(){  char *str = \"GeeksQuiz\";  printf(\"%d\", fun(str));  return 0;}",

    answers: [
      { text: " 10", correct: false },
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "Random Number", correct: false },
    ]
  },

  {
    question: "Given that x = 7.5, j = -1.0, n = 1.0, m = 2.0 the value of - - x + j == x>n> = m is:",
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ]
  },

  {
    question: "Which of the following is not a logical operator?",
    answers: [
      { text: " && ", correct: false },
      { text: " ! ", correct: false },
      { text: "|| ", correct: false },
      { text: " | ", correct: true },
    ]
  },
];

const questionElement =document.getElementById("question");
const answerButton =document.getElementById("answer-buttons");
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex =0;
let score =0;
function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);

      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click" , selectAnswer);
    });
}

function resetState(){
  nextButton.style.display= "none";
  while(answerButton.firstChild){
  answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");  
    score++;  
  } else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled= true;

  });

nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else{
    startQuiz();
  }
})

startQuiz();