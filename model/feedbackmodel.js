module.exports = (sequelize, Sequelize) => {
    const feedback = sequelize.define("feedback", 
    {
      f_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
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
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'admins',
          key: 'id'
        }
      }
    });
    return feedback;
  };
  