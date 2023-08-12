const express = require ('express');
const app = express();
const multer = require('multer');

const storageProducts = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.resolve(__dirname, '../../public/images') );
    },
        
    filename: (req,file,cb)=>{
        const tiempoTranscurrido = Date.now();
        const fecha = new Date (tiempoTranscurrido);
        cb(null, file.fieldname+'-' + fecha.toDateString()+path.extname(file.originalname));
    }
})
const upload = multer({storage:storageProducts});

module.exports = upload;