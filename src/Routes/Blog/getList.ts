import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/api/blog/list/get", ({ limit, offset }) => new Blog().getList(limit, offset),  [], false);