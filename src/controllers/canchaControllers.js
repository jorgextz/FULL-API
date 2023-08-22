const Cancha = require('../database/models/Cancha')

const controller = {
    listar: async(req,res)=>{
        let Canchas = await Cancha.find({});
        res.status(200).json(Canchas);
    },

    crear: async(req,res) => {
        try{
            let nuevaCancha = {
                cancha: req.body.cancha,
            }
           let ListadoCanchas = await Cancha.find({});
           if(ListadoCanchas.length) {
                ListadoCanchas.forEach(async(cancha) =>{
                    if(cancha.cancha != nuevaCancha.cancha){
                        let creacionCancha = await Cancha.create(nuevaCancha)
                        return res.status(200).json(nuevaCancha)
                    } 
                        else {return res.json({"mensaje":"La cancha ya existe"})}
                })
                } else {
                    let creacionCancha = Cancha.create(nuevaCancha);
                        res.status(200).json(nuevaCancha);
                }
        }
        catch(error){
            console.log(error);
        }
    },
    
};

module.exports = controller; 