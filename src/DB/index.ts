import { Sequelize } from "sequelize";
import ModelSession from "./Session";
import ModelUser from "./User";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  timezone: "+08:00",
  logging: false,
});

const Session = ModelSession(db);
const User = ModelUser(db);

// Ассоциации
Session.belongsTo(User, { foreignKey: "fk_user_id", targetKey: "id" });

export default db;

export { 
  Session, 
  User 
};