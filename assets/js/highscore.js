
// function for local storage of highscore
function printHighScores () {
    var highscores = JSON.parse(window.localStorage.getItem(highscores)) || [];
    console.log()
}

var liTag = document.createElement("li");
liTag.textContent = highscores[i].yourName + ' - ' + highscores[i].clearHighScores

// View scores stored
var olEL =document.getElementById ('highscores');
olEL.appendChild (liTag);

// clear highscores and reload page
function clearHighScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload ();
}

document.getElementById('clear').onclick = clearHighScores;
printHighScores ();
