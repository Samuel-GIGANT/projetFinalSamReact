const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

// Créer une nouvelle catégorie
router.post('/', CategoryController.createCategory);

// Récupérer toutes les catégories
router.get('/', CategoryController.getAllCategories);

// Récupérer une catégorie par son ID
router.get('/:id', CategoryController.getCategoryById);

// Mettre à jour une catégorie
router.put('/:id', CategoryController.updateCategory);

// Supprimer une catégorie
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
