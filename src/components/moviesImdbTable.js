import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import TextField from './textField';
import Form from 'react-bootstrap/Form';
import DialogWindow from './dialogWindow';



export default class MoviesImdbTable extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         show: false,
         title: '',
         content: ''
      }
      this.closeWindow = this.closeWindow.bind(this);

      
   }

   closeWindow(){
      this.setState({
         show: false
      })
      console.log("dialog box");
   }

   render(){
      const nameAndId = this.props.movieData;
      let htmlMarkup = []
      nameAndId.map((movie, index) => {
         htmlMarkup.push(
            <Row>
               <hr></hr>

               <Col >{movie.movieNameImdb}</Col>
               <Col>
               <ButtonGroup>
                  <Button variant="info"
                  onClick={
                     () => {
                        const movieList = {
                           movieName: movie.movieNameImdb,
                           movieDescription: movie.movieDescriptionImdb,
                           movieYear: movie.movieYearImdb,
                           moviePoster: "https://image.tmdb.org/t/p/w500" + movie.moviePosterImdb,
                           movieStars: movie.movieStarsImdb
                  
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
                     }
                  }
                  >
                     Pridaj film
                  </Button>
               </ButtonGroup>
               </Col>
               <DialogWindow
         show={this.state.show}
         title={this.state.title}
         content={this.state.content}
         closeHandler={this.closeWindow}
         />
            </Row>
         )
      })
      return(
         <Container>
            <Row style={{marginTop:'2em'}}>

               <Col as='h4'>Názov filmu</Col>
               <Col>Akcie</Col>
            </Row>
            {htmlMarkup}
         </Container>
      );
   }
}