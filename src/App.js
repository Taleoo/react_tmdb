import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import 'tailwindcss/dist/tailwind.min.css';
import './App.css';
import MovieHeader from './components/MovieHeader';
import SearchInput from './components/SearchInput';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async () => {

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e75f38d7f60e2759d3b1a799fe892cc5&language=fr-FR&query=${searchValue}`)
    let data = await response.json()
    
    if(data.results)
    {setMovies(data.results)}
		
  };
  console.log(movies);
	useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

	return (
		<div className='container movie-app'>
			<div className='grid-rows-2 flex flex-row'>
      <MovieHeader heading='Movies' />
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
      <div className='grid-rows-1'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
