var questionsdiv = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var choices = document.querySelector("#choices");
var timeSpan = document.querySelector("#time");

var currentQuestionIndex = 0;

var timer=0;

function displayQuestions(currentQuestion){
    alert('in here');
    startScreen.setAttribute("class","hide");
    questionsdiv.setAttribute("class","start");
    timeSpan.textContent = timer;
    getQuestions();
    
    
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
    var choice = this.textContent;
    var answer= questions[currentQuestionIndex].answer;
    currentQuestionIndex++;
    if (choice===answer){
        return;
    }else{
        timer = timer - 10;
    }
    if (currentQuestionIndex<(questions.length)){
        getQuestions();
    }else{
        alert('Game Over');
    }
    
}

//() avoids having the function executed on pageLoad
startButton.addEventListener("click",() => displayQuestions());