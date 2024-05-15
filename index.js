import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, (req, res) => {
  console.log(`Server running on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs");
});

app.get("/product", (req, res) => {
  res.render(__dirname + "/product.ejs");
});
