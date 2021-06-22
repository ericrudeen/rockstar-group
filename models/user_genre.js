const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User_Genre extends Model {}

User_Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Genre',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User_Genre',
  }
);

module.exports = User_Genre;