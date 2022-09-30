const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class PostCom extends Model {}

PostCom.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            autoIncrement: true,
        },
        comment_id:{
          type: DataTypes.INTEGER,
          references :{
            model: "comment",
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
        modelName: "postCom"
    }

)

module.exports = PostCom;