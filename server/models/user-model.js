/* import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
});

const User = mongoose.model('User', userSchema); */

import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from "../database/db";

const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default User;