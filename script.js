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

let currentQuestion = 0;
let correctAnswers = 0;

function displayQuestion() {
    const questionTxt = document.getElementById('the-questions');
    questionTxt.textContent=questions[currentQuestion].question;

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
    });





}

function checkAnswer() {

}

displayQuestion();