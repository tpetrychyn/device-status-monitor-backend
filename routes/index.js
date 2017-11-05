var express = require('express');
var router = express.Router();

var socket = require('../socket').SocketServer;
var Device = require('../models').device;

/* GET home page. */
router.get('/api/users/me', function(req, res, next) {
    res.json(req.user);
});

router.put('/api/devices/:deviceId/status', function (req, res, next) {
    params = req.body;
    params.deviceId = req.params.deviceId;
    socket.io.emit('status', params);
    res.send(200);
});


router.put('/test', function (req, res, next) {
    console.log(req.body.status);
    res.send(200);
});
module.exports = router;
