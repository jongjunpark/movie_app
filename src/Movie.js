import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends React.Component {
	render() {
		return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={this.props.poster}/>
            </div>
            <div className="Movie_columns">
                <h1>{this.props.title}</h1>
                <div className="Movie__Genres">
                    {this.props.genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">{this.props.synopsis}</p>
            </div>
        </div>
    );
	}
}


function MoviePoster({poster}) {
    return (
        <img src={poster} className="Movie__Poster"/>
    )
}

function MovieGenres({genre}) {
    return (
        <span className="Movie__Genres">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired,
}

export default Movie

