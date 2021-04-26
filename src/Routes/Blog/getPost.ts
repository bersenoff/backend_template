import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/api/blog/post/get", async ({ id }) => await new Blog().getPost(id),  ["id"], false);