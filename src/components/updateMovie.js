import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from './textField';
import CustomTextArea from './textArea';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DialogWindow from './dialogWindow';
import BackMovieButton from './backMoviesButton';


export default class UpdateMovie extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         fetchError : false,
         movieName : '',
         movieDescription : '',
         movieYear: '',
         moviePoster:'',
         movieGenre: '',
         movieTrailer: '',
         movieStars: '',
         show: false,
         title: '',
         content: '',

      }
      this.textFieldsHandler = this.textFieldsHandler.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeWindow = this.closeWindow.bind(this);
   }

     closeWindow(){
      this.setState({
         show: false
      })
      console.log("dialog box closed");
   }

   handleSubmit(event){
      const data ={
         movieName : this.state.movieName,
         movieDescription : this.state.movieDescription,
         movieYear: this.state.movieYear,
         moviePoster:this.state.moviePoster,
         movieGenre: this.state.movieGenre,
         movieTrailer: this.state.movieTrailer,
         movieStars: this.state.movieStars,
      }
      fetch('/api/updatemovie/' + this.props.movieId,{
         method:'PUT',
         body: JSON.stringify(data),
         headers: {
            'Content-type':'application/json'
         }
      }).then((response) => {
         if(response.ok){
           
            return response.json()

         }else{
            throw new Error;
         }
      }).then((responseAsJson) => {
         this.setState({
            show : true,
            title: "Podarilo sa",
            content : "Zaznam sa updatoval"
         })
         console.log("Movie update was successful")
      }).catch(() => {
         console.log("Error with updating")
      })
      event.preventDefault();
   }

   componentDidMount(){
      fetch('/api/readmovie/' + this.props.movieId ,{
         method: 'GET'
      }).then((response) => {
         if(response.ok){
            return response.json();
         }else{
            throw new Error;
         }
      }).then((responseAsJson) => {
         
         this.setState({
            movieName : responseAsJson.movieName,
            movieDescription : responseAsJson.movieDescription,
            movieYear: responseAsJson.movieYear,
            moviePoster: responseAsJson.moviePoster,
            movieGenre: responseAsJson.movieGenre,
            movieTrailer: responseAsJson.movieTrailer,
            movieStars: responseAsJson.movieStars,
            fetchError: false
         })
         console.log("ok")
      }).catch(() => {
         
         console.log('Problems')
      })
   }
   textFieldsHandler(event){
      
      if(event.target.name === 'movieName'){
         this.setState({
            movieName : event.target.value
         });
         console.log('Movie name: '+ this.state.movieName);
   
      };


      if(event.target.name === 'movieDescription'){
         this.setState({
            movieDescription: event.target.value
         });
         console.log('Movie Description: '+ this.state.movieDescription);
   
      };

      if(event.target.name === 'moviedeYear'){
         this.setState({
            movieYear: event.target.value
         });
         console.log('Movie Year: '+ this.state.movieYear);
   
      };

      if(event.target.name === 'moviedePoster'){
         this.setState({
            moviePoster: event.target.value
         });
         console.log('Movie poster: '+ this.state.moviePoster);
   
      };

      if(event.target.name === 'movieGenre'){
         this.setState({
            movieGenre: event.target.value
         });
         console.log('Movie genre: '+ this.state.movieGenre);
   
      };
      if(event.target.name === 'movieTrailer'){
         this.setState({
            movieTrailer: event.target.value
         });
         console.log('Movie trailer: '+ this.state.movieTrailer);
   
      };

      if(event.target.name === 'movieStars'){
         this.setState({
            movieStars: event.target.value
         });
         console.log('Movie stars: '+ this.state.movieStars);
   
      };

   
   }

   render(){
      if(this.state.fetchError){
      return(
         <Jumbotron>
         <Card>
            <Card.Header as='h3' style={{textAlign:"center"}}>Update movie</Card.Header>
            <Card.Body>Chyba pri čítaní z DB</Card.Body>
         </Card>
         </Jumbotron>

      )
   }
   return(
      <Jumbotron>
      <Card>
         <Card.Header as='h3' style={{textAlign:"center"}}>Update movie</Card.Header>
         <Card.Body>
         <Form onSubmit={this.handleSubmit}>
            <Container>
            <Row>
            <Col>
               <TextField 
                  label='Názov filmu' 
                  name='movieName'
                  val={this.state.movieName} 
                  inputHandler={this.textFieldsHandler}
                  />
               </Col>
               <Col>
               <TextField 
                  label='Rok vydania' 
                  name='moviedeYear'
                  val={this.state.movieYear} 
                  inputHandler={this.textFieldsHandler}
                  />
               </Col>
            </Row>
            <Row style={{marginTop:'1em'}}>
               <Col>
               <TextField 
                  label='Plagat filmu' 
                  name='moviedePoster'
                  val={this.state.moviePoster} 
                  inputHandler={this.textFieldsHandler}
                  />
               </Col>
               <Col>
               <TextField 
                  label='Hodnotenie filmu' 
                  name='movieStars'
                  val={this.state.movieStars} 
                  inputHandler={this.textFieldsHandler}
                  />
               </Col>
            </Row> 
            <Row style={{marginTop:'1em'}}>
               <Col>
               <TextField 
                  label='Zaner filmu' 
                  name='movieGenre'
                  val={this.state.movieGenre} 
                  inputHandler={this.textFieldsHandler}
                  />
               </Col>
               <Col>
               <TextField 
                  label='Trailer filmu' 
                  name='movieTrailer'
                  val={this.state.movieTrailer} 
                  inputHandler={this.textFieldsHandler}
                  />
               </Col>
            </Row> 

            <Row style={{marginTop:'1em'}}>
            <CustomTextArea
            label='Popis/Obsah filmu'
            name='movieDescription'
            val = {this.state.movieDescription}
            inputHandler = {this.textFieldsHandler}
            ></CustomTextArea>
            </Row>
            <Row>
               <Col>
               <Button 
               type='submit'
               variant='primary'
               size='lg'
               >
                  Update movie
               </Button>

               </Col>
            </Row>
            <Row style={{paddingTop:'10px'}}>
            <Col>
            <BackMovieButton >
            </BackMovieButton>
            </Col>
            </Row>
            </Container>
            <DialogWindow
            show={this.state.show}
            title={this.state.title}
            content={this.state.content}
            closeHandler={this.closeWindow}
            />

            </Form>
         </Card.Body>

      </Card>
      </Jumbotron>

      )
   }
}