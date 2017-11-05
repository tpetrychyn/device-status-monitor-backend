var express = require('express');
var router = express.Router();

var socket = require('../socket').SocketServer;

/* GET home page. */
router.get('/api/users/me', function(req, res, next) {
    res.json(req.user);
});


router.get('/test', function (req, res, next) {
    socket.io.emit('status', { id: 'c43a9699-4349-4824-9e2b-4a559605291a'});
    res.send(200);
});
module.exports = router;
