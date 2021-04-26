import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/api/blog/create", async ({ title, short_content, content }) => await new Blog().create(title, short_content, content),  ["title", "short_content", "content"], false);