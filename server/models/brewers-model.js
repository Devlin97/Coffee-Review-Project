import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Brewer = sequelize.define(
    'Brewer',
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
        brewMethod: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default Brewer;