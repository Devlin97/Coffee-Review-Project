import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

import postRoutes from './routes/routes-post.js';

const app = express();

//Prefixes all end points with /post
//in routes-post.js if end point is '/' end point is actually '/post'
app.use('/post', postRoutes);

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));