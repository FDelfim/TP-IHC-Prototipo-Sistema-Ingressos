import './payment.css';
import Navbar from '../Components/Navbar';
import CreditCard from '../Components/CreditCard';

export default function Payment() {
    return(
        <div>
            <Navbar />
            <div className='d-flex p-4 row justify-content-center'>
                <div className='col-6 pt-2 row justify-content-center card p-4'>
                  <h1 className="card-title titulo mb-3">Forma de pagamento</h1>
                  <div className='d-flex justify-content-center col-12 mt-1'>
                    <button className='btn btn-primary me-1 col-4'> Cartão de Crédito</button>
                    <button className='btn btn-outline-secondary me-1 col-4'> Boleto Bancário</button>
                    <button className='btn btn-outline-secondary me-1 col-4'> Pix</button>
                  </div>
                  <div className='form-group text-start mt-3 d-flex'>
                    <div className='col-lg-6 pe-2'>
                      <label className='ms-1 mb-1'><strong>Nome do titular</strong></label>
                      <input type='text' className='form-control' placeholder='e.g. João Ninguém' />
                    </div>
                    <div className='col-lg-6'>
                        <label className='ms-1 mb-1'><strong>CPF:</strong></label>
                        <input type='text' className='form-control' placeholder='e.g. 123.456.789-10' />
                    </div>
                  </div>
                  <div className='form-group text-start mt-3 d-flex'>
                    <div className='col-lg-6 pe-2'>
                        <label className='ms-1 mb-1'><strong>Número do cartão</strong></label>
                        <input type='email' className='form-control' placeholder='e.g. 5522 1122 3334 4565' />
                    </div>
                    <div className='col-lg-6 d-flex'>
                        <div className='col-lg-6 pe-3'>
                            <label className='mb-1'><strong>Validade:</strong></label>
                            <input type='text' className='form-control' placeholder='e.g. 12/2023' />
                        </div>
                        <div className='col-lg-6'>
                            <label className='mb-1'><strong>CVV:</strong></label>
                            <input type='text' className='form-control' placeholder='e.g. 123' />
                        </div>
                    </div>
                  </div>
                  <div className='form-group text-start mt-3'>
                    <label className='ms-1 mb-1'><strong>Pagamento</strong></label>
                    <select className='form-control'>
                      <option>1x de R$ 40,00 sem juros</option>
                      <option>2x de R$ 20,00 sem juros</option>
                      <option>3x de R$ 13,33 sem juros</option>
                      <option>4x de R$ 10,00 sem juros</option>
                      <option>5x de R$ 8,00 sem juros</option>
                    </select>
                  </div>
                  <CreditCard/>
                  <div className='d-flex justify-content-center mt-4'>
                    <a className='btn btn-success'>Confirmar pagamento</a>
                  </div>
                </div>
            </div>
        </div>
    );
}