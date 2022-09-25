const users = require("express").Router();
const User = require("../../models/users");




users.get("/", async (req, res) =>{
    try{
        const data = await User.findAll();
        res.status(200).json(data);
     
    }
    catch (err){
        res.status(500).json(err);
        throw err;
    }
})


module.exports = users;