const User = require("./users");
const Post = require("./posts");

Post.belongsTo(User,{ 
    foreignKey: "user_id"
})

module.exports = {User, Post};