const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbnassau', 'lucas', 'lucas123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

sequelize
  .authenticate()
  .then(() => console.log('Conexão com db '))
  .catch((error) => console.error('Erro ao conectar db:', error));

module.exports = sequelize;
