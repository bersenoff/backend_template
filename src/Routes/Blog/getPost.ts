import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/api/blog/post/get", ({ id }) => new Blog().getPost(id),  ["id"], false);