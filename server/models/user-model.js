/* import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
});

const User = mongoose.model('User', userSchema); */

import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        favouriteBrewer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        favouriteOrigin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        moderator: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

export default User;