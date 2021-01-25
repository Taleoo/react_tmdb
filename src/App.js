import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import 'tailwindcss/dist/tailwind.min.css';
import './App.css';
import MovieHeader from './components/MovieHeader';
import SearchInput from './components/SearchInput';
import MovieTrending from './components/PopularMovies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async () => {

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e75f38d7f60e2759d3b1a799fe892cc5&language=fr-FR&query=${searchValue}`)
    let data = await response.json()
    
    if(data.results)
    {setMovies(data.results)}
		
  };
	useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

	return (
		<div className='container grid grid-rows-auto  '>
			<div className='grid-rows-1 flex flex-row h-20' id="bckg">
        
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
			</div>
      <h1 className="text-center text-gray-600 text-3xl">Trending Movies</h1>
      <div className=' gap-3 flex flex-col md:flex-row flex-nowrap justify-around slider'>
        
      <MovieTrending />
      </div>
      <div className=' gap-3 flex flex-col md:flex-row flex-nowrap justify-around slider'>
				<MovieList movies={movies} />    
			</div>
		</div>
	);
};

export default App;
