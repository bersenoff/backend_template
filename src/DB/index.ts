import { Sequelize } from "sequelize";
import ModelPost from "./Post";
import ModelSession from "./Session";
import ModelUser from "./User";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  timezone: "+08:00",
  logging: false,
});

const Post = ModelPost(db);
const Session = ModelSession(db);
const User = ModelUser(db);

// Ассоциации
Session.belongsTo(User, { foreignKey: "fk_user_id", targetKey: "id" });

(async () => {
  await User.sync();
  await Session.sync();
  await Post.sync();
})();

export default db;

export { 
  Post,
  Session, 
  User 
};