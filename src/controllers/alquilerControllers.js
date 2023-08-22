const Alquiler = require('../database/models/Alquiler');

const controller = {

    listar: async(req,res)=>{
        try{
            let canchasAlquiladas = await Alquiler.find({});
            res.status(200).json(canchasAlquiladas); }
            catch (error){
                console.log('Ha ocurrido un error: '+error);
            }
    },

    alquilar: async(req,res)=>{
        try {
            let alquiler = {
                cancha : req.body.cancha,
                date: req.body.date,
                hour : req.body.hour,
                user : req.body.user,
                };
            let alquilerData = await Alquiler.create(alquiler);
            res.status(201).json(alquilerData);
        }
        catch(error) {
            //console.log(error);
            if(error.errors.name) {
                res.status(400).json({message: 'Falta el campo name'})
            } else {
                res.status(500).json({message: 'Internal Server Error!'})
            }
        }
    },
    editar: async(req,res)=>{
           try{  
            let alquilerData = {
                cancha: req.body.cancha,
                date: req.body.fecha,
                hour: req.body.hora,
                user: req.body.user, 
            }
            let actualizarAlquiler = await Alquiler.findByIdAndUpdate(req.params.id,alquilerData)

            res.status(200).json(actualizarAlquiler);
            }
            
            catch (error) {
                console.log('Ha ocurrido un error: '+ error);
            }
    },
    buscar: async(req,res) => {
            console.log(req.query);
            let canchas = await Alquiler.find({date: req.body.fecha,cancha: req.body.cancha});
            res.status(200).json(canchas);
    }



};

module.exports = controller; 