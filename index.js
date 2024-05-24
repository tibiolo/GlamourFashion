import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
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

function getProductsData() {
  const data = fs.readFileSync("productsdata.json", "utf8");
  const parsedData = JSON.parse(data);
  return parsedData;
}

function getCategoryProducts(categoryId) {
  const productsData = getProductsData();
  return productsData.products[categoryId] || [];
}

function getProductById(productId, categoryId) {
  const products = getCategoryProducts(categoryId);
  return products[productId];
}

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs");
});

app.get("/products/men", (req, res) => {
  res.render(__dirname + "/mens.ejs", { products: productsData });
});

app.get("/products/women", (req, res) => {
  res.render(__dirname + "/women.ejs", { products: productsData });
});

app.get("/contact", (req, res) => {
  res.render(__dirname + "/contact.ejs");
});

app.get("/login", (req, res) => {
  res.render(__dirname + "/login.ejs");
});

app.get("/products/:category/:id", (req, res) => {
  const categoryId = req.params.category;
  const productId = req.params.id;

  const product = getProductById(productId, categoryId);

  if (product) {
    res.render(__dirname + "/product.ejs", { product });
  } else {
    res.status(404).send("Product not found");
  }
});

app.post("/contact", (req, res) => {
  res.render(__dirname + "/contact.ejs");
});

app.post("/login", (req, res) => {
  res.render(__dirname + "/login.ejs");
});
