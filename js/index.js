//Declare pointers to the the key elements
var questionsdiv = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var choices = document.querySelector("#choices");
var timeSpan = document.querySelector("#time");
var endScreen = document.querySelector("#end-screen");
var answerBarLine = document.querySelector('#answerBarLine')
var answerStatus = document.querySelector('#answerStatus');
var finalScore = document.querySelector("#final-score");
var submitScore =document.querySelector('#submit');

//Define counter, timer, score and endgame variables.
var currentQuestionIndex = 0;
var timer=80;
var score=0;
var endGame = false;

//Displays the questions and hides the start screen
function displayQuestions(currentQuestion){
    startScreen.setAttribute("class","hide");
    questionsdiv.setAttribute("class","start");
    timeSpan.textContent = timer;
    getQuestions();
    countdown();
    
}

//Controls the display of the current question and options
function getQuestions(){
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    questionsdiv.children[1].textContent = currentQuestion.question;
    for (i=0;i<currentQuestion.choices.length;i++){
        var choice = document.createElement("button");
        choice.textContent = currentQuestion.choices[i];
        choice.onclick = handleClick;
        //choice.addEventListener("click",() => handleClick();
        choices.appendChild(choice);
    }
}

//Check answers and allocates points
function handleClick(){
    //Get Current choice
    var choice = this.textContent;
    
    //Get Answer
    var answer = questions[currentQuestionIndex].answer;
    //Increment Answer
    currentQuestionIndex++;
    
    //display answer status
    answerBarLine.removeAttribute('class');
    answerStatus.removeAttribute('class');

    //Check Answer
    if (choice===answer){
        //Increment Score and return to next question
        answerStatus.textContent = 'Correct';
    }else{
        timer = (timer>21? timer = timer - 20 : timer = 0);
        answerStatus.textContent = 'Wrong';
    }
    
    if (currentQuestionIndex<(questions.length)){
        getQuestions();
    }else{
        alert('Game Over');
        endGame = true;
        gameOver();
    }
    
}

//Handles games over conditions
function gameOver(){
    questionsdiv.setAttribute("class","hide");
    endScreen.setAttribute("class","start");
    timer=( timer<0 ?0 : timer);
    finalScore.textContent = timer;

}


//Countdown timer
function countdown() {
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      if (timer>0){
        timer--;
      }
      timeSpan.textContent = timer;
      if ((timer < 1)||(endGame)){
        clearInterval(timeInterval);
        gameOver();
      }
    }, 1000);
}

//Storing scores and initials to Local storage.
function submitScores(){
    var initial = document.querySelector('#initials').value;
    localStorage.setItem(initial,timer);
    window.location.href = "highscores.html";
}

//adding listeners to the buttons
//() avoids having the function executed on pageLoad
startButton.addEventListener("click",() => displayQuestions());
submitScore.addEventListener("click",()=> submitScores());