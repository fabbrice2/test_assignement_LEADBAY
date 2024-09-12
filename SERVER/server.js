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

app.post("/posturl", (req, res) => {
  const url = req.body;

  const newUrl = { id: urls.length + 1, url };
  urls.push(newUrl);

  res.status(201).json(newUrl);

  

});

app.listen(port, () => {
  console.log(`Server listen to the port${port}`);
});
