//Reference to body
var body = document.body

//Variables retrieved from HTML
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

//Global variables used by the functions
var currentTime = 50;
var currentQuestion = 0;
var currentScore = 0;

//Questions array
var questionObject = [
    {
        q: '1. What does ‘HTML’ stand for?',
        a: [
            'Hypertext Markup Language', 'Hypertool Markup Language', 'Hypertext Match Language'
        ],
        correct: 'Hypertext Markup Language'
    },
    {
        q: '2. Arrays are created using which of the following?',
        a: [
            'parentheses', 'curly brackets', 'brackets'
        ],
        correct: 'brackets'
    },
    {
        q: '3. How do you initialize flexbos when using CSS?',
        a: [
            'display: flex', 'display flex', 'display: block'
        ],
        correct: 'display: flex'
    },
    {
        q: '4. Commonly used data types do NOT include:',
        a: [
            'strings', 'booleans', 'alerts'
        ],
        correct: 'alerts'
    },
    {
        q: '5. How do you create a numbered list?',
        a: [
            '<ul>', '<ol>', '<nl>'
        ],
        correct: '<ol>'
    },

]

//Starts timer
function startTimer() {

    var timeInterval = setInterval(function () {
        //Stops timer when time runs out
        if (currentTime === 0) {
            clearInterval(timeInterval);
        }
        //Countdown for timer
        else {
            currentTime--;
            timerEl.textContent = 'Time:' + currentTime;
        }
    }, 1000)

}

//Clears 'intro' items(title, message, button) and calls questions
function startQuiz() {
    quizTitle.style.display = 'none';
    quizMessage.style.display = 'none';
    startButton.style.display = 'none';

    questions();
}

//Displays questions
function questions() {
    //Assigns question to div element
    console.log('Current question', currentQuestion);
    if (currentQuestion >= questionObject.length || currentTime === 0) {
        return checkHighScore();
    }

    questionEl.textContent = questionObject[currentQuestion].q

    //Clears answers div element
    answerEl.textContent = '';

    //Iterates through the length of the answers
    for (var i = 0; i < questionObject[currentQuestion].a.length; i++) {
        var answerbutton = document.createElement('button');
        answerbutton.textContent = questionObject[currentQuestion].a[i];
        answerbutton.addEventListener('click', function(){
            checkAnswer(this.textContent);
        });
        answerEl.appendChild(answerbutton);
    }
}



function checkAnswer(answer) {
    var correctSelected = questionObject[currentQuestion].correct;
    console.log('Answer', answer);

    if (answer === correctSelected) {
        //console.log(correctSelected)
        currentScore++;
        //console.log(currentScore)
    } else {
        console.log('incorrect')
        currentTime -= 10;
    }

    currentQuestion++;
    console.log('Checkanswers icnrement', currentQuestion);
    questions();
}

function checkHighScore() {
    //Assigns a variable with the value of the highscore
    var currentHighScore = localStorage.getItem('quizHighScore');

    //Checks if a high score currently exists OR if the current score is is greater than the high score
    if (!currentHighScore || currentHighScore < currentScore) {
        var userInitials = prompt('Enter your initals')
        localStorage.setItem('quizHighScore', currentScore);
        localStorage.setItem('quizHighInitials', userInitials)
    } else {
        alert('Current score was not high enough' + ' Your score: ' + currentScore);
    }

    alert('High Score: ' + currentHighScore);
}

//Add event listener for button to move onto next page
startButton.addEventListener('click', function () {
    startTimer();
    startQuiz();
});