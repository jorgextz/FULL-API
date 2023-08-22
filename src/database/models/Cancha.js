const mongoose = require('mongoose');


const canchaSchema = new mongoose.Schema({
    
    cancha: {type: Number, required: true},
    
});

const Cancha = mongoose.model('Cancha',canchaSchema);

module.exports = Cancha; 