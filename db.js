const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    'decor',
    'root',
    'Mysql123',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db