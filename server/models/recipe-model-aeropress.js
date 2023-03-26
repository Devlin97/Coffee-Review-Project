import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Recipe_Aeropress = sequelize.define(
    'Recipe_Aeropress',
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
        grinder: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grindSize: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        grindCoarseness: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coffeeOrigin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inverted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalTimeMinutes: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });

export default Recipe_Aeropress;