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
import fs from "fs";
import https from "https";
import routes from "./Routes";
import db from "@db";

class Server {
  app: express.Application;
  httpsServer: https.Server;

  constructor() {
    this.app = express(); // создание экземпляра приложения express

    this.app.use(helmet()); // скрытие express из http-заголовков
    this.app.use(cookieParser()); // парсер кук
    this.app.use(bodyParser.json()); // парсер тела запроса
    this.app.use(cors()); // чтобы работали кроссдоменные запросы

    this.routing();
    
    this.httpsServer = https.createServer({ key: fs.readFileSync(process.env.PATH_TO_KEY), cert: fs.readFileSync(process.env.PATH_TO_CERT) }, this.app);
  }

  public routing() {
    for (let route of routes) {
      this.app.use(route);
    }
  }

  public start(port: number) {
    this.httpsServer.listen(port); // запуск прослушивания порта
    db.sync();
    console.log(`Сервер запущен на ${port} порту...`);
  }
}

new Server().start(Number(process.env.PORT)); // запуск сервера