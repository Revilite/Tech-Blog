const home  = require("express").Router();
const User = require("../models/users");





home.get("/login", async(req, res) =>{
    
    res.render("login")
})

home.post("/login", async(req, res) =>{
})
home.get("/", async (req, res) =>{ //needs to be absolutley last
    res.render('all');
})



module.exports = home;