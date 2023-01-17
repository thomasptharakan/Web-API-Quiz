var questionsdiv = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var choices = document.querySelector("#choices");
var timeSpan = document.querySelector("#time");
var endScreen = document.querySelector("#end-screen");
var answerBarLine = document.querySelector('#answerBarLine')
var answerStatus = document.querySelector('#answerStatus');

var currentQuestionIndex = 0;
var timer=80;
var score=0;


function displayQuestions(currentQuestion){
    alert('in here');
    startScreen.setAttribute("class","hide");
    questionsdiv.setAttribute("class","start");
    timeSpan.textContent = timer;
    getQuestions();
    countdown();
    
}


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
        timer = timer - 20;
        answerStatus.textContent = 'Wrong';
    }
    
    if (currentQuestionIndex<(questions.length)){
        getQuestions();
    }else{
        alert('Game Over');
        gameOver();
    }
    
}

function gameOver(){
    questionsdiv.setAttribute("class","hide");
    endScreen.setAttribute("class","start");
}

function countdown() {
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      timer--;
      timeSpan.textContent = (timer>1 ? `${timer} seconds remaining` : `${timer} second remaining`);
      if (timer == 0){
        timeSpan.textContent = '';
        clearInterval(timeInterval);
        gameOver();
      }
    }, 1000);
  }

//() avoids having the function executed on pageLoad
startButton.addEventListener("click",() => displayQuestions());