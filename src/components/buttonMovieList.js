import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

export default function ButtonCreateMovie(props){

   const history = useHistory();

   function handleClick(){
      history.push('/allmovie/')
   }
   return(
      <Button
      variant='primary'
      onClick={handleClick}
      >
         Movie list
      </Button>
   )
}