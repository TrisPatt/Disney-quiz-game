//create array of objects for questions
const questions = [
    {
        question: "what is 2+2 ?",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "what is 1+4 ?",
        options: ["2","7","8","5"],
        answer: 3
    },
    {
        question: "what is 5x5 ?",
        options: ["20","25","30","40"],
        answer: 1
    }
  
];

//variables to start questions and answers
let currentQuestion = 0;
let correctAnswers = 0;

//function to display the questions
function displayQuestion() {
    // Reset the answer classes from all buttons
    document.querySelectorAll(".option").forEach(button => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
    });

    const questionTxt = document.getElementById('the-questions');
    questionTxt.textContent = questions[currentQuestion].question;

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
    });

}

//function to check the answer and display result
function checkAnswer(checked) {
    let answer = questions[currentQuestion].answer;
    let wrongSound = new Audio ('Assets/sounds/incorrect.mp3');
    let correctSound = new Audio ('Assets/sounds/correct.mp3');

    if (checked === answer) {
        correctSound.play();
        alert("correct!");
        correctAnswers++;
        document.querySelectorAll(".option")[answer].classList.add("correct");
        
        }
    else {
        wrongSound.play();
        alert("incorrect");
        document.querySelectorAll(".option")[checked].classList.add("incorrect");
    }
    //to update the score
    let score = document.getElementById("correctAnswers");
    score.textContent = correctAnswers;

    //to move to the next question
    currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            alert("End of the quiz. You scored " + correctAnswers);
            //reset 
            currentQuestion = 0;
            correctAnswers = 0;
            displayQuestion();
        }
        
}


displayQuestion();
