const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
} = require('../controllers/serviceController');

const router = express.Router();

// Rotas de Serviços
router.post('/', protect, createService); // Criar um serviço (somente para usuários autenticados)
router.get('/', getAllServices); // Obter todos os serviços
router.get('/:id', getServiceById); // Obter um serviço por ID
router.put('/:id', protect, updateService); // Atualizar um serviço (somente para usuários autenticados)
router.delete('/:id', protect, deleteService); // Excluir um serviço (somente para usuários autenticados)

module.exports = router;
