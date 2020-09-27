/**
 * Пользователь
 */

import { Sequelize, DataTypes, Model } from "sequelize";

class User extends Model {
  public id: number;
  public name!: string;
  public email!: string;
  public password!: string;

  public readonly created_at: Date;
  public readonly updated_at: Date;
}

export default (db: Sequelize) => {
  User.init({
    id: {
      type: new DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: new DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: "users",
    modelName: "user",
    underscored: true,
    sequelize: db,
    indexes: [
      {
        type: "UNIQUE",
        fields: ["email"]
      }
    ]
  });

  return User;
}