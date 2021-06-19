import React from 'react';
import {useParams} from 'react-router-dom'
import DisplayMovie from './displayMovie';

export default function LoadReadmovie(props){
   const {movieId} = useParams();
   return(
      <DisplayMovie
      movieId={movieId}
      />

   );
}