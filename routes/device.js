

/* GET home page. */
router.post('/api/device', function (req, res, next) {
    res.json(req.user);
});

