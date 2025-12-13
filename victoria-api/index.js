const express = require('express');
const sequelize = require('sequelize');

const app = express();

// App configuration

app.use(express.json());

app.listen(3000, () => {
    console.log('Server Started at ${3000}')
}); 