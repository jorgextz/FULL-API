const Alquiler = require('../database/models/Alquiler');

const controller = {

    listar: async(req,res)=>{
        let alquiler = await Alquiler.find({});
        res.status(200).json(alquiler);
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
            let Alquiler = await Alquiler.find({});
            res.status(200).json(Alquiler);
    },
        buscar: async(req,res) => {
            console.log(req.query);
            let canchas = await Alquiler.find({date: req.query.fecha});
            res.status(200).json(canchas);
    }



};

module.exports = controller; 