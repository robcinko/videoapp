import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

export default function ButtonCreateMovie(props){

   const history = useHistory();

   function handleClick(){
      history.push('/addgenre/')
   }
   return(
      <Button
      variant='primary'
      onClick={handleClick}
      >
         Add genre
      </Button>
   )
}
