const mongoose = require("mongoose");

const communityModal = mongoose.Schema({
    name:{type:String},
    text:{type:String},
    img: { type: Buffer },
    UniqueKey:{type:String},
    time : { type : Date, default: Date.now }
});

module.exports = mongoose.model("Community", communityModal);
