import { getRouter } from "@utils";
import { Blog } from "@api";

export default getRouter("/api/blog/create", ({ title, short_content, content }) => new Blog().create(title, short_content, content),  ["title", "short_content", "content"], false);