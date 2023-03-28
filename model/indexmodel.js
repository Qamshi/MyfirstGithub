const db = require("../db.js")


db.customer = require("./customermodel.js")(db.sequelize,db.Sequelize);
db.order = require("./ordermodel.js")(db.sequelize,db.Sequelize);
db.product = require("./productmodel.js")(db.sequelize,db.Sequelize);
db.order_items = require("./order_itemsmodel.js")(db.sequelize,db.Sequelize);
db.cart = require("./cartmodel.js")(db.sequelize,db.Sequelize);
db.cart_items = require("./cart_itemsmodel.js")(db.sequelize,db.Sequelize);
db.payment = require("./paymentmodel.js")(db.sequelize,db.Sequelize);
db.feedback = require("./feedbackmodel.js")(db.sequelize,db.Sequelize);
db.admin = require("./adminmodel.js")(db.sequelize,db.Sequelize);




// db.customer.hasMany(db.order);
// db.order.belongsTo(db.customer);

// db.order.hasMany(db.order_items);
// db.order_items.belongsTo(db.order);

// db.customer.hasOne(db.cart);
// db.cart.belongsTo(db.customer);

// db.cart.hasMany(db.cart_items);
// db.cart_items.belongsTo(db.cart);

  db.admin.hasMany(db.feedback, {
    foreignKey: 'admin_id'
  });
  db.feedback.belongsTo(db.admin, {
    foreignKey: 'admin_id'
  });
  db.customer.hasMany(db.cart, {
    foreignKey: 'Customer_id'
  });
  db.cart.belongsTo(db.customer, {
    foreignKey: 'Customer_id'
  });
  
  db.cart.hasMany(db.cart_items, {
    foreignKey: 'cart_id'
  });
  db.cart_items.belongsTo(db.cart, {
    foreignKey: 'cart_id'
  });
  db.product.hasMany(db.cart_items, {
    foreignKey: 'Product_id'
  });
  db.cart_items.belongsTo(db.product, {
    foreignKey: 'Product_id'
  });
  db.customer.hasMany(db.order, {
    foreignKey: 'c_id'
  });
  db.order.belongsTo(db.customer, {
    foreignKey: 'c_id'
  });
  db.order.hasMany(db.order_items, {
    foreignKey: 'order_id'
  });
  db.order_items.belongsTo(db.order, {
    foreignKey: 'order_id'
  });
  db.product.hasMany(db.order_items, {
    foreignKey: 'product_id'
  });
  db.order_items.belongsTo(db.product, {
    foreignKey: 'product_id'
  });
  db.order.hasMany(db.payment, {
    foreignKey: 'order_id'
  });
  db.payment.belongsTo(db.order, {
    foreignKey: 'order_id'
  });
                              

module.exports = db

