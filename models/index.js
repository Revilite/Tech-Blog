const User = require("./users");
const Post = require("./posts");

// Post.hasOne(User, {
//     foreignKey: "post_id",
//     onDelete: "CASCADE"
// })


module.exports = {User, Post};