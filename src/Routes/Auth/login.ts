import { getRouter } from "@utils";
import { Auth } from "@api";

export default getRouter("/auth/login", (params) => new Auth().login(params),  ["email", "password"], true);