import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Comment = sequelize.define(
    'Comment',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

export default Comment;