// Define elements and console.log to make sure
var highScoreEl = document.getElementById("highScoreEl");
var timerEl = document.getElementById("timerEl");
var cardContainerEl = document.getElementById("cardEl");
var pageTitleEl = document.getElementById("pageTitleEl");
var questionDisplayEl = document.getElementById("questionDisplayEl");
var beginQuizBtn = document.getElementById("beginQuizBtn");
var answerBtnEl = document.getElementsByClassName("answerBtn");
var lineEl = document.getElementById("lineId");
var resultText = document.getElementById("resultText");
var timerCount = 10;


beginQuizBtn.addEventListener("click", function(event){
    setTimer();

});

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