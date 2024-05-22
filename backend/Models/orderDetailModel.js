const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
 
  quantity:{
    type: Number,
    required: true // Vous pouvez ajouter d'autres validations au besoin
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products' // Assurez-vous que 'Products' est le nom correct de votre modèle de produits
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Orders' // Assurez-vous que 'Order' est le nom correct de votre modèle d'utilisateur'
  }
});

const orderDetailModel = mongoose.model("orderdetail", orderDetailSchema);
module.exports = orderDetailModel;
