const { response } = require('express');
const express = require('express');
const router = express.Router();
const genreModel = require('../models/genre.js');

//routes
router.post('/' ,(request, response) => {
   const input = request.body;
   const newDocument = new genreModel({
      genre: input.genre,

   });
   newDocument.save((err, doc) => {
      if(err){
         console.log("ERROR" + err);
         response.status(500).json({message: 'Problem with saving input'});
      }
      else{
         console.log("Input was saved to database");
         response.status(200).json({message: 'Input was saved succesfully'});
      }
   });
});


//export contains of this file
module.exports = router;
