const {Sequelize , DataTypes } = require ("sequelize");

const sequelize = new Sequelize(
    'webproject',
    'root',
    'Tayyab12.',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
   
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


 const order = sequelize.define("order", {
    o_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey : true,
      autoIncrement: true
    },
    o_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'c_id'
      }
    }
 });

sequelize.sync().then(() => {
   console.log('Customer table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});