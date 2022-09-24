const home  = require("express").Router();



home.get("/login", async(req, res) =>{
    res.render("login")
})

home.get("*", async (req, res) =>{
    console.log("get requested");
    res.render('all');
})

module.exports = home;