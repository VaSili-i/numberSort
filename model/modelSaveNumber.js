const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Numbers = sequelize.define('number',{
  first:{type: DataTypes.STRING, default: 0},
  second: {type: DataTypes. STRING, default: 0},
  third: {type: DataTypes.STRING, default: 0},
  fourth:{type: DataTypes.STRING, default: 0},
  fifth:{type: DataTypes.STRING, default: 0},
  sixth:{type: DataTypes.STRING, default: 0},
  id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
});

module.exports = Numbers
