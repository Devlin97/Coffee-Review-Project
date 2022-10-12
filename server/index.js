import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mysql from 'mysql2';
import { sequelize } from './database/db.js';

dotenv.config();

const app = express();

//Unsure which connection is needed as of yet or if both are needed
//=======================================================


const db = mysql.createPool({
    host: 'localhost',
    user: process.env.DATABASEUSERNAME,
    password: process.env.DATABASEPASSWORD,
    database: process.env.DATABASENAME
});
//========================================================

//Can put something in the '' to prefix all end points with /post
//in routes-post.js if end point is '/' end point is actually '/post'
import postRoutes from './routes/routes.js';
app.use('', postRoutes);

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//This might not be needed, but will keep it in for now as still unsure which database if best to use 
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));


try{
    await sequelize.authenticate();
    console.log("Connection established");
} catch (error) {
    console.error('Nope lol ', error);
}