const User = require("./users");
const Post = require("./posts");
const Comment = require("./comments");
const PostCom = require("./postCom");
const UserPost = require("./userPost");


User.hasMany(Post, {
    foreignKey: "user_id"
})

Post.belongsTo(User,{ 
    through: UserPost,
    foreignKey: "user_id",
})
Post.hasMany(Comment, {
    foreignKey: "post_id",
})

Comment.belongsTo(Post, {
    through: PostCom,
    foreignKey: "post_id",
})



module.exports = {User, Post, Comment};