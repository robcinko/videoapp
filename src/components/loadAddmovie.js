import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Layout from './layout';
import ImdbLayout from './imdbLayout';


export default function LoadAddmovie(props){
   return(

      <Jumbotron>
      <Card>
         <Card.Header as='h3'>
            Pridanie nového filmu
         </Card.Header>
         <Card.Body>
            <Layout/>
         </Card.Body>
         <Card.Body>
            <ImdbLayout/>
         </Card.Body>
      </Card>
      </Jumbotron>
   );
}