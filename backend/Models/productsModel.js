const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: {
    type: Number,
    required: true // Vous pouvez ajouter d'autres validations au besoin
  },
  quantity: {
    type: Number,
    required: true // Vous pouvez ajouter d'autres validations au besoin
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category' // Assurez-vous que 'Category' est le nom correct de votre modèle de catégorie
  }
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
