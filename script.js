//Reference to body
var body = document.body
var headerEl = document.querySelector("#view-high-score");
var timerEl = document.querySelector("#time");

//View high scores (Save to localStorage)
function viewHighScore() {

}

//Countdown until 0 and end quiz
function timer() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
            clearInterval(timeLeft);
            //Display message here
        }
        else {
            timeLeft--;
            timerEl.textContent = timeLeft + 'seconds left';
        }
    }, 1000)
}

var startQuiz = function() {
    var startButton = document.querySelector("#start-btn");
    startButton.onclick = timer();
}