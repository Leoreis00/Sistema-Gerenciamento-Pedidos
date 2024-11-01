const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produto = require('./Produto');

const Categoria = sequelize.define('Categoria', {
  categoria_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Categoria; 