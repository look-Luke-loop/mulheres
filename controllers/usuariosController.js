const { Usuarios } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const usuarios = await Usuarios.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async criar(req, res) {
    try {
      const usuario = await Usuarios.create(req.body);
      return res.status(201).json(usuario);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const [rowsUpdated] = await Usuarios.update(req.body, { where: { id_usuario: id } });

      if (rowsUpdated === 0) return res.status(404).json({ message: 'Usuário não encontrado' });

      return res.json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const rowsDeleted = await Usuarios.destroy({ where: { id_usuario: id } });

      if (rowsDeleted === 0) return res.status(404).json({ message: 'Usuário não encontrado' });

      return res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
