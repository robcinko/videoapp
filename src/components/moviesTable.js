import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ViewMovieButton from './viewMovieButton';
import ButtonUpdate from './updateButton';
import {Star, StarFill} from 'react-bootstrap-icons';


export default class MoviesTable extends React.Component{
   constructor(props){
      super(props);


   }
   
   render(){
      const nameAndId = this.props.movieData;
      let htmlMarkup = []
      nameAndId.map((movie, index) => {
         htmlMarkup.push(
            <Row key={'index-'+index} style={{paddingTop:'+10px'}}>
               <hr></hr>
               <Col>{movie.id}</Col>
               <Col>{movie.movieName}</Col>
               <Col>{movie.movieStars}/10
               <StarFill style={{color: "#FFD300"}}></StarFill>
               </Col>
               <Col>
               <ButtonGroup>
                  <Button variant="danger"
                  onClick={
                     () => {
                        this.props.handleDelete(movie.id)
                     }
                  }
                  >
                     Delete
                  </Button>
                  <ViewMovieButton
                  movieId={movie.id}
                  
                  ></ViewMovieButton>
                  <ButtonUpdate
                  movieId={movie.id}
                  >

                  </ButtonUpdate>
               </ButtonGroup>
               </Col>
            </Row>

         )
      })
      return(
         <Container>
            <Row>
               <Col>Movie ID</Col>
               <Col as="h4">Názov</Col>
               <Col>Hodnotenie</Col>
               <Col>Actions</Col>
            </Row>
            {htmlMarkup}

         </Container>
         
      );
   }
}