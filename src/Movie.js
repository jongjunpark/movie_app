import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends React.Component {
	render() {
		return (
        <div className="movie">
            <div className="movie_poster_box">
                <MoviePoster poster={this.props.poster}/>
            </div>
            <div className="movie_detail_box">
                <p className="movie_title">{this.props.title}</p>
                <div className="movie_genres_box">
                    {this.props.genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <p className="movie_synopsis">{this.props.synopsis}</p>
            </div>
        </div>
    );
	}
}


function MoviePoster({poster}) {
    return (
        <img src={poster} className="movie_poster"/>
    )
}

function MovieGenres({genre}) {
    return (
        <span className="movie_genres">{genre}</span>
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

