module.exports=(sequelize,Sequelize) => {
const product = sequelize.define("product", {
   p_id: {
     type: Sequelize.INTEGER,
     allowNull: false,
     primaryKey : true,
     autoIncrement: true
   },
   p_name: {
     type: Sequelize.STRING,
     allowNull: false,
   },
   p_desc: {
     type: Sequelize.STRING,
     allowNull: false
   },
   p_price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  p_category: {
   type: Sequelize.STRING,
   allowNull: false
 }
});
return product;
}