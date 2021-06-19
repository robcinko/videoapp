import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route
} from 'react-router-dom';

// importing components
import LoadHomepage from './loadHomepage';
import LoadAddmovie from './loadAddmovie';
import LoadUpdatemovie from './loadUpdatemovie';
import LoadReadmovie from './loadReadmovie';
import LoadAllmovie from './loadAllmovie';
import PageNotFound from './pageNotFound';


export default class App extends React.Component{
   constructor(props){
      super(props);
   }
   render(){
      return(
         <BrowserRouter>
            <Switch>
            
            <Route exact path='/'>
               <LoadHomepage/>
            </Route>
            
            <Route path='/addmovie'>
               <LoadAddmovie/>
            </Route>

            <Route path='/updatemovie/:movieId'>
               <LoadUpdatemovie/>
            </Route>

            <Route path='/readmovie/:movieId'>
               <LoadReadmovie/>
            </Route>

            <Route path='/allmovie'>
               <LoadAllmovie/>
            </Route>

            <Route>
               <PageNotFound/>
            </Route>

            </Switch>

         </BrowserRouter>
      );
      }
}