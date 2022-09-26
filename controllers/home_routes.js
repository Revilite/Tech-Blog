const home  = require("express").Router();
const models = require("../models");


home.get("/", async (req, res) =>{ 
    const data = await models.User.findAll()
    .catch((err) => {throw err});

    const isOnline = data.map((user) => user.get({plain : true}));
    res.render('all', {isOnline});
})



module.exports = home;