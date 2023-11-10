const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
horse_color: String,
horse_breed: String,
horse_price: Number
})
module.exports = mongoose.model("horse",horseSchema)