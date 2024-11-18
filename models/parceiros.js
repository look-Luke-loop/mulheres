module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const Parceiros = sequelize.define('Parceiros', {
      id_parceiro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      tipo_parceria: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    });
  
    return Parceiros;
  };
  