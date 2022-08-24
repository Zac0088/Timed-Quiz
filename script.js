var startButton = document.getElementById("beginQuiz");
var submit = document.getElementById("submit");
var timer = document.getElementById("timer");
var clear = document.getElementById("clear");
var goBack = document.getElementById("goBack");

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