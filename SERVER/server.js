const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

const urls = [
  { id: 1, url: "https://google.com/" },
  { id: 2, url: "https://github.com/" },
];

async function fonctiondescraping(url) {
  const result = [];
  try {
    const res = await axios.get(url);
    const html_data = res.data;
    const $ = cheerio.load(html_data);

    $("img").each((index, elem) => {
      const imgUrl = $(elem).attr("src");
      if (imgUrl) {
        result.push({ imgUrl });
      }
    });
  } catch (error) {
    console.error("Erreur lors du scraping : ", error);
    return null;
  }
  return result;
}

app.get("/urls", (req, res) => {
  res.json(urls);
});

app.post("/posturl", async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL invalide" });
  }

  const images = await fonctiondescraping(url);

  if (!images) {
    return res.status(500).json({ error: "Erreur lors du scraping" });
  }

  urls.push({ id: urls.length + 1, url });

  res.json({ images });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
