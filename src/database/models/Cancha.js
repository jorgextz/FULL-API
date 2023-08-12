const mongoose = require('mongoose');


const canchaSchema = new mongoose.Schema({
    
    name: {type: String, required: true},
    
});

const Cancha = mongoose.model('Cancha',canchaSchema);

module.exports = Cancha; 