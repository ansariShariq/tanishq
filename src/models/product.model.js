const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image1:{type:String , required : true},
    image2 : {type:String , required : true},
    name : {type:String , required:true},
    price: {type :Number , required :  true}
},{
    versionKey : false
})

const Product = mongoose.model("product",productSchema);

module.exports = Product;