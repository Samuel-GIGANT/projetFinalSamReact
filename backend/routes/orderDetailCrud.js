const express = require('express');
const router = express.Router();
const OrderDetailController = require('../controllers/orderDetailController');



// Créer un nouveau détail de commande
router.post('/', OrderDetailController.createOrderDetail);

// Récupérer tous les détails de commande
router.get('/', OrderDetailController.getAllOrderDetails);

// Récupérer un détail de commande par son ID
router.get('/:id', OrderDetailController.getOrderDetailById);

// Mettre à jour un détail de commande
router.put('/:id', OrderDetailController.updateOrderDetail);

// Supprimer un détail de commande
router.delete('/:id', OrderDetailController.deleteOrderDetail);

module.exports = router;
