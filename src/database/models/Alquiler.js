const mongoose = require('mongoose');


const alquilerSchema = new mongoose.Schema({
    
    cancha: {type: String, required: true},
    date: {type: Date, required: true},
    hour: {type: Number, required: true},
    user: {type: String, required: true}
    
});

const Alquiler = mongoose.model('Alquiler',alquilerSchema);

module.exports = Alquiler;