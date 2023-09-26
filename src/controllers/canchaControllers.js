const Cancha = require('../database/models/Cancha')

const controller = {
    listar: async (req, res) => {
        try {
            let Canchas = await Cancha.find({});
            res.status(200).json(Canchas);
        } catch {
            (error) => {
                console.log(error);
            }
        }
    },

    crear: async (req, res) => {
        try {
            let nuevaCancha = {
                number: req.body.number,
                priceDay: req.body.priceDay,
                priceNight: req.body.priceNight,
                category:req.body.category,
                img: req.body.img,
                days: [
                    {
                        dia: "lunes", 
                        horas: [
                            {
                                hour: 9,
                                status:"libre",  
                            },
                            {
                                hour: 10,
                                status:"libre",  
                            },
                            {
                                hour: 11,
                                status:"libre",  
                            },
                            {
                                hour: 12,
                                status:"libre",  
                            },
                            {
                                hour: 13,
                                status:"libre",  
                            }
                        ]
                    },
                    {
                        dia: "martes", 
                        horas: [
                            {
                                hour: 9,
                                status:"libre",  
                            },
                            {
                                hour: 10,
                                status:"libre",  
                            },
                            {
                                hour: 11,
                                status:"libre",  
                            },
                            {
                                hour: 12,
                                status:"libre",  
                            },
                            {
                                hour: 13,
                                status:"libre",  
                            }
                        ]
                    },
                    {
                        dia: "miercoles", 
                        horas: [
                            {
                                hour: 9,
                                status:"libre",  
                            },
                            {
                                hour: 10,
                                status:"libre",  
                            },
                            {
                                hour: 11,
                                status:"libre",  
                            },
                            {
                                hour: 12,
                                status:"libre",  
                            },
                            {
                                hour: 13,
                                status:"libre",  
                            }
                        ]
                    },
                    {
                        dia: "jueves", 
                        horas: [
                            {
                                hour: 9,
                                status:"libre",  
                            },
                            {
                                hour: 10,
                                status:"libre",  
                            },
                            {
                                hour: 11,
                                status:"libre",  
                            },
                            {
                                hour: 12,
                                status:"libre",  
                            },
                            {
                                hour: 13,
                                status:"libre",  
                            }
                        ]
                    },
                    {
                        dia: "viernes", 
                        horas: [
                            {
                                hour: 9,
                                status:"libre",  
                            },
                            {
                                hour: 10,
                                status:"libre",  
                            },
                            {
                                hour: 11,
                                status:"libre",  
                            },
                            {
                                hour: 12,
                                status:"libre",  
                            },
                            {
                                hour: 13,
                                status:"libre",  
                            }
                        ]
                    },
                    {
                        dia: "sabado", 
                        horas: [
                            {
                                hour: 9,
                                status:"libre",  
                            },
                            {
                                hour: 10,
                                status:"libre",  
                            },
                            {
                                hour: 11,
                                status:"libre",  
                            },
                            {
                                hour: 12,
                                status:"libre",  
                            },
                            {
                                hour: 13,
                                status:"libre",  
                            }
                        ]
                    },
                    {
                        dia: "domingo", 
                        horas: [
                            {
                                hour: 9,
                                status:"libre",  
                            },
                            {
                                hour: 10,
                                status:"libre",  
                            },
                            {
                                hour: 11,
                                status:"libre",  
                            },
                            {
                                hour: 12,
                                status:"libre",  
                            },
                            {
                                hour: 13,
                                status:"libre",  
                            }
                        ]
                    }
                ] 
            }
            let ListadoCanchas = await Cancha.find({});
            if (ListadoCanchas.length) {
                ListadoCanchas.forEach(async (cancha) => {
                    if (cancha.number != nuevaCancha.number) {
                        let creacionCancha = await Cancha.create(nuevaCancha)
                        return res.status(200).json("Cancha Creada Exitosamente")
                    }
                    else { return res.json({ "mensaje": "El numero se cancha ya existe" }) }
                })
            } else {
                let creacionCancha = Cancha.create(nuevaCancha);
                res.status(200).json("Cancha Creada Exitosamente");
            }
        }
        catch (error) {
            console.log(error);
        }
    },

};

module.exports = controller; 