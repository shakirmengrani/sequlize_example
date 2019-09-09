'use strict';
module.exports = (sequelize, DataTypes) => {
  const program = sequelize.define('program', {
    name: DataTypes.STRING
  }, {});
  program.associate = function(models) {
    program.belongsToMany(models.user,{
      through: models.userprogram,
      foreignKey: 'UserId',
      as: 'users'
    });
  };
  return program;
};