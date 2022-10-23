import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Recipe = sequelize.define(
    'Recipe',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brewMethod: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coffeeWeight: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        waterWeight: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        brewer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalTime: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });

export default Recipe;