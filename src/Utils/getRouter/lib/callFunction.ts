import { RequestHandler } from "express";
import { TRouter } from "../@types";

/**
 * Промежуточный обработчик, который вызовет функцию для роута.
 * @param fn Функция для вызова ее по этому роуту
 */
function callFunction<T>(fn: TRouter.Function<T>): RequestHandler {
  return async (req, res) => {
    try {
      const params = Object.keys(req.query).length ? req.query : req.body;

      const data = await fn(params);

      if (typeof data === "string" && data === "self") return;

      res.status(200).json({
        data: data ?? [],
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({
        error: {
          message: err.message,
          stack: process.env.ENVIRONMENT === "development" ? err.stack : undefined,
        },
      });
    }
  };
}

export default callFunction;
