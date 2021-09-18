//Reference to body
var body = document.body
var highScoreEl = document.getElementById("view-high-score");
var timerEl = document.getElementById("time");
var containerEl = document.getElementsByClassName("container");
var questionEl = document.getElementById("question-element");
var answerEl = document.getElementById("answer-element");

//Display title, message and start button
var quizTitle = document.createElement('h1');
quizTitle.textContent = 'Coding Quiz Challenge';
quizTitle.setAttribute('style', 'text-align:center');
quizTitle.addClassName = document.body.appendChild(quizTitle);

var quizMessage = document.createElement('p');
quizMessage.textContent = 'Answer the following questions related to javascript. Everytime you select a incorret answer the timer will decrease by 10 seconds!';
quizMessage.setAttribute('style', 'text-align:center');
document.body.appendChild(quizMessage);

var startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.style.display = 'flex';
startButton.style.margin = 'auto';
document.body.appendChild(startButton);

//Add event listenre for button to move onto next page
startButton.addEventListener('click', function () {
    startTimer();
    startQuiz();
});

var currentTime = 5;
//Start timer
function startTimer() {

    var timeInterval = setInterval(function () {
        //
        if (currentTime === 0) {
            clearInterval(timeInterval);

            //Function to submit initials and score 
        }
        else {
            currentTime--;
            timerEl.textContent = 'Time:' + currentTime;
        }
    }, 1000)

}


function startQuiz() {
    quizTitle.style.display = 'none';
    quizMessage.style.display = 'none';
    startButton.style.display = 'none';

    //Function that displays and iterates through questions
    questions();
}


var currentQuestion = 0;
var questionObject = [
    {
        q: '1.	What does ‘HTML’ stand for?',
        a: [
            'a', 'b', 'c'
        ],
        correct: 'c'
    },
    {
        q: '2. What is?',
        a: [
            'd', 'e', 'f'
        ],
        correct: 'c'
    },

]


function questions() {
    questionEl.textContent = questionObject[currentQuestion].q

    //Clears answers
    answerEl.textContent = '';

    for (var i = 0; i < questionObject[currentQuestion].a.length; i++) {
        var answerbutton = document.createElement('button');
        answerbutton.textContent = questionObject[currentQuestion].a[i];
        answerbutton.onclick = checkAnswer;
        answerEl.appendChild(answerbutton);
    }
}


function checkAnswer() {
    currentQuestion++;
    questions();
}

var currentScore = 5;

function checkHighScore() {
    var currentHighScore = localStorage.getItem('quizHighScore');

    if (!currentHighScore || currentHighScore < currentScore) {
        var userInitials = prompt('Enter your initals')
        localStorage.setItem('quizHighScore', currentScore);
        localStorage.setItem('quizHighInitials', userInitials)
    } else {
        alert('Current score was not high enough');
    }
}
