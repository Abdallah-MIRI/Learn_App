const express = require("express");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const { routerHomePage } = require("./routes/homeRouter");

const app = express();

// إعداد EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// راوت المنتجات
app.use("/", productRoutes);
app.use("/", routerHomePage);

module.exports = app;
