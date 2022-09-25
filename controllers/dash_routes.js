const dash = require("express").Router();
const User = require("../models/users");






dash.get("/", async (req, res) =>{
        res.render("dash");
})






module.exports = dash;