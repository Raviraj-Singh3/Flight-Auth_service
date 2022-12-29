'use strict';
const {
  Model
} = require('sequelize');

const {SALT} = require('../config/configServer');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
      len: [3,20]
     }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user)=>{
    //console.log(user.password);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    //console.log(user.password);
  });
  return User;
};