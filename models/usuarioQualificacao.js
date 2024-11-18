module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const UsuarioQualificacao = sequelize.define('UsuarioQualificacao', {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
        },
        onDelete: 'CASCADE',
      },
      id_qualificacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Qualificacao',
          key: 'id_qualificacao',
        },
        onDelete: 'CASCADE',
      },
      data_inscricao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    return UsuarioQualificacao;
  };
  