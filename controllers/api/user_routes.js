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

users.post("/", async (req, res) =>{  // Login
    const updatedData = await models.User.update({isOnline : true},{
        where: {
            username: req.body.username,
        }
    })


    const data = await models.User.findOne({ where: { username: req.body.username } });
        if(!data){
            res.status(400)
            .json({message: "incorrect email or password, please try again"});
            return;
        }       
        const validPassword = await data.checkPassword(req.body.password);
        if(!validPassword) {
            res.status(400)
            .json({message: "incorrect email or password, please try again"});
            return;
        }   
        req.session.username = data.id;
        req.session.isOnline = true;
        req.session.save()
       return res.status(200).json({message:"Success"});
        
       
})


users.post("/logout", async (req,res) =>{
if(req.session.isOnline){
    const updatedData = await models.User.update({isOnline: false}, {
        where: {
            isOnline: true,
        }
    })

    req.session.destroy(() =>{
        res.status(204).end();
    });
}
else{
    res.status(404).end();
}
})


module.exports = users;