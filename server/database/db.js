import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DATABASENAME,
    process.env.DATABASEUSERNAME,
    process.env.DATABASEPASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);