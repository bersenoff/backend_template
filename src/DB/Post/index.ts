/**
 * Пост (блог)
 */

 import { Sequelize, DataTypes, Model } from "sequelize";

 class Post extends Model {
  public id!: number;
  public title!: string;
  public body!: string;
  public is_deleted: boolean;

  public readonly created_at: Date;
  public readonly updated_at: Date;
 }

 export default (db: Sequelize) => {
  Post.init({
    id: {
      type: new DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: new DataTypes.STRING(100),
      allowNull: false
    },
    body: {
      type: new DataTypes.TEXT,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    freezeTableName: true,
    tableName: "posts",
    modelName: "post",
    underscored: true,
    sequelize: db
  });

  return Post;
 }