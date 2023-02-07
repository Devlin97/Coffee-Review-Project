import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Country = sequelize.define(
    'Country',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default Country;