// Define elements and console.log to make sure
var highScoreEl = document.getElementById("highScoreEl");
var timerEl = document.getElementById("timerEl");
var cardContainerEl = document.getElementById("cardEl");
var pageTitleEl = document.getElementById("pageTitleEl");
var questionDisplayEl = document.getElementById("questionDisplayEl");
var beginQuizBtn = document.getElementById("beginQuizBtn");
var potentialAnswer = document.getElementsByClassName("potentialAnswer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var lineEl = document.getElementById("lineId");
var resultText = document.getElementById("resultText");
var timerCount = 100;
var currentPage = 0;

var gamePageArray = [
    {
        page: 0
    },
    {
      page: 1,
      title: "Question 1",
      question: "Is this question 1?",
      answers: ["answer 1", "answer 2", "answer 3"],
      correctAnswer: "correct answer"  
    },
    {
        page: 2,
        title: "Question 2",
        question: "Is this question 2?",
        answers: ["answer 1", "answer 2", "answer 3"],
        correctAnswer: "correct answer"  
    },
    {
        page: 3,
        title: "Question 3",
        question: "Is this question 3?",
        answers: ["answer 1", "answer 2", "answer 3"],
        correctAnswer: "correct answer"  
    },
    {
        page: 4,
        title: "Question 4",
        question: "Is this question 4?",
        answers: ["answer 1", "answer 2", "answer 3"],
        correctAnswer: "correct answer"  
    }
]

// Add event listener to the beginQuizBtn to start timer
beginQuizBtn.addEventListener("click", function(event){
    setTimer();
    pageChange();
    
});

// Define a setTimer function which is triggered on a click event of the beginQuizBtn
function setTimer(){
timeInterval = setInterval(() => {
    timerCount--;

if(timerCount === 0){
    clearInterval(timeInterval);
    timerEl.textContent = "Time's up!"
}else{
    timerEl.textContent = "Time: " + timerCount
}
}, 1000);
}

function pageChange () {
    currentPage ++;
    beginQuizBtn.classList.add("hideMe");
    answer1.classList.remove("hideMe");
    answer2.classList.remove("hideMe");
    answer3.classList.remove("hideMe");
    answer4.classList.remove("hideMe");
    pageTitleEl.textContent = gamePageArray[currentPage].title;
    questionDisplayEl.textContent = gamePageArray[currentPage].question;

    // I want to build a randomizer here
    answer1.textContent = gamePageArray[currentPage].answers[2];
    answer2.textContent = gamePageArray[currentPage].answers[0];
    answer3.textContent = gamePageArray[currentPage].correctAnswer;
    answer4.textContent = gamePageArray[currentPage].answers[1];
    
}

