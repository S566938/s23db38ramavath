const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
horse_color: String,
horse_breed: {type:String,length:15},
horse_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("horse",horseSchema)