import { Sequelize } from 'sequelize'

const db = new Sequelize('node', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;
