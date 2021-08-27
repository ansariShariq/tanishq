const express = require("express");

const router = express.Router();

const Product = require("../models/home.model");

router.post("",async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.send(product);
    }
    catch(err){
        return res.send(err.message)
    }
})

router.get("/products/items/:id",async (req,res)=>{
    try{
        const item = await Product.find({_id : `${req.params.id}`}).lean().exec();
        return res.render("item",{
            item : item
        })
    }
    catch(err){
        return res.send(err.message);
    }
})

router.get("", async (req,res)=>{
    try{
        const product = await Product.find().lean().exec();
        return res.render("home", {
            product : product
        });
    }
    catch(err){
        return res.send(err.message);
    }
})

module.exports = router;