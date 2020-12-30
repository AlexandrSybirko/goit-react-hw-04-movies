import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import { fetchMovieDetails} from '../../service/movies-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import FilmLoaderView from '../FilmLoaderView/FilmLoaderView';

import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const poster = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      <div className={s.wrapper}>
        <img
          className={s.image}
          src={poster + movie.poster_path}
          alt={movie.title}
          widht="300"
          height="450"
        />
        <div className={s.description}>
          <h2 className={s.title}>{movie.title}</h2>
          <span className={s.subtitle}>Rating </span>
          <span>{movie.vote_average}</span>
          <p className={s.subtitle}>Overview</p>
          <p>{movie.overview}</p>

          {movie.genres && (
            <>
              <p className={s.subtitle}>Genres</p>
              <ul className={s.list}>
                {movie.genres.map((item, index) => (
                  <li key={index} className={s.item}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <nav className={s.nav}>
        <NavLink
          to={`${url}/cast`}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<FilmLoaderView />}>
        <Switch>
          <Route path={`${path}:movieId/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${path}:movieId/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}