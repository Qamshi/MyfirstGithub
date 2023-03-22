module.exports=(sequelize,Sequelize) => {
const cart_items = sequelize.define("cart_items", {
   cart_id: {
     type: Sequelize.INTEGER,
     allowNull: false,
     references: {
        model: 'carts',
        key: 'cart_id'
      }
   },
   Product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
        model: 'products',
        key: 'p_id'
    },
    cart_item_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}
});
 return cart_items;
}

