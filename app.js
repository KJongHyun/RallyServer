const database = require('mysql');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const hostName = '127.0.0.1';
const port = 3000;

const connection = database.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'rally'
});

connection.connect();

app.route('/login').post(async (res, req) => {

});

app.route('/excerData').get(async (res, req) => {

});

app.route('/addExcerInfo').post(async (res, req) => {
    //docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql


});

app.route('/getExcerInfo').get(async (res, req) => {

});

app.route('/updateExcerInfo').post(async (res, req) => {

});

app.route('/removeExcerInfo').post(async (res, req) => {

});

app.listen(port, hostName, () => {
    console.log(`Server is running at https://${hostName}:${port}`);
}); 
