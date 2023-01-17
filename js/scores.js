var highScoresEL = document.querySelector('#highscores');
var clearScoreEL = document.querySelector('#clear');

function displayScores(){
    for(i=0;i<localStorage.length;i++){
        var li_item=document.createElement('li');
        li_item.textContent = localStorage.key(i) + '-' + localStorage.getItem(localStorage.key(i));
        highScoresEL.appendChild(li_item);
    }
}

function clearScores(){
    localStorage.clear();
    location.reload();
}

clearScoreEL.addEventListener('click',()=>clearScores());
displayScores();