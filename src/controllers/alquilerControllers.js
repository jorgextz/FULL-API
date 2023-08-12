const Alquiler = require('../database/models/Alquiler')

const controlleralquiler = {
    listar: async(req,res)=>{
        let Alquiler = await Alquiler.find({});
        res.status(200).json(Alquiler);
    },

    alquilar: async(req,res)=>{
        try {
            let alquiler = {
                cancha : req.body.cancha,
                date: req.body.date,
                hour : req.body.hour,
                user : req.body.user,
                };
            console.log(req);
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
    }

};

module.exports = controlleralquiler; 