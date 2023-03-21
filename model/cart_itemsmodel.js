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



const cart_items = sequelize.define("cart_items", {
   cart_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     references: {
        model: 'carts',
        key: 'cart_id'
      }
   },
   Product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'products',
        key: 'p_id'
    },
    cart_item_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}
});


sequelize.sync().then(() => {
   console.log('Order_items table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});