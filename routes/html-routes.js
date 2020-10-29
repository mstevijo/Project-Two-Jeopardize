let isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    if (req.user) {
      return res.redirect("/index");
    }
    return res.redirect("/login");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/registration", function (req, res) {
    res.render("registration")
  });

  app.get("/jeopardyBoard", function (req, res) {
    res.render("jeopardyBoard");
  });

  app.get("/clue", function (req, res) {
    res.render("clue");
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  //Renders home screen for game
  app.get("/index", function (req, res) {
    res.render("index");
  })

  //Renders game board
  // app.get("/questions", function (req, res) {
  //   res.render("jeopardyBoard");
  // })
};
