import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

export default function ButtonToMovies(props){

   const history = useHistory()

   function handleClick(){
      history.push('/')
   }

   return(
      <Button variant='secondary'
      onClick={handleClick}
      
      >

         Back to homepage
      </Button>
   )
}