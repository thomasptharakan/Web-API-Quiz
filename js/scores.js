var highScoresEL = document.querySelector('#highscores');
var clearScoreEL = document.querySelector('#clear');

//display scores from local storage
function displayScores(){
    for(i=0;i<localStorage.length;i++){
        var li_item=document.createElement('li');
        li_item.textContent = localStorage.key(i) + '-' + localStorage.getItem(localStorage.key(i));
        highScoresEL.appendChild(li_item);
    }
}

//cleares scores from local storage
function clearScores(){
    localStorage.clear();
    location.reload();
}

//add lister to clear score button.
clearScoreEL.addEventListener('click',()=>clearScores());
displayScores();