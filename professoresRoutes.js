const express = require('express');
const router = express.Router();
const controller = require('../controllers/professoresController');

router.get('/', controller.listar);
router.get('/departamento/:departamento', controller.listarPorDepartamento);
router.get('/:id', controller.buscarPorId);
router.get('/:id/turmas', controller.listarTurmas);
router.put('/:id', controller.atualizar);
router.post('/:id/turmas', controller.adicionarTurma);
router.delete('/:id', controller.remover);

module.exports = router;