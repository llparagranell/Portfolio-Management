// Uniquekey;buy;days;quantity;sell;stock;
const mongoose = require('mongoose');

const StockModal = mongoose.Schema({
    Uniquekey:{
        type:String,
        required:true
    },
    buy:{
        type:String,
        required:true
    },
    days:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    sell:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Stock', StockModal);