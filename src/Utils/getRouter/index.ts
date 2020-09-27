import { Router } from "express";
import { TRouter } from "./@types";
import checkParams from "./lib/checkParams";
import callFunction from "./lib/callFunction";

/**
 * Генерация роута.
 * Промежуточные обработчики подключаются по цепочке.
 * Проверка авторизации `>>` Проверка обязательных параметров `>>` Вызов переданой функции.
 * Данные о пользовтеле, который вызвал, и его доступах пробрасываюся между обработчиками в `res.locals.caller` и `res.locals.permissions`.
 * @param path Путь для роута без `/api`
 * @param fn Функция, которая отработает по этому роуту
 * @param params Список обязательных параметров
 */
function getRouter<T = any>(path: string, fn: TRouter.Function<T>, params: string[] = [], auth = false): Router {
  const router = Router();

  router.all(path, checkParams(params), callFunction(fn));

  return router;
}

export default getRouter;
