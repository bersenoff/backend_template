import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/api/blog/post/edit", async ({ id, title, short_content, content }) => await new Blog().edit(id, title, short_content, content),  ["id", "title", "short_content", "content"], false);