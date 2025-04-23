import React, {use, useEffect, useState } from 'react';
import Search from './components/Search'
import Spinner from './components/Spinner';
import Moviecard from './components/Moviecard';
import {useDebounce} from 'react-use'
import { getTrendingMovies, updateSearchCount } from './appwrite';

const API_BASE_URL='https://api.themoviedb.org/3';


const API_KEY =import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS ={
  method:'GET',
  headers:{
    accept: 'application/json', //api will send back an json object
    Authorization: `Bearer ${API_KEY}` 

  }
}

const App = () => {
  //debounce the search term to avoid making too many requests
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [searchTerm, setSearchTerm] = useState('');

  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);
  
    // by waiting for the user to stop typing for 500ms
    useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])
    

  const fetchMovies = async(query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try{
        
      const endpoint = query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :  //if no query is provided, fetch popular movies
      `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch( endpoint, API_OPTIONS);
      
      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();

      if(data.Response === 'False'){
        setErrorMessage(data.Error||'Failed to fetch movies');
        setMovieList([]);
        return;
      }
       
      setMovieList(data.results || []);
       await updateSearchCount(query, data.results[0]);

    }catch(error){
      console.error(`Error fetching movies:${error}` );
      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally{
      setIsLoading(false);
    }
  }
   
  const loadTrendingMovies = async() => {
      try{
        const movies = await getTrendingMovies();

        setTrendingMovies(movies);
      } catch(error){
        console.error(`Error fetching trending movies: ${error}`);
        
      }
  }
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm])

  useEffect(() => {
    loadTrendingMovies();
  }, [])
  
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        
        { trendingMovies.length > 0 && (
         <section className="trending">
           <h2>Trending Movies</h2>
          
          <ul>
            {trendingMovies.map((movie, index) =>(
              <li key={movie.$id}>
                <p>{index +1}</p>
                <img src={movie.poster_url} alt={movie.title} />
              </li>
            ))}
          </ul>
          </section>
        )}

        {/* <h1 classname="text-white">{searchTerm}</h1> */}
        <section className='all-movies'>
          <h2>All Movies</h2>

           {isLoading ? (
            <Spinner />
           ): errorMessage ? (
            <p className="text-red-500">{errorMessage}</p> 
           ) :(
            <ul>
              {movieList.map((movie) => (
                <Moviecard key ={movie.id} movie ={movie}/>
              ))}
            </ul>
           )} 
                      
        </section>
      </div>
    </main>
  )
}

export default App
