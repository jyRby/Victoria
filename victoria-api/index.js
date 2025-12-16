import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();


// DB configuration

const sequelize = new Sequelize(process.env.URI_DB_DEV, {
  dialect: 'postgres'
});

const app = express();

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// App configuration

app.use(express.json());

app.listen(3000, () => {
    console.log('Server Started at ${3000}')
}); 


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})