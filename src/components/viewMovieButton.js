import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';


export default function ViewMovieButton(props){
   const history = useHistory();

   function handleClick(){

      history.push('/readmovie/' + props.movieId);
      console.log('movie ID:' + props.movieId)
   }
   return(
      <Button
      var="warning"
      onClick={handleClick}
      
      >
         View Movie
      </Button>
   );
}