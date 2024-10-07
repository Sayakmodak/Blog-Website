const express = require("express");
const route = express.Router();

const authControllers = require("../controller/authController");


route.post("/register", authControllers.register);

route.post("/login", authControllers.login);

route.post("/logout", authControllers.logout);

module.exports = route;