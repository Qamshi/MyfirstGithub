module.exports=(sequelize,Sequelize) => {
  const customer = sequelize.define("customer", {
    c_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey : true,
      autoIncrement: true
    },
    c_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    c_email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    c_address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    c_password: {
     type: Sequelize.STRING,
     allowNull: false
   }
 });
 return customer;
};








