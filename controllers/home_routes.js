const home  = require("express").Router();
const models = require("../models");


home.get("/", async (req, res) =>{ 
    const data = await models.Post.findAll()
    .catch((err) =>{
        throw err;
    })
    const posts = data.map((post) => post.get({plain: true}));
    res.render("all", {posts, isOnline: req.session.isOnline})
})



module.exports = home;