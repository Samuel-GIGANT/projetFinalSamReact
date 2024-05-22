// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController.js');

// Importez la fonction registerUser depuis le contrôleur
const { registerUser } = require('../Controllers/authController');

// Route pour enregistrer un nouvel utilisateur
router.post('/register', registerUser);

// Route pour l'authentification de l'utilisateur
router.post('/login', authController.loginUser);

module.exports = router;
