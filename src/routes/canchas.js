const express = require ('express');
const router = express.Router();
const controller = require('../controllers/canchaControllers');



//// RUTAS A CONTROLLERS////
router.get('/listar', controller.listar);
router.get('/crear', controller.crear);
router.patch('/editar/:id', controller.editar);

module.exports = router;