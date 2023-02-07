import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Recipe_Pourover = sequelize.define(
    'Recipe_Pourover',
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
        coffeeOrigin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pours: {
            type: DataTypes.JSON,
            allowNull: false
        },
        bloomTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bloomWeight: {
            type: DataTypes.INTEGER,
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

export default Recipe_Pourover;