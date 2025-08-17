const express = require("express");
const routerHomePage = express.Router();
const { homePage } = require("../controllers/homeConteroller");

routerHomePage.get("/", homePage);

module.exports = {
  routerHomePage,
};
