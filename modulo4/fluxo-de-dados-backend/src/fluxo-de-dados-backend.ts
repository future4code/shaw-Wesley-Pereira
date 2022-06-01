import express from "express";
import cors from "cors";
import { products } from "./data"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
    res.send("Funciona!!!!")
});

app.get("/products", (req, res) => {
    res.json(products);
});


app.post("/products", (req, res) => {
    const { name, price, image, status } = req.body;
    const id = products[products.length - 1].id + 1;
    products.push({ id, name, price, image, status });
    res.json(products);
});


app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    const productIndex = products.findIndex((product: any) => product.id == id);
    products[productIndex].price = price;
    res.json(products);
});

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((product: any) => product.id == id);
    products.splice(productIndex, 1);
    res.json(products);
});


app.listen(3004, () => {
    console.log("Server is running in http://localhost:3004")
});