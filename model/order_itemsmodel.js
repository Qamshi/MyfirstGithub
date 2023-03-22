module.exports=(sequelize,Sequelize) => {
const order_items = sequelize.define("order_items", {
   item_quantity: {
     type: Sequelize.INTEGER,
     allowNull: false,
   },
   order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'o_id'
    }
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'p_id'
    }
    }
});
return order_items;
}