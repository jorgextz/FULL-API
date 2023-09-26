const mongoose = require('mongoose');


const canchaSchema = new mongoose.Schema({

    number: { type: Number, required: true },
    priceDay: { type: Number, required: true },
    priceNight: {type: Number, required: true},
    category: {type: String, required: true},
    img: { type: String, required: true },
    days: { type: Array, required: true }

});

const Cancha = mongoose.model('Cancha', canchaSchema);

module.exports = Cancha; 