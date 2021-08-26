
const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://shariq:tanishq@001@cluster0.mk1qp.mongodb.net/tanishq?retryWrites=true&w=majority",{
        useNewUrlParser :true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify : false
    })
}

module.exports = connect;