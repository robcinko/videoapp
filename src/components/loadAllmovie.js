import React from 'react';
import AllMovies from './allMovies';


import Card from 'react-bootstrap/Card';

export default function LoadAllmovie(props){
   return(
      <Card>
         <Card.Header as='h3' style = {{textAlign: 'center'}}>Výpis z filmovej DB
         
         </Card.Header>

         <Card.Body>
         
         <AllMovies style = {{paddingTop: '20px'}}></AllMovies>
         </Card.Body>

      </Card>

   );
}