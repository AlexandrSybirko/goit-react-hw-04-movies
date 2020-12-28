import PropTypes from 'prop-types';

export default function FilmErrorView({ message }) {
  return (
    <div role="alert">
      <p>ERROR: {message}</p>
    </div>
  );
}

FilmErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

