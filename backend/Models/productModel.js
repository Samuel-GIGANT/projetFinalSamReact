const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: {
    type: Number,
    required: true 
  },
  quantity: {
    type: Number,
    required: true 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category' 
  }
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
