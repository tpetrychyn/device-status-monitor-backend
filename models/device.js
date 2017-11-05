'use strict';

module.exports = function (sequelize, DataTypes) {
    const Device = sequelize.define('device', {
        name: {
            type: DataTypes.STRING
        },
        timestamp: {
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
        location: {
            latitude: {
                type: DataTypes.NUMBER
            },
            longitude: {
                type: DataTypes.NUMBER
            }
        }
    });

    Device.sync();

    //User.sync({force: true});

    return Device;
}