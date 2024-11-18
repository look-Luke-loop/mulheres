const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Importa os modelos
const Usuarios = require('./usuarios')(sequelize);
const Suporte = require('./suporte')(sequelize);
const Qualificacao = require('./qualificacao')(sequelize);
const Parceiros = require('./parceiros')(sequelize);
const Campanhas = require('./campanhas')(sequelize);
const UsuarioSuporte = require('./usuarioSuporte')(sequelize);
const UsuarioQualificacao = require('./usuarioQualificacao')(sequelize);

// Relacionamentos
Usuarios.belongsToMany(Suporte, {
  through: UsuarioSuporte,
  foreignKey: 'id_usuario',
});
Suporte.belongsToMany(Usuarios, {
  through: UsuarioSuporte,
  foreignKey: 'id_suporte',
});

Usuarios.belongsToMany(Qualificacao, {
  through: UsuarioQualificacao,
  foreignKey: 'id_usuario',
});
Qualificacao.belongsToMany(Usuarios, {
  through: UsuarioQualificacao,
  foreignKey: 'id_qualificacao',
});

module.exports = {
  sequelize,
  Usuarios,
  Suporte,
  Qualificacao,
  Parceiros,
  Campanhas,
  UsuarioSuporte,
  UsuarioQualificacao,
};
