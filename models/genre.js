const mongoose = require('mongoose');

//mongoose schema

const customSchema = new mongoose.Schema({

   genre : {
      type: String,
      required: true
      
   },


});


//model export
module.exports = mongoose.model('genre', customSchema);
