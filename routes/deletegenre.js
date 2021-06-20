//dependencies
const express = require('express');
const router = express.Router();
const genreModel = require('../models/genre.js');

//routes
router.delete('/:genreId',(request, response) => {
   genreModel.deleteOne({
      _id : request.params.genreId
   },(err) => {
      if(err){
         console.log("Problems with removing entry" + err);
         response.status(500).json({message: "Problems with removing entry"});
      }
      else{
         console.log("Entry was removed from database");
         response.status(200).json({message: "Entry was removed from database"});
      }

   });
   
});

module.exports = router;