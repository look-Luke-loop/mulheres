module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const Campanhas = sequelize.define('Campanhas', {
      id_campanha: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_inicio: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      data_fim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  
    return Campanhas;
  };
  