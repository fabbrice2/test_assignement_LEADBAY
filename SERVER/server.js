const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 3001;

// Liste des URLs 
const urls = [];

// Fonction pour scraper les images
async function scrapeImagesFromUrl(url) {
  const result = [];
  try {
    const res = await axios.get(url);
    const html_data = res.data;
    const $ = cheerio.load(html_data);

    // Sélection des images
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

// Endpoint pour scraper  l'URL et récupérer les images
app.post("/scrape", async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL invalide" });
  }

  // Scraping des images
  const images = await scrapeImagesFromUrl(url);

  if (!images) {
    return res.status(500).json({ error: "Erreur lors du scraping" });
  }

  // Ajout de l'URL à la liste des URLs traitées
  urls.push({ id: urls.length + 1, url });

  res.json({ images });
});

// Endpoint pour lister les URLs traitées
app.get("/urls", (req, res) => {
  res.json(urls);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
