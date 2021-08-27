const express = require("express");

const router = express.Router();

const Allitems = require("../models/allItems.model")

router.get("/allitems", async (req,res)=>{   
    try{
        const allItems =await Allitems.find({}).lean().exec()
        res.status(201).render('allitems',{
            allItems:allItems
        })
        // res.send(allItems)`
        
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.post("", async (req,res)=>{
    try{
        const allItems =await Allitems.create(req.body)
        res.status(201).send(allItems)
        
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = router