const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const hostName = '127.0.0.1';
const port = 3000;



app.listen(port, hostName, () => {
console.log(`Server is running at https://${hostName}:${port}`);
}); 