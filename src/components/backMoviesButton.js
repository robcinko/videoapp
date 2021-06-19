import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

export default function ButtonToMovies(props){

   const history = useHistory()

   function handleClick(){
      history.push('/allmovie')
   }

   return(
      <Button variant='warning'
      onClick={handleClick}
      
      >

         Back to movie list
      </Button>
   )
}