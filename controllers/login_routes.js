const login = require("express").Router();
const models = require("../models");


login.get("/", async(req, res) =>{
    res.render("login");
})

login.post("/",  async(req, res) =>{ //Sign Up
try{
    const data = await models.User.create({
        username: req.body.username,
        password: req.body.password,
        isOnline: true,
    })
    req.session.save(() => {
        req.session.isOnline = true;
    });
    res.status(200).json(data);
}
catch(err){
    res.status(500).json(err);
    throw err;
}
});

module.exports = login;