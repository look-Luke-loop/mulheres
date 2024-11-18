const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', routes);

sequelize.sync({ force: false }) // Altere para true apenas se quiser recriar tabelas.
  .then(() => console.log('Banco sincronizado'))
  .catch((error) => console.error('Erro ao sincronizar banco:', error));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
