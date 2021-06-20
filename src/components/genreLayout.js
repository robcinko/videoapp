import React from 'react';
import TextField from './textField';
import CustomTextArea from './textArea';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DialogWindow from './dialogWindow';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePage from './backToHome';
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import GenreTable from './genreTable';



export default class GenreLayout extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         genre : '',
         show: false,
         title: '',
         content: '',
         genreData: [],

      }
      this.textFieldsHandler = this.textFieldsHandler.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeWindow = this.closeWindow.bind(this);
      this.deleteHandler = this.deleteHandler.bind(this);

   }

   closeWindow(){
      this.setState({
         show: false
      })
      console.log("dialog box closed");
   }

   handleSubmit(event){

      const genreList = {
         genre: this.state.genre,


      };
   //
      fetch('/api/addgenre',{
         method: 'POST',
         body: JSON.stringify(genreList),
         headers: {
            'Content-Type':'application/json'
         }
      }).then((response) => {
         if(response.ok){
            this.setState({
               show : true,
               title: "Sucess",
               content : "New record of genre was saved to DB"
            })
            console.log('The movie was saved');
         }else{
            this.setState({
               show : true,
               title: "ERROR",
               content : "Problems with saving movie genre"
            })
            console.log('The movie was NOT saved');
         }
      });
      event.preventDefault();
      console.log('Save movie to DB');
   }

   textFieldsHandler(event){

      if(event.target.name === 'genre'){
         this.setState({
            genre : event.target.value
         });
         console.log('Genre: '+ this.state.genre);
   
      };

   }

   componentDidMount(){
      fetch('/api/readgenre',{
         method : 'GET',
      }).then((response) => {
         if(response.ok){
            return response.json();
         }else{
            console.log("Problems with reading DB")

         }
      }).then((responseAsJson) => {
         let genreArray = [];
         responseAsJson.map((genre, index) => {
            genreArray.push(
               {
                  id: genre._id,
                  genre : genre.genre,

               }
            )
            
         })
         this.setState((state, props) => {
            return{
               genreData: state.genreData.concat(genreArray)
            }
         })
         console.log(this.state.genreData)
      })
   }

   deleteHandler(genreId){
      fetch('/api/deletegenre/' + genreId, {
         method:'DELETE'
      }).then((response) => {
         if(response.ok){
            this.setState({
               show: true,
               title: 'Success',
               content: 'Genre was deleted from database.'
            })
            const genreCopy = this.state.genreData
            //zmazanie filmu z table bez refreshu
            this.state.genreData.map((item, index) => {
               if(item.id === genreId){
                  genreCopy.splice(index, 1)
                  this.setState({
                     genreData: genreCopy
                  })
               }
            })
            console.log('Record was delete from DB')
            
         }else{
            this.setState({
               show: true,
               title: 'ERROR',
               content: 'Problem with movie delete'
            })
            console.log('Record was not removed from DB')

         }
      })
   }

 
   render(){
      return(
         <Form onSubmit={this.handleSubmit}>
         <Container>
            <Row style={{marginTop:'1em'}}>
               <Col>
               <TextField 
                  customId='genre'
                  label='Genre' 
                  placeholder='Write genre' 
                  name='genre'
                  val={this.state.genre} 
                  inputHandler={this.textFieldsHandler}
                  text='Please write new movie genre'
                  />
               </Col>
            </Row>
            <Row>
               <Col>
               <ButtonGroup>
               <Button 
               type='submit'
               variant='primary'
               size='lg'
               >
                  Add genre
               </Button>
               <HomePage></HomePage>
               </ButtonGroup>

               </Col>
            </Row>
            <Row style={{marginTop:'1em'}}>
            <GenreTable genreData={this.state.genreData}
         handleDelete={this.deleteHandler}
         ></GenreTable>
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
