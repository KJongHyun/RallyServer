'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userId: DataTypes.STRING,
    userName: DataTypes.STRING, 
    pw: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};