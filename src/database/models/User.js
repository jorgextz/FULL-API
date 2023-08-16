const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

  correo: {type:String, required: true},
  password: {type: Number, required: true},
  name: {type: String, required: true},
  lastname: {type: String},
  phone: {type: Number, required: true}

});

const User = mongoose.model('User', userSchema);

module.exports = User; 


