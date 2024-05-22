const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userCrud');
const authRoutes = require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryCrud');
const productRoutes = require('./routes/productCrud');
const orderRoutes = require('./routes/orderCrud');
const orderDetailRoutes = require('./routes/orderDetailCrud');

// Créer une instance de l'application Express
const app = express();

// Utilisation du middleware CORS pour permettre les requêtes cross-origin
app.use(cors());

// Middleware pour parser les corps des requêtes en JSON
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/svl', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connexion à MongoDB réussie');
}).catch((err) => {
  console.error('Erreur de connexion à MongoDB', err);
});

// Utilisation des routes d'authentification
app.use('/auth', authRoutes);

// Utilisation des routes CRUD pour chaque entité
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/orderDetails', orderDetailRoutes);


// Port d'écoute du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
