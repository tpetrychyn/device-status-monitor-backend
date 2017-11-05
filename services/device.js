var Device = require('../models').device;


createOrUpdateDevice = function (data) {
    Device.find({ where: { 'deviceId': data.deviceId } }).then(device => {
        if (device) {
            Device.update({
                name: data.name || device.name,
                status: data.status || device.status,
                locationType: data.locationType || device.locationType,
                latitude: data.latitude || device.latitude,
                longitude: data.longitude || device.longitude
            }, { where: { 'deviceId': data.deviceId } })
            .then(function(device) {
                return device;
            });
        } else {
            Device.create({
                deviceId: data.deviceId,
                name: data.name,
                status: data.status,
                locationType: data.locationType,
                latitude: data.latitude,
                longitude: data.longitude
            })
                .then((device) => {
                    return device;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    createOrUpdateDevice: createOrUpdateDevice,
}