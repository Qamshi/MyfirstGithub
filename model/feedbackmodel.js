module.exports=(sequelize,Sequelize) => {
    const feedback = sequelize.define("feedback", {
       f_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey : true,
         autoIncrement: true
       },
       order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'o_id'
        }
      },
       comments: {
         type: Sequelize.STRING,
         allowNull: false
       },
       admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'admin',
          key: 'id'
        }
      }

    });
    return admin;
   }