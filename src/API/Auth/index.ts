/**
 * Все, что связано с авторизацией.
 */

import { User, Session } from "@db";
import { hashPassword, getSession } from "@utils";

class Auth {
  /**
   * Вход по логину и паролю
   */
  public async login({ email, password }: { email: string, password: string }): Promise<string> {
    const user = await User.findOne({
      where: {
        email,
        password: hashPassword(password)
      }
    });

    if (!user) throw new Error("Неверный логин и/или пароль");

    const session_id = getSession();

    await Session.create({
      session_id,
      fk_user_id: user.id
    });

    return session_id;
  }

  /**
   * Создание учетной записи
   */
  public async create({ name, email, password }: { name: string, email: string, password: string }): Promise<boolean> {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        password: hashPassword(password)
      }
    });

    if (!created) throw new Error("Email уже занят");

    return true;
  }
}

export default Auth;