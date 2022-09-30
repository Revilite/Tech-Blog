const sequelize = require("../config/connection");
const {User, Comment, Post} = require("../models");
const reset = require("./reset.json");

const resetDatabase = async () =>{
    await sequelize.sync({force : true});

    await User.bulkCreate(reset, {
        individualHooks: true,
        returning: true,
    });
    await Post.bulkCreate(reset, {
        individualHooks: true,
        returning: true,
    })
    await Comment.bulkCreate(reset, {
        individualHooks: true,
        returning: true,
    });
    console.log("Table reset")
    process.exit(0);
    
}

resetDatabase();
