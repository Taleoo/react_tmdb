
import React from 'react';
import MovieHeader from './MovieHeader';

class MovieTrending extends React.Component {
    constructor(props) {
      super(props);
      this.state = {movies: []};
    }
    componentDidMount() {
      const trendingMovies = async () => {

        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=e75f38d7f60e2759d3b1a799fe892cc5&language=fr_FR&sort_by=popularity.desc&include_adult=false&include_video=true&page=1');
        let data =  await response.json();
        
        this.setState({
          movies: data.results.splice(2)
        });
        
      }
      trendingMovies();
    }
      render() {
                
        
      return (
        <>
        {this.state.movies.map((data, index) => {
          if (data.poster_path && data.title)
            return <div className="flex flex-col items-center">
                      <div className='grid-col-1 m-3 mt-5  imgDiv'>
                        <img src={'https://image.tmdb.org/t/p/w500/' + data.poster_path} alt={'movie' + data.title}></img>
                        <div className='overlay flex flex-row justify-evenly'><button>Fiche</button><button>add to favourites</button></div>
                      </div>
                      <MovieHeader heading= {data.title} />
                  </div>
                    
          
        })}
	    </>
    )};
};

export default MovieTrending;
