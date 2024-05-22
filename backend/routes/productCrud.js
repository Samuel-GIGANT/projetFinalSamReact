const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Créer un nouveau produit
router.post('/', ProductController.createProduct);

// Récupérer tous les produits
router.get('/', ProductController.getAllProducts);

// Récupérer un produit par son ID
router.get('/:id', ProductController.getProductById);

// Mettre à jour un produit
router.put('/:id', ProductController.updateProduct);

// Supprimer un produit
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
