function printHighScores () {
    var highscores = JSON.parse(window.localStorage.getItem(highscores)) || [];
    console.log()
}

function clearHighScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload ();
}

document.getElementById('clear').onclick = clearHighScores;
printHighScores ();