import {Sequelize} from 'sequelize';
const db= new Sequelize('ausol', 'kalel2016', 'Kalel2016',{
    host:'190.228.29.61',
    dialect: 'mysql'
} )
export default db;
