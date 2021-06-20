import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron'
import GenreLayout from './genreLayout'


export default function LoadAddgenre(props){
   return(

      <Jumbotron>
      <Card>
         <Card.Header as='h3'>
            Add movies genres
         </Card.Header>
         <Card.Body>
            <GenreLayout/>
         </Card.Body>
      </Card>
      </Jumbotron>
   );
}