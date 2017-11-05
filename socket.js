var DeviceService = require('./services/device');

function SocketServer() {
    this.io;
}

module.exports = {
    setup: function(server) {
        SocketServer.io = require('socket.io')(server);

        SocketServer.io.on('connect', function (socket) {
            console.log('A device connected');
            socket.on('register', function (data) {
                console.log(data)
                DeviceService.createOrUpdateDevice(data);
                io.emit('status', { 'id': 0 });
            });

            socket.on('status', function (data) {
                console.log(data);
                DeviceService.createOrUpdateDevice(data);
            });
        });
    },
    SocketServer: SocketServer
}