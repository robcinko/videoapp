import React from 'react';
import MoviesTable from './moviesTable';
import DialogWindow from './dialogWindow';
import SearchField from "react-search-field";



export default class AllMovies extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         movieData: [],
         show: false,
         title: '',
         content: ''

      }
      this.deleteHandler = this.deleteHandler.bind(this);
      this.closeWindow = this.closeWindow.bind(this);
   }

   deleteHandler(movieId){
      fetch('/api/deletemovie/' + movieId, {
         method:'DELETE'
      }).then((response) => {
         if(response.ok){
            this.setState({
               show: true,
               title: 'Success',
               content: 'Movie was deleted from database.'
            })
            const movieCopy = this.state.movieData
            //zmazanie filmu z table bez refreshu
            this.state.movieData.map((item, index) => {
               if(item.id === movieId){
                  movieCopy.splice(index, 1)
                  this.setState({
                     movieData: movieCopy
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


   //implemented in react
   componentDidMount(){
      fetch('/api/readmovie/all',{
         method : 'GET',
      }).then((response) => {
         if(response.ok){
            return response.json();
         }else{
            console.log("Problems with reading DB")

         }
      }).then((responseAsJson) => {
         let moviesArray = [];
         responseAsJson.map((movie, index) => {
            moviesArray.push(
               {
                  id: movie._id,
                  movieName : movie.movieName,
                  movieStars: movie.movieStars

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

   closeWindow(){
      this.setState({
         show: false
      })
      console.log("dialog box");
   }

   render(){
      return(
         <div>
         <SearchField  placeholder="Search..."
         searchText="This is initial search text"
         classNames="test-class">

         </SearchField>
         <MoviesTable movieData={this.state.movieData}
         handleDelete={this.deleteHandler}
         ></MoviesTable>
         <DialogWindow
         show={this.state.show}
         title={this.state.title}
         content={this.state.content}
         closeHandler={this.closeWindow}
         />
         </div>
      );
   }
}
