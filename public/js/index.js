$(document).ready(function () {
  $(".play-btn").on("click", start);

  $(".logout-btn").on("click", function (event) {
    console.log('click')
    window.location.replace("login");
  });

  //function that starts game!
  function start() {
    console.log('click!');
    $.get('/questions', function (data) {
      window.location = "/questions"
    })
  }
});