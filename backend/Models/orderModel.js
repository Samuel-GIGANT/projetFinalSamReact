const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orders_Status: Boolean,
  total_Amount:{
    type: Number,
    required: true 
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products' 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users' 
  }
});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
