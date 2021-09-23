const { DataTypes } = require('sequelize');
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');

module.exports = (sequelize) => {
  return sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
    },
    price: {
      type: DataTypes.INTEGER
    }
  });
};
