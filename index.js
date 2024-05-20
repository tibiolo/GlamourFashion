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

function getProductsData() {
  const data = fs.readFileSync("productsdata.json", "utf8");
  const parsedData = JSON.parse(data);
  return parsedData;
}

function getCategoryProducts(categoryId) {
  const productsData = getProductsData();
  console.log(categoryId);
  return productsData.products[categoryId] || [];
}

function getProductById(productId, categoryId) {
  const products = getCategoryProducts(categoryId);
  console.log(products[productId]);
  return products[productId];
}

app.listen(PORT, (req, res) => {
  console.log(`Server running on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs");
});

app.get("/products/men", (req, res) => {
  res.render(__dirname + "/mens.ejs", { products: productsData });
});

app.get("/products/women", (req, res) => {
  res.render(__dirname + "/women.ejs", { products: productsData });
});

app.get("/products/:category/:id", (req, res) => {
  const categoryId = req.params.category;
  const productId = req.params.id;

  const product = getProductById(productId, categoryId);

  if (product) {
    // Render the product page template with product details
    res.render(__dirname + "/product.ejs", { product });
  } else {
    // Handle case where product is not found
    res.status(404).send("Product not found");
  }
});
