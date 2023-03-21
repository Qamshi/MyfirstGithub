module.exports=(sequelize,Sequelize) => {
const cart = sequelize.define("cart", {
   cart_id: {
     type: Sequelize.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement:true
   },
   Customer_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'c_id'
    }
  },
});
return cart;
}
