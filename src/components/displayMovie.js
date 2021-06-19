import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Star, StarFill} from 'react-bootstrap-icons';
import ReactPlayer from 'react-player';
import { ButtonGroup, CardDeck } from 'react-bootstrap';
import BackMovieButton from './backMoviesButton';
import HomePage from './backToHome'


export default class DisplayMovie extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         fetchError: false,
         movieName : '',
         movieDescription : '',
         movieYear: '',
         moviePoster:'',
         movieGenre: '',
         movieTrailer: '',
         movieStars: ''
      }
   }

   componentDidMount(){
      fetch('/api/readmovie/'+ this.props.movieId,{
         method:'GET'
      }).then((response) => {
         if(response.ok){
            return response.json()
         }else{
            throw new Error()
         }
         
      }).then((responseAsJson) => {
         this.setState({
            movieName : responseAsJson.movieName,
            movieDescription : responseAsJson.movieDescription,
            movieYear : responseAsJson.movieYear,
            moviePoster : responseAsJson.moviePoster,
            movieTrailer: responseAsJson.movieTrailer,
            movieGenre: responseAsJson.movieGenre,
            movieStars: responseAsJson.movieStars

         })
         console.log('Movie was read from DB')
      }).catch(() => {
         this.setState({

            fetchError: true
         })
         console.log('Some problems appear')
      })
   }
   render(){
      if(this.state.fetchError){
            return(
               <Jumbotron>
                  <Card>
                     <Card.Header as='h3' style={{textAlign:'center'}}>Detail videa</Card.Header>
                     <Card.Body>
                        <h2>
                           Error with reading from DB
                        </h2>
                     </Card.Body>
                  </Card>
               </Jumbotron>
            )
      }
      return(


         <Jumbotron>
            <Card>
               <Card.Header as='h3' style={{textAlign:'center'}}>
                  Movie detail
               </Card.Header>
               <Card.Body>
                  <Container>
                     <Row>
                        <Col as='h4'>
                        {this.state.movieName}
                        </Col>
                        <Col>
                        Rating: 
                        {this.state.movieStars}/10 
                        <StarFill style={{color: "#FFD300"}}></StarFill>
                        </Col>
                     </Row>
                     <Row>
                        <Row>
                           <Col>
                           Year:
                           {this.state.movieYear}
                           </Col>
                           <Col>
                           Movie genre:
                           {this.state.movieGenre}
                           </Col>
                        </Row>
                        </Row>
                        <Row style={{paddingTop:"40px"}}>
                        <h3>Movie description:</h3>
                        {this.state.movieDescription}
                     </Row>
                     <Row>
                        <Col>
                        <picture>
                        <img src={this.state.moviePoster} class="img-fluid" alt="Movie Poster" style={{maxWidth: "250px", paddingTop:"40px"}}></img>
                        </picture>
                        </Col>
                        <Col>
                           <ReactPlayer url={this.state.movieTrailer} style={{paddingTop:"40px"}}></ReactPlayer>
                        </Col>
                     </Row>
                     <Row style={{paddingTop:"40px"}}>
                        <Col>
                        <ButtonGroup>
                        <BackMovieButton>
                        </BackMovieButton>

                        <HomePage>
                        </HomePage>
                        </ButtonGroup>
                        </Col>
                     </Row>
                  </Container>
               </Card.Body>
            </Card>
         </Jumbotron>
      )
   }
}