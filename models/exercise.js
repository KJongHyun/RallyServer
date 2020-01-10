'use strict';
module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define('exercise', {
    userId: DataTypes.STRING,
    exerciseName: DataTypes.STRING,
    exerDate: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  exercise.associate = function(models) {
    // associations can be defined here
  };
  return exercise;
};