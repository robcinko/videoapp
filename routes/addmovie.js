//dependencies
const { response } = require('express');
const express = require('express');
const router = express.Router();
const movieModel = require('../models/movies.js');

//routes
router.post('/' ,(request, response) => {
   const input = request.body;
   const newDocument = new movieModel({
      movieName: input.movieName,
      movieYear: input.movieYear,
      movieDescription: input.movieDescription,
      moviePoster: input.moviePoster,
      movieTrailer: input.movieTrailer,
      movieStars: input.movieStars,
      movieGenre: input.movieGenre
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
