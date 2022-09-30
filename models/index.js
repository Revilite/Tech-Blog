const User = require("./users");
const Post = require("./posts");
const Comment = require("./comments");



Post.belongsTo(User,{ 
    foreignKey: "user_id",
})
Post.hasMany(Comment, {
    foreignKey: "post_id",
})

Comment.belongsTo(Post, {
    foreignKey: "user_id",
})



module.exports = {User, Post, Comment};