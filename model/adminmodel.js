module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define("admin", 
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          is: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // at least 8 characters, 1 letter and 1 number
        }
      }
    });
    return admin;
  };
