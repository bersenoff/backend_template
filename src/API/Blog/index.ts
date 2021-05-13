/**
 * Методы для работы с блогом
 */

import { Post } from "@db";

class Blog {
  public async edit(id: number, title: string, short_content: string, content: string) {
    const [result] = await Post.update({
      title,
      short_content,
      content
    }, {
      where: { id }
    });

    if (result < 1) throw new Error("Статья не найдена");

    return true;
  }

  public async create(title: string, short_content: string, content: string) {
    return await Post.create({ title, short_content, content });
  }

  public async getList(limit: number = 20, offset: number = 0) {
    return await Post.findAll({ limit, offset, order: [["created_at", "DESC"]] });
  }

  public async getPost(id: number) {
    const data = await Post.findOne({ where: { id } });
    if (data) return data;
    else return false;
  }
}

export default Blog;