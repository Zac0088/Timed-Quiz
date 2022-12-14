
// quiz questions
var questions = [
    {
        title: "commonly used data types DO NOT include?",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Arrays in javascript can be used to store what?",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"

    },
    {
        title: "A very useful tool used during development and debugging for printing content to debugger is? ",
        choices: ["javascript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "The condition in an if/else statement is enclosed within?",
        choices: ["quotes", "curly brackets", "paraentheses", "square brackets"],
        answer: "curly brackets"
    },
    {
        title: "string values must be enclosed within____ when being assigned to variables",
        choices: ["commas", "curley brackets", "quotes", "perentheses"],
        answer: "commas"
    }
 ];
// Variables given
 var welcomeScreen = document.getElementById("welcomeScreen");
 var highScoresBoard = document.getElementById("highScoreSection");
 var submit = document.getElementById("submit");
 var questionTitle = document.getElementById("question");
 var answersListParent = document.getElementById("answers");
 var timerDisplay = document.getElementById("timer");
 var beginQuizBtn = document.getElementById("beginQuizBtn");
 var questionScreen = document.getElementById("questionScreen");
 questionScreen.style.display = "none";
 highScore.style.display = "none";



 var questionAskedIndex = 0;
 var time= 60;
 var quizTimer;
// start quiz function
 function startQuiz(){
    welcomeScreen.style.display = "none";
    questionScreen.style.display ="block";
    startQuizTimer();
    timerDisplay.textContent = time;
    startQuestions();
 }
// start quiztimer function
 function startQuizTimer(){
    quizTimer = setInterval(function(){
        time--;
        timerDisplay.textContent= time;
      if(time < 0){
        time = 0;
        endQuiz();
      }
        
        
    }, 1000)
 }
// start questions function
 function startQuestions() {
    var currentQuestion = questions[questionAskedIndex].title;
    questionTitle.textContent = currentQuestion;
    answersListParent.innerHTML = "";
    var currentQuestionAnswers = questions[questionAskedIndex].choices;
    currentQuestionAnswers.forEach(function (answer) {
        var answerButton = document.createElement("button");
        answerButton.setAttribute("value", answer)
        answerButton.textContent = answer;
        answerButton.onclick = checkAnswerSelected

        answersListParent.appendChild(answerButton);
    })
}
// check answers function 
 function checkAnswerSelected() {
    var answerSelected = this.value;
    if (answerSelected === questions[questionAskedIndex].answer) {
        alert("correct")
    } else{
     alert("wrong")
     time -=10;
     if (time <= 0){
        endQuiz();
     }
        timerDisplay.textContent = time;
    }
    questionAskedIndex++;
    console.log(questionAskedIndex)
    if (questionAskedIndex === questions.length){
        endQuiz();
    }
    startQuestions();
    }
// end quiz function
    function endQuiz(){
        clearInterval(quizTimer);
        questionScreen.style.display ="none";
        highScore.style.display = "block";
        var scoreDisplay = document.getElementById("scoreDisplay");
        scoreDisplay.textContent = "Your Score " + time;

        var submit = document.getElementById("submit");
        submit.onclick = function(){
            var highscores = JSON.parse(localStorage.getItem("highscores")) || []
            var yourName = document.getElementById("yourName").value;
            var scoreObject = {
                name: yourName,
                score: time
            }
            highscores.push(scoreObject);
            localStorage.setItem("highscores", JSON.stringify(highscores))

            window.location.href = "highscores.html";
        }
        }
    



    beginQuizBtn.onclick = startQuiz;