const express = require ('express');
const router = express.Router();
const controllerUsuario = require('../controllers/userController');
const upload = require ('../middlewares/multer');



// RUTAS A CONTROLLERS////
router.post('/crear', controllerUsuario.crear);



module.exports = router;