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
    try{
    const token = req.headers.authorization;
    if(!token) {
        throw new Error("Token não informado");
    }

    const { name, price, image, status } = req.body;
    const id = products.length + 1;
    const product = { id, name, price, image, status };
    products.push(product);
    res.json(product);
    } catch(error: any) {
        res.status(400).json({ error: error.message });
    }

});


app.put("/products/:id", (req, res) => {
    try{
        const token = req.headers.authorization;
    if(!token) {
        throw new Error("Token não informado");
    }
    const { id } = req.params;
    const { price } = req.body;
    const productIndex = products.findIndex((product: any) => product.id == id);
    products[productIndex].price = price;
    res.json(products);
    // if(!price) {
    //     throw new Error("Preço não informado");
    // }else if(price != Number(price)) {
    //     throw new Error("Preço inválido");
    // }else if(price <= 0) {
    //     throw new Error("Preço inválido");
    // }else if(productIndex < 0) {
    //     throw new Error("Produto não encontrado");
    // }
}   catch(error: any) {
    res.status(400).json({ error: error.message });

    }

});

app.delete("/products/:id", (req, res) => {
    try{
        const token = req.headers.authorization;
    if(!token) 
    {
        const { id } = req.params;
    const productIndex = products.findIndex((product: any) => product.id == id);
    products.splice(productIndex, 1);
    res.json(products)
}
    }   catch(error: any) {
        res.status(400).json({ error: error.message });
    }
});




app.listen(3004, () => {
    console.log("Server is running in http://localhost:3004")
});