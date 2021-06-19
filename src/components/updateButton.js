import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

export default function ButtonMovieUpdate(props){

   const history = useHistory();

   function handleClick(){
      history.push('/updatemovie/'+props.movieId)
   }
   return(
      <Button
      variant='info'
      onClick={handleClick}
      >
         Update
      </Button>
   )
}