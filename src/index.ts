/**
 * @description Запуск HTTP-сервера
 * @author Nikita Bersenev
 */

require("dotenv").config();
import "module-alias/register";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./Routes";
import db from "@db";

class Server {
  app: express.Application;

  constructor() {
    this.app = express(); // создание экземпляра приложения express

    this.app.use(helmet()); // скрытие express из http-заголовков
    this.app.use(cookieParser()); // парсер кук
    this.app.use(bodyParser.json()); // парсер тела запроса
    this.app.use(cors()); // чтобы работали кроссдоменные запросы

    this.routing();
  }

  public routing() {
    for (let route of routes) {
      this.app.use(route);
    }
  }

  public start(port: number) {
    this.app.listen(port); // запуск прослушивания порта
    db.sync();
    console.log(`Сервер запущен на ${port} порту...`);
  }
}

new Server().start(Number(process.env.PORT)); // запуск сервера