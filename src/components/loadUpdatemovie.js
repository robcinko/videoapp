import React from 'react';
import {useParams} from 'react-router-dom';
import UpdateMovie from './updateMovie';


export default function LoadUpdatemovie(props){

   const{movieId} = useParams();

   return(
      <UpdateMovie movieId={movieId}></UpdateMovie>
   );
}