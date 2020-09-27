/**
 * Сессия авторизации
 */

import { Sequelize, DataTypes, Model } from "sequelize";

class Session extends Model {
  public session_id!: string;
  public fk_user_id!: number;
  public start_datetime!: Date;
  public end_datetime: Date | null;

  public readonly created_at: Date;
  public readonly updated_at: Date;
}

export default (db: Sequelize) => {
  Session.init({
    session_id: {
      type: new DataTypes.STRING(64),
      primaryKey: true,
      allowNull: false
    },
    fk_user_id: {
      type: new DataTypes.INTEGER,
      allowNull: false
    },
    start_datetime: {
      type: new DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("NOW")
    },
    end_datetime: {
      type: new DataTypes.DATE,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    tableName: "sessions",
    modelName: "session",
    underscored: true,
    sequelize: db
  });

  return Session;
}