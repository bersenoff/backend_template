/**
 * Генерация сессии
 */

import crypto from "crypto";

export default () => {
  return crypto.createHash("sha256").update(new Date().getTime() + process.env.HASH_SALT).digest("hex");
}