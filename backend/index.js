// index.js

const express = require('express');
const connectDB = require('./db.js');
const itemModel = require('./Models/Items.js');
const userModel = require('./Models/userModel.js');
const categoryModel = require('./Models/categoryModel.js');
const orderModel = require('./Models/orderModel.js');
const orderDetailModel = require('./Models/orderDetailModel.js');
const productsModel = require('./Models/productsModel.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/items', async (req, res) => {
  try {
    const response = await itemModel.find();
    return res.json({ items: response });
  } catch (error) {
    console.error('Erreur lors de la récupération des articles :', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});
app.get('/user', async (req, res) => {
  try {
    const response = await userModel.find();
    return res.json({ users: response });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/categories', async (req, res) => {
  try {
    const response = await categoryModel.find();
    return res.json({ categories: response });
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories :', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});
app.get('/product', async (req, res) => {
  try {
    const response = await productsModel.find();
    return res.json({ product: response });
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});
app.get('/order', async (req, res) => {
  try {
    const response = await orderModel.find();
    return res.json({ orders: response });
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes :', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});
app.get('/orderDetail', async (req, res) => {
  try {
    const response = await orderDetailModel.find();
    return res.json({ ordersDetails: response });
  } catch (error) {
    console.error('Erreur lors de la récupération du details des commandes :', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
