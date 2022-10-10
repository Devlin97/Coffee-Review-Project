import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASEPASSWORD,
});

//Can put something in the '' to prefix all end points with /post
//in routes-post.js if end point is '/' end point is actually '/post'
import postRoutes from './routes/routes.js';
app.use('', postRoutes);

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));