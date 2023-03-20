import Navbar from '../Components/Navbar';
import CreditCard from '../Components/CreditCard';
import './buypage.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function BuyPage() {

    const [filme, setFilme] = useState({
        "Title": "Avatar: The Way of Water",
        "Year": "2022",
        "imdbID": "tt1630029",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
    });

    const array = Array.from(Array(60).keys());

    return(
        <div>
            <Navbar />
            <div className='row col-lg-12'>
                <div className='col-lg-4'>
                    <div className="main-content p-2">
                        <div className='d-flex align-items-center'>
                            <h1 className='titulo mt-1'>{filme.Title} </h1>
                            <p className='ms-1 classificacao'>12</p>
                        </div>
                        <p className='descricao me-1'><strong>Duração:</strong> 3h 12m</p>
                        <p className='descricao me-1'><strong>Gênero:</strong> Ação, Aventura, Fantasia</p>
                        <div className='text-center mt-3'><img src={filme.Poster} height='500'></img></div>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='main-content p-2'>
                        <h1 className='titulo mt-1'>Ingressos</h1>
                        <div className='d-flex justify-content-around align-items-center col-lg-12'>
                            <div className='d-flex align-items-center my-3 col-lg-3'>
                            <h5 className='me-3 '>Idioma:</h5>
                                <div className='row'>
                                    <button className='btn btn-primary btn-sm mb-2'>Dublado</button>
                                    <button className='btn btn-outline-light btn-sm'>Legendado</button>
                                </div>
                            </div>
                            <div className='d-flex align-items-center col-lg-6'>
                            <h5 className='me-2'>Sessão:</h5>
                                <div className='d-flex mb-3'>
                                    <button className='btn btn-primary me-1 text-start'> 12:00 - 15:30h <br/> Data: 19/03/2023</button>
                                    <button className='btn btn-outline-light text-start me-1'> 16:00 - 19:30h <br/> Data: 19/03/2023 </button>
                                    <button className='btn btn-outline-light'> <FontAwesomeIcon icon={faPlus}/> </button>
                                </div>
                            </div>
                        </div>
                        <div className='border border-light'>
                            <h1 className='titulo p-5'>TELÃO</h1>
                        </div>
                        <div className='d-flex flex-wrap justify-content-center mt-3'>
                            {array.map((item, index) => (
                                <div key={index+1}>
                                    <div>
                                        <button className={`btn btn-${ index % 7 == 2 ? 'warning' : (index == 20 ? 'success' : 'outline-light') } assento mx-3 my-2`}>{item + 1}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='d-flex justify-content-between align-items-center pt-3'>
                            <div className='d-flex justify-content-center '>
                                <button className='btn btn-outline-light me-1'>Assento disponível</button>
                                <button className='btn btn-warning me-1'>Assento ocupado</button>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <button className='btn btn-success me-1'>Assento selecionado (inteira)<br/>R$40,00</button>
                                <button className='btn btn-primary me-1'>Assento selecionado (meia)<br/>R$20,00</button>
                            </div>
                            <div>
                                <button className='btn btn-light'>Total: R$ 40,00<br/><FontAwesomeIcon icon={faTicket} /> Finalizar compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
