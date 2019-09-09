'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.TEXT,
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.program,{
      through: models.userprogram,
      foreignKey: 'ProgramId',
      as: 'programs'
    });
  };
  return user;
};