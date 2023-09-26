const User = require('../database/models/User')

const controller = {
    crear: async (req, res) => {
        try {
            let dataUser = {
                correo: 'user@gmail.com',
                password: 278506,
                name: 'User',
                phone: 1154753621
            };
            let userList = await User.find({});
            if (userList.length) {
                userList.forEach(async (usuario) => {
                    if (usuario.correo != dataUser.correo && usuario.phone != dataUser.phone) {
                        let userCreation = await User.create(dataUser)
                        return res.status(200).json(dataUser)
                    }
                    else { return res.json({ "mensaje": "Ya existe un Usuario con ese correo" }) }
                })
            } else {
                let userCreation = User.create(dataUser);
                res.status(200).json(dataUser);
            }
        }
        catch (error) {
            //console.log(error);
            if (error.errors.name) {
                res.status(400).json({ message: 'Falta el campo name' })
            } else {
                res.status(500).json({ message: 'Internal Server Error!' })
            }
        }
    },

};

module.exports = controller;