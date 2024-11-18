const express = require('express');
const router = express.Router();

router.use('/usuarios', require('./usuariosRoutes'));
// Adicione os demais arquivos de rota aqui

module.exports = router;
