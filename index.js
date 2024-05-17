import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const productsData = JSON.parse(
  readFileSync(join(__dirname, "productsdata.json"), "utf-8")
);

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

app.get("/mens", (req, res) => {
  res.render(__dirname + "/mens.ejs", { products: productsData });
});

app.get("/women", (req, res) => {
  res.render(__dirname + "/women.ejs", { products: productsData });
});

app.get("/product", (req, res) => {
  res.render(__dirname + "/product.ejs", { products: productsData})
})