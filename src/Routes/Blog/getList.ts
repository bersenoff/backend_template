import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/api/blog/list/get", async ({ limit, offset }) => await new Blog().getList(limit, offset),  [], false);