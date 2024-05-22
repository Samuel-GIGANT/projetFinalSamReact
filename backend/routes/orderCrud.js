const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Créer une nouvelle commande
router.post('/', OrderController.createOrder);

// Récupérer toutes les commandes
router.get('/', OrderController.getAllOrders);

// Récupérer une commande par son ID
router.get('/:id', OrderController.getOrderById);

// Mettre à jour une commande
router.put('/:id', OrderController.updateOrder);

// Supprimer une commande
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
