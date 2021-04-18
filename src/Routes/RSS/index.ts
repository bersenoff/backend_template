import { Router } from "express";
import RSS from "rss";

const router = Router();

router.get("/rss", async (req, res) => {
  const feed = new RSS({
    title: "Название RSS",
    feed_url: "https://prabereg.ru/rss",
    site_url: "https://prabereg.ru",
    description: "RSS-лента Правый Берег"
  });

  feed.item({
    title: "Запись в блоге №1",
    description: "Описание...",
    url: "https://prabereg.ru/blog/1",
    date: "2020-12-13 18:32:00"
  });

  res.writeHead(200, {
      "Content-Type": "text/xml; charset=utf-8"
  });

  res.end(feed.xml());
});

export default [router];