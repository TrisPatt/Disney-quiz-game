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

let currentQuestion = 0;
let correctAnswers = 0;

//start game function
function gameStart() {
    currentQuestion = 0;
    document.getElementById('correctAnswers').innerHTML= "0";
    displayQuestion();
}
//function to display the questions
function displayQuestion() {
    // Reset the answer classes from all buttons
    document.querySelectorAll(".option").forEach(button => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
        
    });

    let questionTxt = document.getElementById('the-questions');
    questionTxt.textContent = questions[currentQuestion].question;

    let options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
    });

}

// Function to delay starting the next question
function delayNextQuestion() {
    setTimeout(function() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            alert("End of the quiz. You scored " + correctAnswers);   
            gameStart();
        }
    }, 3000);
}

//function to check the answer and display result
function checkAnswer(checked) {
    let answer = questions[currentQuestion].answer;
    let wrongSound = new Audio ('Assets/sounds/incorrect.mp3');
    let correctSound = new Audio ('Assets/sounds/correct.mp3');

    if (checked === answer) {
        correctSound.play();        
        correctAnswers++;
        document.querySelectorAll(".option")[answer].classList.add("correct");
        
        }
    else {
        wrongSound.play();
        document.querySelectorAll(".option")[checked].classList.add("incorrect");
    }
    //to update the score
    let score = document.getElementById("correctAnswers");
    score.textContent = correctAnswers;

    //to move to the next question
    delayNextQuestion();
        }

// Function to reset the quiz
document.getElementById("reset").addEventListener("click", function() {
    currentQuestion = 0;
    correctAnswers = 0;
    gameStart();
  });
            
gameStart();
