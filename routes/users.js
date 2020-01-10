const express = require("express");
const router = express.Router();

router.post("/create", function (req, res) {
    const userName = req.body.userName;
    const pw = req.body.pw;
    const createAt = new Date();
});

router.post("/getUser", function(req, res) {
    
});
module.exports = router;