const express = require ('express');
const router = express.Router();
const controller = require('../controllers/alquilerControllers');
const log = require('../middlewares/logRegister.js')



router.post('/alquilar', controller.alquilar);
router.get('/listar', controller.listar);
router.post('/editar/:id', controller.editar);
router.get('/buscar', controller.buscar);

module.exports = router;