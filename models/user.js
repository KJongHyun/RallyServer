'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userName: DataTypes.STRING, 
    pw: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};