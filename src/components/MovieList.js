
import React from 'react';
import MovieHeader from './MovieHeader';

const MovieList = (props) => {
	  return (
  <>
			{props.movies.map((movie, index) => {
        if (movie.poster_path)
				  return <div className="flex flex-col items-center">
				            <div className='grid-col-1 m-3 mt-5 imgDiv'>
  					          <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt='movie'></img>
                      <div className='overlay flex flex-row justify-evenly'><button>Fiche</button><button>add to favourites</button></div>
                    </div>
                    <MovieHeader heading= {movie.title} />
				        </div>
                  
        
      })}
	</>
    );
};

export default MovieList;
