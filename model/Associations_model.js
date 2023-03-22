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

// customers.hasMany(orders);
// Order.belongsTo(Customer);
// Order.hasMany(OrderItems);
// OrderItems.belongsTo(Order);
// Customer.hasOne(Cart);
// Cart.belongsTo(Customer);
// Cart.hasMany(CartItems);
// CartItems.belongsTo(Cart);
// Product.belongsToMany(OrderItems);
// OrderItems.belongsToMany(Product);
customer.hasMany(order);







sequelize.sync().then(() => {
   console.log('Order_items table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});