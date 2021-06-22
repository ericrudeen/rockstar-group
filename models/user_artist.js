const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User_Artist extends Model {}

User_Artist.init(
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
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: 'Artist',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'User_Artist',
    }
);

module.exports = User_Artist;