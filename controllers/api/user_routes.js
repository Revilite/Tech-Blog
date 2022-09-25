const users = require("express").Router();
const models = require("../../models");




users.get("/", async (req, res) =>{
    try{
        const data = await models.User.findAll();
        res.status(200).json(data);
     
    }
    catch (err){
        res.status(500).json(err);
        throw err;
    }
})


module.exports = users;