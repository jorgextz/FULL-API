const mongoose = require('mongoose');


const alquilerSchema = new mongoose.Schema({
    
    cancha: {type: Number, required: true},
    day: {type: String, required: true},
    hour: {type: Number, required: true},
    user: {type: String, required: true},
    reserveDay: {type: String, required: true} 
    
});

const Alquiler = mongoose.model('Alquiler',alquilerSchema);

module.exports = Alquiler;