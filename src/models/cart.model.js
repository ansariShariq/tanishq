const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    id :{type:String , required : true},
    image:{type:String , required : true},
    name : {type:String , required:true},
    price: {type :Number , required :  true}
},{
    versionKey : false
})

const Cart = mongoose.model("cart",cartSchema);

module.exports = Cart;