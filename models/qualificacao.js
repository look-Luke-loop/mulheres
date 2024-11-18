module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const Qualificacao = sequelize.define('Qualificacao', {
      id_qualificacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome_curso: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      instituicao: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      custo: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
      },
    });
  
    return Qualificacao;
  };
  