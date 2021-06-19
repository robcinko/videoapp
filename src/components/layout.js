import React from 'react';
import TextField from './textField';
import CustomTextArea from './textArea';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DialogWindow from './dialogWindow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePage from './backToHome'
import { ButtonGroup } from 'react-bootstrap';


export default class Layout extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         movieName : '',
         movieDescription : '',
         movieYear: '',
         moviePoster:'',
         movieGenre: '',
         movieTrailer: '',
         movieStars: '',
         show: false,
         title: '',
         content: ''
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

      const movieList = {
         movieName: this.state.movieName,
         movieDescription: this.state.movieDescription,
         movieYear: this.state.movieYear,
         moviePoster: this.state.moviePoster,
         movieGenre: this.state.movieGenre,
         movieTrailer: this.state.movieTrailer,
         movieStars: this.state.movieStars,

      };
   //
      fetch('/api/addmovie',{
         method: 'POST',
         body: JSON.stringify(movieList),
         headers: {
            'Content-Type':'application/json'
         }
      }).then((response) => {
         if(response.ok){
            this.setState({
               show : true,
               title: "Podarilo sa",
               content : "Nový záznam filmu sa uložil do DB"
            })
            console.log('The movie was saved');
         }else{
            this.setState({
               show : true,
               title: "CHYBA",
               content : "Nový záznam filmu sa neuložil do DB"
            })
            console.log('The movie was NOT saved');
         }
      });
      event.preventDefault();
      console.log('Save movie to DB');
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
      return(
         <Form onSubmit={this.handleSubmit}>
         <Container>
            <Row style={{marginTop:'1em'}}>
               <Col>
               <TextField 
                  customId='movieName'
                  label='' 
                  placeholder='Napíš názov filmu' 
                  name='movieName'
                  val={this.state.movieName} 
                  inputHandler={this.textFieldsHandler}
                  text='Prosím napíš celý názov filmu'
                  />
               </Col>
               <Col>
               <TextField 
                  customId='movieYear'
                  label='Rok vydania' 
                  placeholder='Napíš rok vydania filmu' 
                  name='moviedeYear'
                  val={this.state.movieYear} 
                  inputHandler={this.textFieldsHandler}
                  text='Prosím napíš číslom rok vydania filmu'/>
               </Col>
            </Row>
            <Row style={{marginTop:'1em'}}>
               <Col>
               <TextField 
                  customId='moviePoster'
                  label='Plagat filmu' 
                  placeholder='Plagat filmu' 
                  name='moviedePoster'
                  val={this.state.moviePoster} 
                  inputHandler={this.textFieldsHandler}
                  text='Prosím vloz odkaz na plagat filmu'/>
               </Col>
               <Col>
               <TextField 
                  customId='movieStars'
                  label='Hodnotenie filmu' 
                  placeholder='Hodnotenie filmu' 
                  name='movieStars'
                  val={this.state.movieStars} 
                  inputHandler={this.textFieldsHandler}
                  text='Prosím ohodnot film 1-10'/>
               </Col>
            </Row> 
            <Row style={{marginTop:'1em'}}>
               <Col>
               <TextField 
                  customId='movieGenre'
                  label='Zaner filmu' 
                  placeholder='Zaner filmu' 
                  name='movieGenre'
                  val={this.state.movieGenre} 
                  inputHandler={this.textFieldsHandler}
                  text='Prosím vloz zaner filmu'/>
               </Col>
               <Col>
               <TextField 
                  customId='movieTrailer'
                  label='Trailer filmu' 
                  placeholder='Trailer filmu' 
                  name='movieTrailer'
                  val={this.state.movieTrailer} 
                  inputHandler={this.textFieldsHandler}
                  text='Prosím vloz odkaz na trailer filmu'/>
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
               <ButtonGroup>
               <Button 
               type='submit'
               variant='primary'
               size='lg'
               >
                  Ulož film
               </Button>
               <HomePage></HomePage>
               </ButtonGroup>

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
      );
   }
}
