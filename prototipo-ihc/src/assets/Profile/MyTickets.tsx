import Navbar from '../Components/Navbar';
import './myTickets.css';
import { useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyTickets(){

    const [filme, setFilme] = useState({
        "Title": "Avatar: The Way of Water",
        "Year": "2022",
        "imdbID": "tt1630029",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
    });


    return(
        <div>
            <Navbar />
            <div>
                <h1 className='titulo mt-2'>Meus ingressos</h1>
                <div className='d-flex justify-content center'>
                    <div className='card'>
                            <img src={filme.Poster} alt='Avatar: The Way of Water' className='card-img-top' />
                        <div className='card-body'>
                            <h5 className='card-title'>{filme.Title}</h5>
                            <p className='card-text'>Data da compra: 18/03/2023<br/>Horário: 19:00h</p>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-primary me-1'>Imprimir</button>
                                <button className='btn btn-danger me-1'>Cancelar</button>
                                <button className='btn btn-secondary'><FontAwesomeIcon icon={faDownload} /></button>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    );
}