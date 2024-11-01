const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Produto = sequelize.define('Produto', {
  produto_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  produto_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria_id: { 
    type: DataTypes.INTEGER,
    references: {
      model: Categoria,
      key: 'categoria_id',
    },
  },

});


module.exports = Produto;
