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



const customer = sequelize.define("customer", {
   c_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey : true,
     autoIncrement: true
   },
   c_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   c_email: {
     type: DataTypes.STRING,
     allowNull: false
   },
   c_address: {
     type: DataTypes.STRING,
     allowNull: false
   },
   c_password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


sequelize.sync().then(() => {
   console.log('Customer table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});