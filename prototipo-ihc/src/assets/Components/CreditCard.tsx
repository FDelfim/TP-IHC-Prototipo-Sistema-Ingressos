import './creditcard.scss'

export default function CreditCard(){
    return(
    <div className='d-flex justify-content-center'>
      <div className="callout credit p-2">
        <div className="row">
          <div className="small-6 columns">
            <h1 className="credit__bank "> Cartão de Crédito</h1>
          </div>
          <div className="row">
            <div className="column">
              <p className="credit__card-number">5554 2123 1233 4456</p>
              <span className="credit__date"><br/>Validade: 12/2023</span>
              <span className="credit__ccv text-center">CVV<br/>123</span>
            </div>
            <div className="small-9 columns">
              <p className="credit__name">João Ninguém</p>
            </div>
            </div>
        </div>
      </div>
    </div>);
}