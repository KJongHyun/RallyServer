'use strict';
module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define('exercise', {
    exerciseId: DataTypes.STRING,
    userId: DataTypes.STRING,
    exerciseName: DataTypes.STRING,
    exerDate: DataTypes.STRING
  }, {});
  exercise.associate = function(models) {
    // associations can be defined here
  };
  return exercise;
};