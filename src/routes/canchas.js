const express = require ('express');
const router = express.Router();
const controller = require('../controllers/canchaControllers');



//// RUTAS A CONTROLLERS////
router.get('/listar', controller.listar);
router.get('/crear', controller.crear);


module.exports = router;