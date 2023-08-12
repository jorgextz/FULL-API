const path = require('path');
const express = require('express');
const app = express();
const products = require('./routes/products');
const connectDB = require('./database/connect');
const logRegister = require ('./middlewares/log');

/////CONEXION A DB////
connectDB();

//////CONFIGURACIONES//////    
logRegister();
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//////// RUTAS //////////
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
app.use('/productos',products);

/////// CONECTAR SERVIDOR /////
app.listen(3002, ()=>{
    console.log('Servidor Corriendo en el puerto: http://localhost:3002')
})