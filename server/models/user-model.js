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
        }
    });

export default User;