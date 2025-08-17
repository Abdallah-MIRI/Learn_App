function homePage(req, res) {
  res.render("home", {
    title: "Home",
    description: "This App Create ❤ Abdallah MIRI ",
  });
}

module.exports = {
  homePage,
};
