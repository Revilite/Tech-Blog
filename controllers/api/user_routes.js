const users = require("express").Router();
const models = require("../../models");




users.get("/", async (req, res) =>{
    try{
        const data = await models.User.findAll();
        return res.status(200).json(data);
     
    }
    catch (err){
        res.status(500).json(err);
        throw err;
    }
})

users.post("/", async (req, res) =>{
    
    const data = await models.User.findOne({ where: { username: req.body.username } });
        if(!data){
            res.status(400)
            .json({message: "incorrect email or password, please try again"});
            return;
        }        

        const validPassword = await data.checkPassword(req.body.password);
        console.log(validPassword);
        if(!validPassword) {
            res.status(400)
            .json({message: "incorrect email or password, please try again"});
        }   
        req.session.save(() =>{
            req.session.username = data.id;
            req.session.isOnline = true;

            res.json({user : username, message: "You are now logged in!"});
        })
})



module.exports = users;