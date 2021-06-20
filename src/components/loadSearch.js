import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Search from './search'


export default function LoadSearch(props){
   return(

      <Jumbotron>
      <Card>
         <Card.Header as='h3' style = {{textAlign: 'center'}}>
            Movie database
         </Card.Header>
         <Card.Body>
            <Search></Search>
         </Card.Body>
      </Card>
      </Jumbotron>
   );
}