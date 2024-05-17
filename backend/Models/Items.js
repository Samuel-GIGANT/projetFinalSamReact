const mongoose = require('mongoose')

const itemShema = new mongoose.Schema({
  fullName:String,
  description:String,
})

const itemModel = mongoose.model("item", itemShema)
module.exports = itemModel