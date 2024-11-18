module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const UsuarioSuporte = sequelize.define('UsuarioSuporte', {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
        },
        onDelete: 'CASCADE',
      },
      id_suporte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Suporte',
          key: 'id_suporte',
        },
        onDelete: 'CASCADE',
      },
      data_recebimento: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    return UsuarioSuporte;
  };
  