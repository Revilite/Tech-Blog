const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class UserPost extends Model {}

UserPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            autoIncrement: true,
        },
        user_id:{
          type: DataTypes.INTEGER,
          references :{
            model: "user",
            key: "id"
          }
        },
        post_id : {
            type: DataTypes.INTEGER,
            references: {
                model:"post",
                key: "id"
            }
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: "userPost"
    }

)

module.exports = UserPost;