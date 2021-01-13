
import React from 'react';

const MovieList = (props) => {
	  return (
  <>
			{props.movies.map((movie, index) => (
        
				<div className='container flex justify-start m-3'>
					<img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} alt='movie'></img>
				</div>
			))}
	</>
    );
};

export default MovieList;
