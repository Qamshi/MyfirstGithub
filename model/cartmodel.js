const {Sequelize , DataTypes } = require ("sequelize");

const sequelize = new Sequelize(
    'decor',
    'root',
    'Mysql123',
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



const cart = sequelize.define("cart", {
   cart_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement:true
   },
   Customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'c_id'
    }
  },
});


sequelize.sync().then(() => {
   console.log('Order_items table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});