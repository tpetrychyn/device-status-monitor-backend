'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    facebook_id: {
        type: DataTypes.STRING
    },
    facebook_token: {
        type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  });

  User.sync();

  //User.sync({force: true});

  return User;
}