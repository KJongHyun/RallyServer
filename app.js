const database = require('mysql');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const hostName = '127.0.0.1';
const port = 3000;

// routes
const index = require('./routes/index');
const users = require('./routes/users');
const exercises = require('./routes/exercises');

app.use('/', index);
app.use('/user', users);
app.use('/exercise', exercises);

const connection = database.createConnection ({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'rally'
});

connection.connect();

connection.query('select * From user', (err, rows) => {
    if (err)
        throw err;
    console.log(rows);
});

connection.end();


app.listen(port, hostName, () => {
    console.log(`Server is running at https://${hostName}:${port}`);
}); 
