import React from 'react';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImdbTable from './moviesImdbTable'


import TextField from './textField';

export default class imdbLayout extends React.Component{

   constructor(props){
      super(props);

      this.state = {
         movieName : '',
         movieDescription : '',
         movieYear: '',
         moviePoster:'',
         show: false,
         title: '',
         content: '',
         movieNameImdb : '',
         checkbox: false,
         movieData: [],


      }
      this.textFieldsHandler = this.textFieldsHandler.bind(this);
      this.apiHandler = this.apiHandler.bind(this);

   }
   textFieldsHandler(event){

      if(event.target.name === 'movieNameImdb'){
         this.setState({
            movieNameImdb : event.target.value
         });
         console.log('Movie name: '+ this.state.movieNameImdb);
   
      };

   }
   apiHandler(event){

      const movieNameImdb = this.state.movieNameImdb
      const API_IMDB = `https://api.themoviedb.org/3/search/movie?api_key=5ddd4754bb653ff7e4a7ecd2669ab5e6&language=cs&query=${movieNameImdb}&page=1&include_adult=false`
      event.preventDefault()
      console.log(API_IMDB)
      fetch(API_IMDB,{
         method: 'GET',
         headers: {
            "Accept" : "application/json",
            'Content-Type' : 'app'
         }
      }).then((response) => {
         if(response.ok){
            console.log(response)
            return response.json();
            
         }else{
            console.log("Problems with reading DB")

         }
      }).then((responseAsJson) => {
         let moviesArray = [];
         console.log(moviesArray)
         responseAsJson.results.map((movie, index) => {
            moviesArray.push(
               {

                  movieNameImdb : movie.original_title,
                  movieDescriptionImdb : movie.overview,
                  movieYearImdb : movie.release_date,
                  moviePosterImdb : movie.poster_path,
                  movieStarsImdb: movie.vote_average

               }
            )
            
         })
         this.setState((state, props) => {
            return{
               movieData: state.movieData.concat(moviesArray)
            }
         })
         console.log(this.state.movieData)
      })
   }

 
   render(){
      return(
         
         <Container>
            <Form onSubmit={this.apiHandler}>
            <Row style={{marginTop:'1em'}}>
         
            <TextField 
               customId='movieNameImdb'
               label='Movie name - searching in iMDB database' 
               placeholder='Write movie name' 
               name='movieNameImdb'
               val={this.state.movieNameImdb} 
               inputHandler={this.textFieldsHandler}
               text='Please write movie name'
            />   
            </Row>
            <Row style={{marginTop:'1em'}}>
               <Col>
            <Button 
               type='submit'
               variant='primary'
               size='lg'
            >
            Search
            </Button>
            </Col>
            </Row>
            </Form>

            <ImdbTable movieData={this.state.movieData}></ImdbTable>
         </Container>
         


            
            
      )
   }
}
