const express = require ('express');
const router = express.Router();
const controller = require('../controllers/productsControllers');
const controllercanchas = require('../controllers/canchaControllers');
const controlleralquiler = require('../controllers/alquilerControllers');
const upload = require ('../middlewares/multer');



//// RUTAS A CONTROLLERS////
router.get('/listar', controllercanchas.listar);
router.get('/detalle', controller.detalle);
router.post('/crear',upload.single('image'), controller.crear);
router.post('/alquilar', controlleralquiler.alquilar);
router.put('/actualizar/:id', controller.update);







module.exports = router;