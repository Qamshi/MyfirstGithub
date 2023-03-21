module.exports=(sequelize,Sequelize) => {
 const order = sequelize.define("order", {
    o_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey : true,
      autoIncrement: true
    },
    o_status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    c_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'c_id'
      }
    }
 });
 return order;
}