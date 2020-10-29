$(document).ready(function () {

  var answerForm = $(".answer");
  var answerInput = $("#answer-input");
  var gameScore = 0
  var questionsRemaining = 30

  answerForm.on("submit", function (event) {
    event.preventDefault();
    console.log(questionObj);
    questionsRemaining = questionsRemaining--;
    var userAnswer = answerInput.val();
    checkAnswer(userAnswer, questionsRemaining);
  });

  function checkAnswer(userAnswer, questionsRemaining) {
    var correctAnswer = questionObj.answer

    if (correctAnswer.toUpperCase() == userAnswer.toUpperCase()) {
      gameScore = gameScore + questionObj.value;
      $(".jumbotron").text("Correct!   Score: $" + gameScore);
      positionChecker(questionsRemaining);
    } else {
      gameScore = gameScore - questionObj.value;
      $(".jumbotron").text("Incorrect! Correct answer: " + questionObj.answer + "   Score: $" + gameScore);
      positionChecker(questionsRemaining);
    }
  };

  function positionChecker(questionsRemaining) {
    if (questionsRemaining < 1) {
      alert("Your final score is: " + gameScore)
      window.location.replace("index");
    }
  }

  $(".logout-btn").on("click", function (event) {
    event.preventDefault();
    window.location.replace("login");
  });
});      