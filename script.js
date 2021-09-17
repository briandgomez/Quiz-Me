//Reference to body
var body = document.body
var highScoreEl = document.getElementById("view-high-score");
var timerEl = document.getElementById("time");

//Display title, message and start button
var quizTitle = document.createElement('h1');
quizTitle.textContent = 'Coding Quiz Challenge';
quizTitle.setAttribute('style', 'text-align:center');
quizTitle.addClassName = 
document.body.appendChild(quizTitle);

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
    firstQuestion();
});

//Quiz questions
var parent = document.createElement('div');

function firstQuestion() {
    quizTitle.style.display ='none';
    quizMessage.style.display ='none';
    startButton.style.display ='none';

    //Object that contains questions
    var questions = [
        {
            question: 'What does HTML stand for?',
            choices: ['Hypertext Markup Language','Hypertool and Markup Language', 'c.	Hypertext Match Language','d.	None of the above'],
            answer: choices[0],
        }
    ]
}
