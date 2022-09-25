const home  = require("express").Router();
const User = require("../models/users");





home.get("/login", async(req, res) =>{
        res.render("login");
})

home.post("/login",  async(req, res) =>{
    try{
        const data = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        res.status(200).json(data);
    }
    catch (err){
        res.status(500).json(err);
        throw err;
    }
    
})

home.get("/", async (req, res) =>{ //needs to be absolutley last
    res.render('all');
})



module.exports = home;