'use strict';
module.exports = (sequelize, DataTypes) => {
  const userprogram = sequelize.define('userprogram', {
    UserId:{
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model: 'users',
        key: "id"
      }
    },
    ProgramId:{
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model: 'programs',
        key: "id"
      }
    }
  }, {
    timestamps: false
  });
  userprogram.associate = function(models) {
    // associations can be defined here
  };
  return userprogram;
};