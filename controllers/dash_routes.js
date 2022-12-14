const dash = require("express").Router();
const models = require("../models");


dash.get("/", async (req, res) =>{
        const data = await models.Post.findAll()
        .catch((err) =>{
                throw err;
        }) 
        const posts = data.map((post) => post.get({plain : true}));
        res.render("dash", {posts: posts, isOnline: req.session.isOnline});
})
module.exports = dash;