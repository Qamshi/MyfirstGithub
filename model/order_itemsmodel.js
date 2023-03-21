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



const order_items = sequelize.define("order_items", {
   item_quantity: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'o_id'
    }
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'p_id'
    }
    }
});


sequelize.sync().then(() => {
   console.log('Order_items table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});