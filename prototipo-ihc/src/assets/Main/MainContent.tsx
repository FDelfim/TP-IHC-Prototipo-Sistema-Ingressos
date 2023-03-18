import Navbar from '../Components/Navbar';
import './maincontent.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';


export default function MainContent(){

    const [movies, setMovies] = useState([{
        "Title": "Everything Everywhere All at Once",
        "Year": "2022",
        "imdbID": "tt6710474",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"
        },
        {
        "Title": "Avatar: The Way of Water",
        "Year": "2022",
        "imdbID": "tt1630029",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
        },
        {
        "Title": "Puss in Boots: The Last Wish",
        "Year": "2022",
        "imdbID": "tt3915174",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_SX300.jpg"
        },
        {
        "Title": "Thor: Love and Thunder",
        "Year": "2022",
        "imdbID": "tt10648342",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
        "Title": "The Super Mario Bros. Movie",
        "Year": "2023",
        "imdbID": "tt6718170",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGZhYWIyZWUtOTdjZS00ZTc1LWFlZDMtNzU5MTE0OTcyMjg1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
    ]);

    const getMoviesRequest = async () => {
        const url = 'http://www.omdbapi.com/?s=${name}&apikey=38fc496d';
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search){
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMoviesRequest();
    }, []);

    return(
        <div>
            <Navbar />
            <div className='container-fluid'>
                <div className='mt-3 p-2 main-content'>
                    <div className='dropdown-divider'></div>
                    <div className='carousel slide'>
                    <Carousel className=''>
                      {movies.length > 0 && movies.map((movie, index) => (
                          <Carousel.Item className='text-center' key={index}>
                            <div className="d-flex justify-content-center p-2">
                                <div className='d-flex p-3'>
                                    <img src={movies[index].Poster} height='600' width='400'></img>
                                      <div className='p-3 card-body row align-content-between'>
                                        <div>
                                            <h1 className='ps-3 nome-filme'>{movie.Title}</h1>
                                            <h2 className='ps-3 lancamento pt-2'>Lançamento: {movie.Year}</h2>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='btn btn-success btn-lg me-2'> <FontAwesomeIcon icon={faTicket}/> Comprar</button>
                                            <button className='btn btn-outline-light btn-lg'> <FontAwesomeIcon icon={faPlus}/> Ver mais</button>
                                        </div>
                                      </div>
                                </div>
                            </div>
                          </Carousel.Item>
                      ))}
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}