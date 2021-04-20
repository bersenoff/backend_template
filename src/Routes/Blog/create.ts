import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/blog/create", ({ title, body }) => new Blog().create(title, body),  ["title", "body"], false);