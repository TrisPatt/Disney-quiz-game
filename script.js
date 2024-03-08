//create array of objects for questions
const questions = [
    {
        question: "what is 2+2",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "what is 1+4",
        options: ["2","7","8","5"],
        answer: 4
    },
    {
        question: "what is 5x5",
        options: ["20","25","30","40"],
        answer: 2
    }
]

//variables to start questions and answers
let currentQuestion = 0;
let correctAnswers = 0;

//function to display the questions
function displayQuestion() {
    const questionTxt = document.getElementById('the-questions');
    questionTxt.textContent=questions[currentQuestion].question;

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
    });
}

//function to check the answer and display prompt
function checkAnswer(select) {
    const result = document.getElementById("result");
    if (select === questions[currentQuestion].answer) {
        result.textContent = alert("correct");
        correctAnswers++;
            }
    else {
        result.textContent = alert("incorrect");
    }

    setTimeout(() => {
        currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();}
        else {
            const gameArea = document.querySelector(".game-area");
            game-gameArea.innerHTML = <p>you got
            ${correctAnswers} out of ${questions.length}questions.</p>
        }
    });
}

displayQuestion();