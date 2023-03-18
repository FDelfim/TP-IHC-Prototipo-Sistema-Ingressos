import '../../global.css'

function App() {

  return (
    <div className='col-lg-4 col-xl-3 col-md-8 col-12 d-flex align-items-center'>
        <div className='card-body'>
          <div className="card p-3">
            <div className="card-body">
              <h1 className="card-title">LOGIN</h1>
              <div className='form-group text-start my-4'>
                  <label className='ms-1 mb-1'><strong>Email</strong></label>
                  <input type='email' id='email' className='form-control' placeholder='Email' />
              </div>
              <div className='form-group text-start my-4'>
                  <div className='d-flex justify-content-between'>
                    <label className='ms-1 mb-1'><strong>Senha</strong></label>
                    <p className='ms-1 esqueci-senha mb-0'><a>Esqueci minha senha</a></p>
                  </div>
                  <input type='password' id='password' className='form-control' placeholder='Senha' />
              </div>
              <div className='d-flex justify-content-center mt-5'>
                <a className="btn btn-primary me-1">Entrar</a>
                <a className='btn btn-outline-secondary me-1' >Criar conta</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
