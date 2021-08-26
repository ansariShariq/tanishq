
const express = require("express");

const connect = require("./configs/db")

const app = express();

app.use(express.json());

const productController = require("./controllers/product.controller");

app.use("/products",productController);

app.listen("4321",async ()=>{
    await connect()
    console.log("listening to port 4321")
})