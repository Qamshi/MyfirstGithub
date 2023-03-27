module.exports=(sequelize,Sequelize) => {
    const admin = sequelize.define("admin", {
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey : true,
         autoIncrement: true
       },
       username: {
         type: Sequelize.STRING,
         allowNull: false
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false
       },
       password:{
        type: Sequelize.STRING,
        allowNull: false
       }

    });
    return admin;
   }