//create array of objects for questions
const questions = [
    {
        question: " Q. What Disney princess with long magical blonde hair wears a purple dress?",
        options: ["Cinderella", "Elsa", "Rapunzel", "Jazmin"],
        answer: 2
    },
    {
        question: "Q. What Disney character arrives on a kite to see the banks family?",
        options: ["Aurora","Cinderella","Belle","Mary Poppins"],
        answer: 3
    },
    { 
        question: "Q. What Disney princess lives under the sea and has a best friend called Flounder?",
        options: ["Moana","Ariel","Tiana","Jasmin"],
        answer: 1
    },
    {
        question: "Q. What Disney Princess went on a magical carpet ride with Aladin?",
        options: ["Moana","Ariel","Tiana","Jasmin"],
        answer: 3
    },
    {
        question: "Q. Who is Mickey Mouses' dog?",
        options: ["Pluto","Ariel","Donald","Goofey"],
        answer: 0
    },
    {
        question: "Q. Who defeats scar to become the Lion King?",
        options: ["Zazu","Sitch","Simba","Baloo"],
        answer: 2
    },
    {
        question: "Q. Who sings 'wherever I will go?'",
        options: ["Moana","Ariel","Tiana","Jasmin"],
        answer: 0
    },
    {
        question: "Q. Which Disney princess has powers to turn things into ice using her hands!?",
        options: ["Daisy","Ariel","Elsa","Olaf"],
        answer: 2
    },
    {
        question: "Q. Which Disney character has huge ears and a feather which makes them fly?",
        options: ["Dumbo","Simba","Bambi","Pinocchio"],
        answer: 0
    },
    {
        question: "Q. In which Disney film is 'The family madrigal' sang?'",
        options: ["Moana","Frozen  2","Wish","Encanto"],
        answer: 3
    }
];
//Variables for questions and answers. Enables buttons at start
let currentQuestion = 0;
let correctAnswers = 0;
enableButtons();

function enableButtons() {
    document.getElementById('button1').disabled = false;
    document.getElementById('button2').disabled = false;
    document.getElementById('button3').disabled = false;
    document.getElementById('button4').disabled = false;
    document.getElementById('reset').disabled = false;
}
//function to disable buttons when required so user cannot click the answer multiple times between questions
function disableButtons() {
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = true;
    document.getElementById('button3').disabled = true;
    document.getElementById('button4').disabled = true;
    document.getElementById('reset').disabled = true;
}

//display rueles of the game at start
function rules() {
    document.getElementById('rules').style.display = "block";
    document.getElementById('start-game');
}

//*validate user input for username on start screen
function validate() {
    let userName = document.getElementById('input').value.trim();
    if (userName === "") {
        alert('Please enter a username!');
        rules();
    } else {
        alert('Hello '+ userName);
        localStorage.setItem('userName', userName);
        //after correct validation, move to start the game
        gameStart();
    }
} 

//start game function
function gameStart() {
    document.getElementById('rules').style.display = "none";
    document.getElementById('end-game').style.display = "none";
    currentQuestion = 0;
    document.getElementById('correctAnswers').innerHTML= "0";
    displayQuestion();
}
//function to display the questions
function displayQuestion() {
    // Resets the answer classes on all buttons to show default colour
    document.querySelectorAll(".option").forEach(button => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
        enableButtons();
                
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
    setTimeout (function() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
             
            endGame();
        }
    }, 3000); //3 second delay between questions
}

//function to check the answer and display result
function checkAnswer(checked) {
    let answer = questions[currentQuestion].answer;
    let wrongSound = new Audio ('assets/sounds/incorrect.mp3');
    let correctSound = new Audio ('assets/sounds/correct.mp3');

    if (checked === answer) {
        correctSound.play();  
        correctSound.volume = 0.5;      
        correctAnswers++;
        document.querySelectorAll(".option")[answer].classList.add("correct");
        disableButtons();
                        
        }
    else {
        wrongSound.play();
        wrongSound.volume = 0.5;
        document.querySelectorAll(".option")[checked].classList.add("incorrect");
        disableButtons();
        
    }
    //to update the score
    let score = document.getElementById("correctAnswers");
    score.textContent = correctAnswers;

    //to move to the next question
    delayNextQuestion();
        }



// Reset the quiz
    document.getElementById("reset").addEventListener("click", restart);

//Function to end the quiz  
function endGame() {
    let tada = new Audio ('assets/sounds/tada-sound.mp3');
    let wah = new Audio ('assets/sounds/wah-wah.mp3');
    let applause = new Audio ('assets/sounds/small-applause.mp3');
    document.getElementById('end-game').style.display = "block";

    //response to the user depending on number of correct answers
    let result = document.getElementById('result');
    let retrieveUserName = localStorage.getItem("userName");

    if (correctAnswers <= 4) {
    wah.play();
    wah.volume = 0.5;
    result.innerHTML = "Unlucky, " + retrieveUserName + " you scored: " + correctAnswers + " out of " + questions.length + ". Better luck next time!";
    }
     else if (correctAnswers >= 7) {
    tada.play();
    tada.volume = 0.5;
    result.innerHTML = "Congratulations, " + retrieveUserName + ". You are ready to be a Disney Princess/Prince. You scored: " + correctAnswers + " out of " + questions.length + ". You are a star!";
    } 
     else {
        applause.play();
        applause.volume = 0.5;
        result.innerHTML = "Not bad, " + retrieveUserName + " you scored: " + correctAnswers + " out of " + questions.length + ". Try again!";
    
}

// Add event listener to the start-game button to restart game
document.getElementById('start-game').addEventListener('click', restart);
  }

//function to restart game
function restart() {
    document.getElementById('end-game').style.display = "none";
    currentQuestion = 0;
    correctAnswers = 0;
    gameStart();
    }

// calls the rules function to start
rules();
