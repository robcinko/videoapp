//dependencies
const { request } = require('express');
const express = require('express');
const router = express.Router();
const movieModel = require('../models/movies.js');

router.get("/all", (request, response) => {
   movieModel.find((err, docs) => {
      if(err){
         console.log("ERROR" + err);
         response.status(500).json({message: 'Problem with reading from database'});
      }
      else{
         console.log("Reading from database was sucessfull");
         response.status(200).json(docs);
      }
   });
});

router.get("/:movieId", (request, response) => {
   movieModel.findOne({

      _id: request.params.movieId
   },(err, movie) => {
      if(err){
         console.log("ERROR" + err);
         response.status(500).json({message: "Problems with reading the database"});
      }
      else{
         console.log("Reading from database was successful");
         response.status(200).json(movie);
      }
      
   
   });
   
});

module.exports = router;