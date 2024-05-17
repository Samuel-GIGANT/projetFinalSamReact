const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orders_Status: Boolean,
  total_Amount:{
    type: Number,
    required: true // Vous pouvez ajouter d'autres validations au besoin
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products' // Assurez-vous que 'Products' est le nom correct de votre modèle de produits
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users' // Assurez-vous que 'User' est le nom correct de votre modèle d'utilisateur'
  }
});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
