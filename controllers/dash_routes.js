const dash = require("express").Router();
const models = require("../models");






dash.get("/", async (req, res) =>{
        res.render("dash");
})






module.exports = dash;