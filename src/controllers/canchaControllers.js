const Cancha = require('../database/models/Cancha')

const controllercanchas = {
    listar: async(req,res)=>{
        let Canchas = await Cancha.find({});
        res.status(200).json(Canchas);
    },

};

module.exports = controllercanchas; 