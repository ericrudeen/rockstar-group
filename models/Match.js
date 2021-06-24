const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Match extends Model {}

// enum match_status {
//   pending
//   accepted
//   declined
// }

Match.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      has_been_matched: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      liker: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'User',
            key: 'id',
          },
      },
      likee: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'User',
            key: 'id',
          },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Match',
    }
);

module.exports = Match;