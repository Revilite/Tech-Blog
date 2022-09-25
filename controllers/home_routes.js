const home  = require("express").Router();
const models = require("../models");


home.get("/", async (req, res) =>{ 
    


    res.render('home', );
})



module.exports = home;