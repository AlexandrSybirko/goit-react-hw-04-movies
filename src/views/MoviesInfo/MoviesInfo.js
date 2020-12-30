import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { fetchMoviesByName } from '../../service/movies-api';

import FilmLoaderView from '../FilmLoaderView/FilmLoaderView';
import FilmErrorView from '../FilmErrorView/FilmErrorView';
import s from './MoviesInfo.module.css';

const Status = {
   IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


export default function MoviesInfo({moviesName}) {
    const { url } = useRouteMatch();
    const poster = 'https://image.tmdb.org/t/p/w500';
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
if (!moviesName) {
      return;
    }
    

    setStatus(Status.PENDING);

    fetchMoviesByName(moviesName)
      .then(request  => {setMovies(request.results)
        setStatus(Status.RESOLVED)
        })
      .catch(error => {
        setError(error)
      setStatus(Status.REJECTED)
        });
    
 }, [moviesName]);
      
      if (status === Status.IDLE) {
    return <p className={s.message}>Please enter your search term</p>;
  }

  if (status === Status.PENDING) {
    return <FilmLoaderView />;
  }

  if (status === Status.REJECTED) {
    return <FilmErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <ul className={s.list}>
      {movies.map(movie => (
        <>
          {movie.poster_path && (
            <li key={movie.id} className={s.item}>
              <Link to={`${url}/${movie.id}`} className={s.link}>
                <img
                  className={s.image}
                  src={poster + movie.poster_path}
                  alt={movie.title}
                  width="300"
                  height="450"
                />
                <p className={s.title}>{movie.title}</p>
              </Link>
            </li>
          )}
        </>
      ))}
    </ul>
    );
  }

        
      

  
}