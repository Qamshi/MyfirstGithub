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



const product = sequelize.define("product", {
   p_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey : true,
     autoIncrement: true
   },
   p_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   p_desc: {
     type: DataTypes.STRING,
     allowNull: false
   },
   p_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  p_category: {
   type: DataTypes.STRING,
   allowNull: false
 }
 

});


sequelize.sync().then(() => {
   console.log('Customer table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});