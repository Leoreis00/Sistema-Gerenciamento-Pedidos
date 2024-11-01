const Categoria = require('../models/Categoria');

// Função para criar uma nova categoria (POST)
exports.createCategoria = async (req, res) => {
  const { nome_categoria } = req.body;

  try {
    const categoria = await Categoria.create({ nome_categoria });
    res.json(categoria);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
};

// Função para atualizar uma categoria (PUT)
exports.updateCategoria = async (req, res) => {
  const { categoria_id } = req.params;
  const { nome_categoria } = req.body;

  try {
    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    categoria.nome_categoria = nome_categoria;
    await categoria.save();
    res.json(categoria);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar categoria' });
  }
};

// Função para excluir uma categoria (DELETE)
exports.deleteCategoria = async (req, res) => {
  const { categoria_id } = req.params;

  try {
    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    await categoria.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir categoria' });
  }
};
