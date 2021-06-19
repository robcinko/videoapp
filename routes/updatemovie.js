//dependencies
const express = require('express');
const router = express.Router();
const movieModel = require('../models/movies.js');

router.put('/:movieId',(request, response) => {

   const input = request.body;
   movieModel.updateOne({
      _id: request.params.movieId
   },{
      movieName: input.movieName,
      movieDescription: input.movieDescription,
      movieTrailer: input.movieTrailer,
      movieStars: input.movieStars,
      movieYear: input.movieYear,
      moviePoster: input.moviePoster 
      

   }, (err,result) => {
      if(err){
         console.log("Problems with updating entry" + err);
         response.status(500).json({message: "Problems with updating entry"});
      }
      else{
         console.log("Entry was updated");
         response.status(200).json({message: "Entry was updated"});
      }

   })
});
module.exports = router;
