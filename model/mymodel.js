const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'decor',
   'root',
   'Mysql123',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

 // Define the User model
const User = sequelize.define('user', {
   name: Sequelize.STRING,
   email: Sequelize.STRING
 });
 
 // Define the Product model
 const Product = sequelize.define('product', {
   name: Sequelize.STRING,
   price: Sequelize.FLOAT
 });
 
 // Define the Feedback model
 const Feedback = sequelize.define('feedback', {
   message: Sequelize.TEXT
 });
 
 // Define the Customer model
 const Customer = sequelize.define('customer', {
   name: Sequelize.STRING,
   email: Sequelize.STRING
 });
 
 // Create associations between the models
 Product.belongsTo(User); 
 User.hasMany(Product); 
 
 Feedback.belongsTo(Product); // A feedback belongs to a product
 Product.hasMany(Feedback); // A product has many feedbacks
 
 Feedback.belongsTo(Customer); // A feedback belongs to a customer
 Customer.hasMany(Feedback); // A customer has many feedbacks
 

 
sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
