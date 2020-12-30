import { useState } from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import MoviesInfo from '../MoviesInfo/MoviesInfo';

export default function MoviesPage() {
  const [moviesName, setMoviesName] = useState('');



  
  
  return (
    <>
      <Searchbar onSubmit={setMoviesName} />
      <MoviesInfo moviesName={moviesName}  />
    </>
  );
}