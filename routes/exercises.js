const express = require("express");
const router = express.Router();

router.post("/create", function (req, res) {
    
});

router.route('/addExcerInfo').post(async (res, req) => {
    //docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql


});

router.route('/getExcerInfo').get(async (res, req) => {

});

router.route('/updateExcerInfo').post(async (res, req) => {

});

router.route('/removeExcerInfo').post(async (res, req) => {

});

router.route('/excerData').get(async (res, req) => {

});

module.exports = router;