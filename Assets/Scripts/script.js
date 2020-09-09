// Define elements and console.log to make sure
var highScoreEl = document.getElementById("highScoreEl");
var timerEl = document.getElementById("timerEl");
var cardContainerEl = document.getElementById("cardEl");
var buttonContainerEl = document.getElementById("buttonContainer");
var pageTitleEl = document.getElementById("pageTitleEl");
var questionDisplayEl = document.getElementById("questionDisplayEl");
var beginQuizBtn = document.getElementById("beginQuizBtn");
var potentialAnswer = document.getElementsByClassName("potentialAnswer");
var initialsInput = document.getElementById("initialsInput");
var submitButton = document.getElementById("submitButton");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var lineEl = document.getElementById("lineId");
var resultText = document.getElementById("resultText");
var currentScoreEl = document.getElementById("currentScoreEl");
var highScoreContainer = document.getElementById("highScoreContainer");
var initialsCol = document.getElementById("initialsCol");
var highScoreCol = document.getElementById("highScoreCol");
var currentScore = 0;
var timerCount = 100;
var currentPage = 0;
var playerScore = 0;

var submissionDetails = [

]


// ---------Object array that holds question and answer content
// -----------------------------------------------------------------------------
var gamePageArray = [
    {
      page: 1,
      title: "Question 1",
      question: "Is this question 1?",
      answers: ["answer 1", "answer 2", "answer 3"],
      correctAnswer: "correct answer",
    },
    {
        page: 2,
        title: "Question 2",
        question: "Is this question 2?",
        answers: ["answer 1", "answer 2", "answer 3"],
        correctAnswer: "correct answer",
        
    },
    {
        page: 3,
        title: "Question 3",
        question: "Is this question 3?",
        answers: ["answer 1", "answer 2", "answer 3"],
        correctAnswer: "correct answer",
    },
    {
        page: 4,
        title: "Question 4",
        question: "Is this question 4?",
        answers: ["answer 1", "answer 2", "answer 3"],
        correctAnswer: "correct answer",
    }
]

// ----------------------- start game conditions==============================
// Add event listener to the beginQuizBtn to start timer
beginQuizBtn.addEventListener("click", function(event){
    setTimer();
    renderPage1();
});

// Define a setTimer function which is triggered on a click event of the beginQuizBtn
function setTimer(){
timeInterval = setInterval(() => {
    timerCount--;

if(timerCount < 1){
    clearInterval(timeInterval);
    timerEl.textContent = "Time's up!"
}else{
    timerEl.textContent = "Time: " + timerCount
}
}, 1000);
}



// ==================================================================

function updateScore(){
    var newScore = (currentScore + 100) + (timerCount *2);
    currentScore = currentScore + newScore;
    currentScoreEl.textContent = "Current Score: " + currentScore;
}



// Write a function for when the var currentPage > 4 to display the High Score Page

// Function renders answers (this should be optimized so that it's not tied to the actual page)
function renderPage1(){
    beginQuizBtn.classList.add("hideMe");
    answer1.classList.remove("hideMe");
    answer2.classList.remove("hideMe");
    answer3.classList.remove("hideMe");
    answer4.classList.remove("hideMe");
    resultText.classList.remove("hideMe")
    if(currentPage = 1){
    pageTitleEl.textContent = gamePageArray[0].title;
    questionDisplayEl.textContent = gamePageArray[0].question;
    answer1.textContent = gamePageArray[0].answers[2];
    answer2.textContent = gamePageArray[0].answers[0];
    answer3.textContent = gamePageArray[0].correctAnswer;
    answer4.textContent = gamePageArray[0].answers[1];  
    }
};

function renderPage2(){
    if(currentPage = 2){
        pageTitleEl.textContent = gamePageArray[1].title;
        questionDisplayEl.textContent = gamePageArray[1].question;
        answer1.textContent = gamePageArray[1].answers[1];
        answer2.textContent = gamePageArray[1].answers[2];
        answer3.textContent = gamePageArray[1].answers[0];
        answer4.textContent = gamePageArray[1].correctAnswer;
    }
};
function renderPage3(){
    if(currentPage = 3){
        pageTitleEl.textContent = gamePageArray[2].title;
        questionDisplayEl.textContent = gamePageArray[2].question;
        answer1.textContent = gamePageArray[2].answers[1];
        answer2.textContent = gamePageArray[2].correctAnswer;
        answer3.textContent = gamePageArray[2].answers[0];
        answer4.textContent = gamePageArray[2].answers[2];
    }
};
function renderPage4(){
    if(currentPage = 4){
        pageTitleEl.textContent = gamePageArray[3].title;
        questionDisplayEl.textContent = gamePageArray[3].question;
        answer1.textContent = gamePageArray[3].correctAnswer;
        answer2.textContent = gamePageArray[3].answers[2];
        answer3.textContent = gamePageArray[3].answers[0];
        answer4.textContent = gamePageArray[3].answers[1];
    }
};

