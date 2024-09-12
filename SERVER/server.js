const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

const urls = [
  { id: 1, url: "https://google.com/" },
  { id: 2, url: "https://github.com/" },
];



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
