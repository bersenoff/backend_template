/**
 * Методы для работы с блогом
 */

import { Post } from "@db";

class Blog {
  public async create(title: string, body: string) {
    return await Post.create({ title, body });
  }

  public async get(limit: number, offset: number) {
    return await Post.findAll({ limit, offset });
  }
}

export default Blog;