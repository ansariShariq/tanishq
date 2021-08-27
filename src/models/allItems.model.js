const mongoose = require("mongoose")

const allItemsSchema = new mongoose.Schema({
    name:{type:String , required : true},
    price:{type:Number , required : true},
    try:{type:String , required : false},
    image1:{type:String , required : true},
    image1:{type:String , required : false},
    quick:{type:String , required :false}
},{
    versionKey:false
})

const Allitems = mongoose.model('allitems',allItemsSchema)

module.exports = Allitems