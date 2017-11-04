var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/users/me', function(req, res, next) {
    res.json(req.user);
});

module.exports = router;
