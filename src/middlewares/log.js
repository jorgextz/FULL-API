const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const log = () => { 
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
}

module.exports = log;


