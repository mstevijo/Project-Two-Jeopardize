$(document).ready(function() {
  var loginForm = $("form.login");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");
  var signUpBtn = $("#sign-up-btn");

  signUpBtn.on("click", function(event) {
    event.preventDefault();
    window.location.replace("registration");
  });

  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });



  function loginUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password
    })
      .then(function() {
        window.location.replace("index");
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
