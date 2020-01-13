const express = require("express");
const router = express.Router();
const models = require("../models");

router.post("/create", async function (req, res) {
    const userId = req.body.userId;
    const exerciseName = req.body.exerciseName;

    const newExercise = {
        userId: userId,
        exerciseName: exerciseName
    }

    const exercise = await models.exercise.create(newExercise);
    
});

router.route('/addExcerInfo').post(async (req, res) => {
    //docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql


});

router.route('/getExcerInfo').get(async (req, res) => {
    const id = req.param("id");
    const exercise = models.exercise.findOne({
        where:{id:id}
    });

    res.end(JSON.stringify(exercise));
});

router.route('/updateExcerInfo').post(async (res, req) => {

});

router.route('/removeExcerInfo').post(async (res, req) => {

});

router.route('/excerData').get(async (res, req) => {

});

module.exports = router;