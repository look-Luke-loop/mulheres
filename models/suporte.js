module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const Suporte = sequelize.define('Suporte', {
      id_suporte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  
    return Suporte;
  };
  