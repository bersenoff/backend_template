/**
 * Пост (блог)
 */

 import { Sequelize, DataTypes, Model } from "sequelize";

 class Post extends Model {
  public id!: number;
  public title!: string;
  public shortContent!: string;
  public content!: string;
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
      type: new DataTypes.STRING(300),
      allowNull: false
    },
    short_content: {
      type: new DataTypes.STRING(1000),
      allowNull: false
    },  
    content: {
      type: new DataTypes.TEXT('long'),
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