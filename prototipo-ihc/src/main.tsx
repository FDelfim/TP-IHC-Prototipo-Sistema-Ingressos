import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './assets/Login/Login'
import Create from './assets/CreateAccount/Create'
import MainContent from './assets/Main/MainContent'
import BuyPage from './assets/Buy/BuyPage'
import Payment from './assets/Payment/Payment'
import MyTickets from './assets/Profile/MyTickets'
import Recover from './assets/Recover/Recover'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Recover />
  </React.StrictMode>,
)
