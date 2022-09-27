const posts = require("express").Router();
const models = require("../../models");


posts.get("/", async (req, res) =>{
    try{
        const data = await models.Post.findAll();
        res.status(200).json(data);
    }
    catch(err) {
        res.status(500).json(err);
        throw err;
    }
})

posts.post("/", async(req, res) =>{
    try{
        const data = await models.Post.create({
                title: req.body.title,
                body: req.body.body,
        });
        res.status(200).json(data);
}
catch(err){
        res.status(500).json(err);
        throw err;
}
})





module.exports = posts;