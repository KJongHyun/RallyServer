const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
    
});

router.route('/login').post(async (req, res) => {
    req.body.id;
    req.body.password;
});

module.exports = router;