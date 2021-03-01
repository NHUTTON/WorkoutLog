const Sequelize = require('sequelize');
     
const sequelize = new Sequelize("postgres://postgres:frisbee@localhost:5432/Workout");
     
module.exports = sequelize;