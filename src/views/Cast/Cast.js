import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast} from '../../service/movies-api';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
    const poster = 'https://image.tmdb.org/t/p/w500';
    
  useEffect(() => {
    fetchMovieCast(movieId).then(request => setCast(request.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul className={s.list}>
            {cast.map(item => (
              <>
                {item.profile_path && (
                  <li key={item.id} className={s.item}>
                    <img
                      className={s.image}
                      src={poster + item.profile_path}
                      alt={item.name}
                      widht="100"
                      height="150"
                    />
                            <p> {item.name}</p>
                             <span>Charachter: {item.character}</span>
                  </li>
                )}
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};