import { RequestHandler } from "express";

/**
 * Проверка обязательных параметров.
 * Проходит по списку обязательных параметров и проверяет их в `req.body`.
 * Если параметра нет, то будет отправлен ответ с ошибкой и остальные обработчики не будут вызванны.
 * @param params Список обязательных параметров
 */
function checkParams(params: string[]): RequestHandler {
  return (req, res, next) => {
    try {
      const notTransmitted: string[] = [];

      if (params.length === 0) return next();

      if (Object.keys(req.query).length) {
        for (let param of params) {
          if (typeof req.query[param] === "undefined" || !String(req.query[param]).length) {
            notTransmitted.push(param);
          }
        }
      } else if (Object.keys(req.body).length) {
        for (let param of params) {
          if (typeof req.body[param] === "undefined" || !String(req.body[param]).length) {
            notTransmitted.push(param);
          }
        }
      } else {
        throw Error(`Не переданы обязательные параметры: ${params.join(", ")}`);
      }

      if (notTransmitted.length) {
        throw Error(`Не переданы обязательные параметры: ${notTransmitted.join(", ")}`);
      }
      return next();
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

export default checkParams;