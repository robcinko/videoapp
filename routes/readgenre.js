const { request } = require('express');
const express = require('express');
const router = express.Router();
const genreModel = require('../models/genre.js');

router.get("/", (request, response) => {
   genreModel.find((err, docs) => {
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

module.exports = router;