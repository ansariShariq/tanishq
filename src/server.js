
const express = require("express");
const connect = require("./configs/db");
const path = require("path");


const app = express();

app.use(express.json());

console.log(__dirname)
app.set("views", path.join(__dirname , "views/"));
app.set("view engine" , "ejs");

app.use("/static", express.static(path.join(__dirname, "style")))

const productController = require("./controllers/product.controller");

app.use("/products",productController);

app.listen("4321",async ()=>{
    await connect()
    console.log("listening to port 4321")
})