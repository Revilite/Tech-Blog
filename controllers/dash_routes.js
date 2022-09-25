const dash = require("express").Router();
const models = require("../models");


dash.get("/", async (req, res) =>{
        res.render("dash");
})

dash.post("/", async (req, res) =>{
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

module.exports = dash;