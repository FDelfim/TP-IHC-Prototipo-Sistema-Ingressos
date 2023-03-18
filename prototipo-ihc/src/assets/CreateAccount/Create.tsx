import '../../global.css'

export default function Create(){

    return(
        <div className='col-lg-4 col-xl-4 col-md-8 col-12 d-flex align-items-center'>
        <div className='card-body'>
          <div className="card p-3">
            <div className="card-body">
              <h1 className="card-title">Criar conta</h1>
              <div className='form-group text-start my-2'>
                  <label className='ms-1 mb-1'><strong>Nome completo</strong></label>
                  <input type='text' className='form-control' placeholder='e.g. João Augusto' />
              </div>
              <div className='form-group text-start my-2'>
                <div className='d-flex justify-content-between'>
                    <div className='col-lg-5'>
                        <label className='ms-1 mb-1'><strong>CPF:</strong></label>
                        <input type='text' className='form-control is-invalid' placeholder='e.g. 123.456.789-10' />
                    </div>
                    <div className='col-lg-5'>
                        <label className='ms-1 mb-1'><strong>Data de Nascimento:</strong></label>
                        <input type='date' className='form-control is-invalid' />
                    </div>
                </div>
              </div>
              <div className='form-group text-start my-4'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <label className='ms-1 mb-1'><strong>Rua:</strong></label>
                        <input type='text' className='form-control' placeholder='e.g. Rua Dois' />
                    </div>
                    <div>
                        <label className='ms-1 mb-1'><strong>Número:</strong></label>
                        <input type='text' className='form-control' placeholder='e.g. 123' />
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <div>
                        <label className='ms-1 mb-1'><strong>Bairro:</strong></label>
                        <input type='text' className='form-control' placeholder='e.g. Centro' />
                    </div>
                    <div>
                        <label className='ms-1 mb-1'><strong>Cidade:</strong></label>
                        <input type='text' className='form-control' placeholder='e.g. São Paulo' />
                    </div>
                </div>
              </div>
              <div className='form-group text-start my-2 mt-1'>
                    <label className='ms-1 mb-1'><strong>Email</strong></label>
                    <input type='email' className='form-control' placeholder='exemplo@exemplo.ex.br' />
              </div>
              <div className='form-group text-start my-2'>
                    <label className='ms-1 mb-1'><strong>Senha:</strong></label>
                    <input type='password' id='password' className='form-control' />
              </div>
              <div className='form-group text-start my-2'>
                    <label className='ms-1 mb-1'><strong>Confirmação da senha:</strong></label>
                    <input type='password' id='password' className='form-control' />
              </div>
              <div className='d-flex justify-content-center mt-3'>
                <a className="btn btn-outline-secondary me-1">Entrar</a>
                <a className='btn btn-success me-1' >Criar conta</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
}