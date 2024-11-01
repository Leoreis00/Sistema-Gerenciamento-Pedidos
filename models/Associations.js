const Produto = require('./Produto');
const Categoria = require('./Categoria');

Categoria.hasMany(Produto, { foreignKey: 'categoria_id' });
Produto.belongsTo(Categoria, { foreignKey: 'categoria_id' });