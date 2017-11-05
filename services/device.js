var Device = require('../models').device;


createOrUpdateDevice = function (data) {
    Device.find({ where: { 'deviceId': data.deviceId } }).then(device => {
        if (device) {
            return device;
        } else {
            Device.create({
                deviceId: data.deviceId,
                name: data.name,
                timestamp: new Date(),
                status: 'Up',
                locationType: 'Physical',
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