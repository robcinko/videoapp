const mongoose = require('mongoose');

//mongoose schema

const customSchema = new mongoose.Schema({

   movieName : {
      type: String,
      
   },

   movieDescription : {
      type: String,
      
   },

   movieYear : {
      type: String,
      
   },

   moviePoster : {
      type: String,
      
   },

   movieGenre : {
      type: String,
      
   },
   movieTrailer : {
      type: String,
      
   },
   movieStars : {
      type: String,
      
   }


});

//model export
module.exports = mongoose.model('movie', customSchema);
