const mongoose = require('mongoose')

const categoryShema = new mongoose.Schema({
  name:String,
  description:String,
})

const categoryModel = mongoose.model("category", categoryShema)
module.exports = categoryModel