import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {Film} from 'react-bootstrap-icons';
import ButtonCreateMovie from './buttonCreateMovie';
import ButtonShowAllMovies from './buttonMovieList';
import { ButtonGroup, Col } from 'react-bootstrap';




export default class HomePage extends React.Component{

   return
   render(){
      return(
      <Jumbotron>
         <Row>
         </Row>
         <Row style={{paddingTop:'200px', textAlign: 'center'}} >
            <Film style={{fontSize: "64px"}}></Film>
                  <h2>Video Library</h2>
                  <p>Your journey to the world of films</p>
         </Row>
         <Row style={{paddingTop:'20px', textAlign: 'center'}}>
            <Col>
            <ButtonGroup>
               <ButtonCreateMovie></ButtonCreateMovie>
               <ButtonShowAllMovies></ButtonShowAllMovies>
               </ButtonGroup>
            </Col>

         </Row>
         <Row style={{paddingTop:'200px', textAlign: 'center', fontSize: "10px"}}>
            <p>Version 1.0 without search bar</p>
         </Row>

      </Jumbotron>
      )
   }
}