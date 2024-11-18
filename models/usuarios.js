module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const Usuarios = sequelize.define('Usuarios', {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      situacao: DataTypes.TEXT,
      data_cadastro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    return Usuarios;
  };
  