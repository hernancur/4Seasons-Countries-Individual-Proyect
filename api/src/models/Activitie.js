const { DataTypes } = require('sequelize');
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');

module.exports = (sequelize) => {
  return sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
    },
  });
};
