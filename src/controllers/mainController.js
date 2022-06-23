const controllers = {
  index: (req, res) => {
    res.render("index");
  },
  cart:(req, res) => {
    res.render("productCart");
  },
  details:(req, res) => {
    res.render("productDetail");
  },
  register:(req, res) => {
    res.render("register");
  },
  login:(req, res) => {
    res.render("login");
  },
};

module.exports = controllers;
