import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ViewMovieButton from './viewMovieButton';
import ButtonUpdate from './updateButton';
import {Star, StarFill} from 'react-bootstrap-icons';


export default class GenreTable extends React.Component{
   constructor(props){
      super(props);


   }
   
   render(){
      const genreAndId = this.props.genreData;
      let htmlMarkup = []
      genreAndId.map((genre, index) => {
         htmlMarkup.push(
            <Row key={'index-'+index} style={{paddingTop:'+10px'}}>
               <hr></hr>
               <Col>{genre.genre}</Col>
               <Col>
               <ButtonGroup>
                  <Button variant="danger"
                  onClick={
                     () => {
                        this.props.handleDelete(genre.id)
                     }
                  }
                  >
                     Delete
                  </Button>

               </ButtonGroup>
               </Col>
            </Row>

         )
      })
      return(
         <Container>
            <Row>
               <Col as="h4">Genre</Col>
               <Col>Actions</Col>
            </Row>
            {htmlMarkup}

         </Container>
         
      );
   }
}