import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/header'
import {Routes, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carddetails from './components/carddetails';
import Cards from './components/cards';
import Otp from './components/otp';

import Signup from './components/signup';
import Login from './components/login';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header/>
    <Routes>

      <Route path='/' element={<Cards/>} />
      <Route path='/cart/:id' element={<Carddetails/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path="/user/otp" element={<Otp />} />



    </Routes>
    </>
  )
}

export default App
