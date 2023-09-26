const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const canchas = require('./routes/canchas');
const alquileres = require('./routes/alquileres');
const usuarios = require('./routes/usuarios')
const connectDB = require('./database/connect');
const cors = require('cors');
const logRegister = require ('./middlewares/logRegister');


/////CONEXION A DB////
connectDB();

//////CONFIGURACIONES//////   
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
logRegister();

//////// RUTAS //////////
app.use('/alquiler', alquileres);
app.use('/canchas',canchas);
app.use('/usuario', usuarios);


/////// CONECTAR SERVIDOR /////
app.listen(3002, ()=>{
    console.log('Servidor Corriendo en el puerto: https://localhost:3002')
})