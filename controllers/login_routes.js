const login = require("express").Router();
const models = require("../models");


login.get("/", async(req, res) =>{
    res.render("login");
})

login.post("/",  async(req, res) =>{


});

login.put("/", async(req, res) =>{
    try{
        const data = await models.User.findAll();
        
        }
    catch(err){
    }})
    

module.exports = login;