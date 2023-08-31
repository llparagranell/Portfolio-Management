const Stock = require('../models/Stock');

exports.stockdata = async (req,res) =>{
    try {    
        const stock = new Stock({
            Uniquekey: req.body.Uniquekey,
            buy:req.body.buy,
            days:req.body.days,
            quantity:req.body.quantity,
            sell:req.body.sell,
            stock:req.body.stock
        })
    
        await stock.save();
    
        res.status(200).json(
         " data saved"
        )
       } catch (error) {
        console.log(error);
       }
}
exports.getstock = async (req,res)=>{
    try {
        const data = await Stock.find();
    res.send(data);
    } catch (error) {
        console.log(error);
    }
}