function renderPage5(){
    pageTitleEl.textContent = "Quiz Complete";
    timerCount = 0;
    questionDisplayEl.textContent = "Enter your initials to log your high score!"
    answer1.classList.add("hideMe");
    answer2.classList.add("hideMe");
    answer3.classList.add("hideMe");
    answer4.classList.add("hideMe");
    initialsInput.classList.remove("hideMe");
    submitButton.classList.remove("hideMe");

}

answer1.addEventListener("click", function(){
    if(answer1.textContent !== gamePageArray[3].correctAnswer){
        timerCount = timerCount - 10;
    }else if(answer1.textContent === gamePageArray[3].correctAnswer){
        resultText.textContent = "Great job!"
        updateScore();
        renderPage5();
    }
})

answer2.addEventListener("click", function(){
    if(answer2.textContent !== gamePageArray[2].correctAnswer){
        timerCount = timerCount - 10;
    }else if(answer2.textContent === gamePageArray[2].correctAnswer){
        resultText.textContent = "You got it!"
        updateScore();
        renderPage4();
    }
})

answer3.addEventListener("click", function(){
    if(answer3.textContent !== gamePageArray[0].correctAnswer){
        timerCount = timerCount - 10;
    }else if(answer3.textContent === gamePageArray[0].correctAnswer){
        resultText.textContent = "So easy!"
        updateScore();
        renderPage2();
    }
})

answer4.addEventListener("click", function(){
    if(answer4.textContent !== gamePageArray[1].correctAnswer){
        timerCount = timerCount - 10;
    }else if(answer4.textContent === gamePageArray[1].correctAnswer){
        resultText.textContent = "Yep"
        updateScore();
        renderPage3();
    }
})

// push inputs into submissionDetails Object and store in local storage
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    retrieveResults();
    storeResults();
    
    renderPage6();
});

function renderPage6(){
    if(currentPage = 6){
        pageTitleEl.textContent = "High Scores";
        questionDisplayEl.classList.add("hideMe");
        submitButton.classList.add("hideMe");
        answer1.classList.add("hideMe");
        answer2.classList.add("hideMe");
        answer3.classList.add("hideMe");
        answer4.classList.add("hideMe");
        resultText.classList.add("hideMe");
        highScoreContainer.classList.remove("hideMe");
       

    }
};

// TODO:EVERYTHING BELOW IS TRYING TO STORE RESULTS, PULL RESULTS AND HIGH SCORE PAGE (DELETE TO HERE IF ISSUES)
// ==================== function for storing info================

function storeResults (){
    var recordScore = currentScore;
    // submissionDetails.sessionScore.push(sessionScore);
    submissionDetails.push(
        {
            initials: initialsInput.value,
            score: recordScore
        }
        );
    localStorage.setItem('playerRecord', JSON.stringify(submissionDetails));
}

// retrieve scores from storage
function retrieveResults(){
    var storedScores = JSON.parse(localStorage.getItem("playerRecord"));
    if(storedScores !== null){
        storedScores.push(submissionDetails);
    }
    console.log(storedScores);
    renderHighScores();
};



// ================ rendering results========================
function renderHighScores() {
    // Clear todoList element and update todoCountSpan
  
    // Render a new H5 for each Name and High Score
    for (var i = 0; i < submissionDetails.length; i++) {
      var quizzer = document.createElement("h5");
      quizzer.setAttribute("style", "font-weight: 400; text-decoration: underline; margin-bottom: 5px;");
      quizzer.textContent = `${submissionDetails[i].initials}: ${submissionDetails[i].score}`
      initialsCol.appendChild(quizzer);
      
    }
  }





// TODO: Create a conditional based on the window.location to control which functions are run


// function highScorePage(){
//     // TODO: update highScore page with initials and high score
//     localStorage.getItem('testObject', parse(submissionDetails));
//     console.log(submissionDetails);
//     var winnerName = document.createElement("h5");
//     winnerName.textContent = submissionDetails.initials;
//     initialsCol.appendChild(winnerName);
//     var winnerScore = document.createElement("h5")
//     winnerScore.textContent = submissionDetails.highScore;
//     highScoreCol.appendChild(winnerScore)

// }





    
//     else if (page === 2)else if( page === 3){
//         pageTitleEl.textContent = gamePageArray[currentPage].title;
//         questionDisplayEl.textContent = gamePageArray[currentPage].question;
//         answer1.textContent = gamePageArray[currentPage].correctAnswer;
//         answer2.textContent = gamePageArray[currentPage].answers[2];
//         answer3.textContent = gamePageArray[currentPage].answers[1];
//         answer4.textContent = gamePageArray[currentPage].answers[0];
//     }else if (page === 4){
//         pageTitleEl.textContent = gamePageArray[currentPage].title;
//         questionDisplayEl.textContent = gamePageArray[currentPage].question;
//         answer1.textContent = gamePageArray[currentPage].answers[2];
//         answer2.textContent = gamePageArray[currentPage].correctAnswer;
//         answer3.textContent = gamePageArray[currentPage].answers[0];
//         answer4.textContent = gamePageArray[currentPage].answers[1];
//     }
// }

