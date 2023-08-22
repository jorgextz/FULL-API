const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const canchas = require('./routes/canchas');
const alquileres = require('./routes/alquileres');
const usuarios = require('./routes/usuarios')
const connectDB = require('./database/connect');
// const logRegister = require ('./middlewares/log');


/////CONEXION A DB////
connectDB();

//////CONFIGURACIONES//////   
const rutaLog = path.resolve(__dirname, './data/log.txt');

app.use('/',(req, res, next)=> {
    fs.appendFile(rutaLog, req.originalUrl+'\n',(error)=>{
        if(error) {
            console.log('Ha ocurrido un error al procesar los datos!')
        } else {
            console.log('Los datos fueron procesados correctamente')
        }
    })      
    next();
   });
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// logRegister();

//////// RUTAS //////////
app.use('/alquiler', alquileres);
app.use('/canchas',canchas);
app.use('/usuario', usuarios);


/////// CONECTAR SERVIDOR /////
app.listen(3002, ()=>{
    console.log('Servidor Corriendo en el puerto: http://localhost:3002')
})