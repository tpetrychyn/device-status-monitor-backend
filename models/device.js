'use strict';

module.exports = function (sequelize, DataTypes) {
    const Device = sequelize.define('device', {
        deviceId: {
            type: DataTypes.UUID
        },
        name: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        locationType: {
            type: DataTypes.STRING
        },
        locationString: {
            type: DataTypes.STRING
        },
        longitude: {
            type: DataTypes.FLOAT
        },
        latitude: {
            type: DataTypes.FLOAT
        }
    });

    Device.sync();

    return Device;
}