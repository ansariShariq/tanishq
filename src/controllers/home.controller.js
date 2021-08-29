const express = require("express");

const router = express.Router();

const Product = require("../models/home.model");

const Cart = require("../models/cart.model");

router.post("",async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.send(product);
    }
    catch(err){
        return res.send(err.message)
    }
})

router.get("/products", async (req,res)=>{   
    try{
        const cart = await Cart.find().lean().exec();
        const allItems =await Product.find({}).lean().exec()
        res.status(201).render('allitems',{
            allItems:allItems,
            length: cart.length
        })
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.get("/products/items/:id",async (req,res)=>{
    try{
        const item = await Product.find({_id : `${req.params.id}`}).lean().exec();
        const cart = await Cart.find().lean().exec();
        return res.render("item",{
            item : item,
            cart : cart,
            length : cart.length
        })
    }
    catch(err){
        return res.send(err.message);
    }
})

router.get("", async (req,res)=>{
    try{
        const cart = await Cart.find().lean().exec();
        const product = await Product.find().lean().exec();
        return res.render("home", {
            product : product,
            length : cart.length
        });
    }
    catch(err){
        return res.send(err.message);
    }
})

router.post("/add",async (req,res)=>{
    try{
         const ca = await Cart.find().lean().exec();
         let temp = true;
         if(String(ca) == String([])){
            const cart = await Cart.create(req.body);
         }
         else {
             ca.forEach((ele)=>{
                 if(ele.id == req.body.id){
                     temp = false;
                 }
             })
             if(temp == true){
                const cart = await Cart.create(req.body);
             }
         }
        return res.send(cart);
    }
    catch(err){
        return res.send(err.message);
    }
})

router.get("/add",async (req,res)=>{
    try{
        const cart = await Cart.find().lean().exec();
        res.send(cart);
    }
    catch(err){
        return res.send(err.message);
    }
})

router.get("/cart",async (req,res)=>{
    const cart = await Cart.find().lean().exec();
    return res.send(cart);
})

router.get("/products/cart", async (req,res)=>{
    try{
        const cart = await Cart.find().lean().exec();
        let resu=0;
        cart.forEach(ele =>{
            resu = resu + ele.price;
        })
       return res.render("cart", {
            cart : cart,
            price : resu,
            length : cart.length
        });
    }
    catch(err){
        return res.send(err.message);
    }
})


router.get("/products/cart/:id",async (req,res)=>{
    try{
        const cartdelete = await Cart.findByIdAndDelete(req.params.id);
        const cart = await Cart.find().lean().exec();
        let resu=0;
        cart.forEach(ele =>{
            resu = resu + ele.price;
        })
        return res.render("cart", {
            cart : cart,
            price:resu,
            length : cart.length
        });
    }
    catch(err){
        return res.send(err.message)
    }
})

module.exports = router;