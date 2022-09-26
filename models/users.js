const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isOnline:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: "user",
    }

);

module.exports = User;