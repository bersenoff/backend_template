import { getRouter } from "@utils";
import { Auth } from "@api";

export default getRouter("/auth/create", (params) => new Auth().create(params),  ["name", "email", "password"], false);