'use strict';

module.exports = function (sequelize, DataTypes) {
    const Device = sequelize.define('device', {
        name: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING
        },
        deviceId: {
            type: DataTypes.UUID
        },
        locationType: {
            type: DataTypes.STRING
        },
        longitude: {
            type: DataTypes.NUMBER
        },
        latitude: {
                type: DataTypes.NUMBER
        }

        
    });

    Device.sync();

    //User.sync({force: true});

    return Device;
}