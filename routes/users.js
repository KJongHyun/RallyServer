const express = require("express");
const models = require("../models");
const router = express.Router();

router.post("/signIn", async function (req, res) {

    const userId = req.body.userId;
    const pw = req.body.pw;
    const userName = req.body.userName;

    const newUser = {
        userId: userId,
        pw: pw,
        userName: userName
    }

    const user = await models.user.create(newUser);
    console.log(newUser);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(JSON.stringify(newUser));
});

router.get("/getUser/:userId", async function(req, res) {
    const userId = req.param("userId");
    const user = await models.user.findOne({
        where: {userId:userId}
    })
    console.log(user);
});

module.exports = router;