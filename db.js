const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    'webproject',
    'root',
    'Tayyab12.',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db