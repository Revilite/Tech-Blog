const users = require("express").Router();
const User = require("../../models/users");




users.get("/", (req, res) =>{
    try{
        // console.log("get request recieved")
        // const data = User.findAll();
        // res.status(200).json(data);
        res.send("Hello World");
    }
    catch (err){
        res.status(500).json(err);
        throw err;
    }
})

users.post("/", async (req, res) =>{
    try{
        const data = User.create({
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



module.exports = users;