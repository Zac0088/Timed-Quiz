var welcomeScreen = document.getElementById("welcomeScreen");
var highScoresBoard =document.getElementById("highScoreSection");
var submit = document.getElementById("submit");
var questionTitle = document.getElementById("question");
var answersListParent = document.getElementById("answers");
var timerDisplay = document.getElementById("timer");
var beginQuizBtn = document.getElementById("beginQuizBtn");
var questionScreen = document.getElementById("QuestionScreen");

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

]