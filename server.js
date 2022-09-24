const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const PORT = proces.env.PORT || 3001;
const sequelize = require("./config/connection");