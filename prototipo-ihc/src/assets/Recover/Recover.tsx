import '../../global.css'

export default function Recover(){
    return (
        <div className='col-lg-4 col-xl-3 col-md-8 col-12 d-flex align-items-center'>
            <div className='card-body'>
              <div className="card p-3">
                <div className="card-body">
                  <h1 className="card-title">Recuperar senha</h1>
                  <div className='form-group text-start my-4'>
                      <label className='ms-1 mb-1'><strong>Email</strong></label>
                      <input type='email' id='email' className='form-control' placeholder='Email' />
                  </div>
                  <div className='d-flex justify-content-center mt-5'>
                    <a className="btn btn-primary me-1">Recuperar</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
}