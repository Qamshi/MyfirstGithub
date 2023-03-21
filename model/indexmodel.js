const db = require("../db.js")



db.customer = require("./customermodel.js")(db.sequelize,db.Sequelize);
db.order = require("./ordermodel.js")(db.sequelize,db.Sequelize);
db.product = require("./productmodel.js")(db.sequelize,db.Sequelize);
db.order_items = require("./order_itemsmodel.js")(db.sequelize,db.Sequelize);
db.cart = require("./cartmodel.js")(db.sequelize,db.Sequelize);
db.cart_items = require("./cart_itemsmodel.js")(db.sequelize,db.Sequelize);






//db.customer.hasMany(db.order);
module.exports = db

