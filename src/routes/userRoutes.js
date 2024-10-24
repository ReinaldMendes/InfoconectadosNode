const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
    getUserProfile,
    updateUserProfile,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require('../controllers/userController');

const router = express.Router();

// Rotas de Usuários
router.get('/profile', protect, getUserProfile); // Obter perfil do usuário autenticado
router.put('/profile', protect, updateUserProfile); // Atualizar perfil do usuário autenticado
router.get('/', protect, getAllUsers); // Obter todos os usuários (somente para admins)
router.get('/:id', protect, getUserById); // Obter um usuário por ID (somente para admins)
router.put('/:id', protect, updateUserById); // Atualizar um usuário por ID (somente para admins)
router.delete('/:id', protect, deleteUserById); // Excluir um usuário por ID (somente para admins)

module.exports = router;
