const OrderDetail = require('../Models/orderDetailModel');

// Créer un nouveau détail de commande
exports.createOrderDetail = async (req, res) => {
    try {
        const newOrderDetail = new OrderDetail(req.body);
        await newOrderDetail.save();
        res.status(201).json(newOrderDetail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Récupérer tous les détails de commande
exports.getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.find().populate('product').populate('order');
        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un détail de commande par son ID
exports.getOrderDetailById = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findById(req.params.id).populate('product').populate('order');
        if (!orderDetail) {
            return res.status(404).json({ message: 'Détail de commande introuvable' });
        }
        res.status(200).json(orderDetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un détail de commande
exports.updateOrderDetail = async (req, res) => {
    try {
        const updatedOrderDetail = await OrderDetail.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('product').populate('order');
        if (!updatedOrderDetail) {
            return res.status(404).json({ message: 'Détail de commande introuvable' });
        }
        res.status(200).json(updatedOrderDetail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un détail de commande
exports.deleteOrderDetail = async (req, res) => {
    try {
        const deletedOrderDetail = await OrderDetail.findByIdAndDelete(req.params.id);
        if (!deletedOrderDetail) {
            return res.status(404).json({ message: 'Détail de commande introuvable' });
        }
        res.status(200).json({ message: 'Détail de commande supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
