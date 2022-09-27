const {Model, DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
 checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
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
            validate: {
                len: [8],
            }
        },
        isOnline:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: "user",
    }

);

module.exports = User;