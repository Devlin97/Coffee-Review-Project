import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Grinder = sequelize.define(
    'Grinder',
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

export default Grinder;