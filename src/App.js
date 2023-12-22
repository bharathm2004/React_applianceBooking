import './App.css';
import React from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Chatbot from './Components/Help/Chatbot';
import Album from './Components/Album/Album';
import Laptops from './Components/Products/Laptops';
import PaymentPage from './Components/Payment/PaymentPage';
import CustomerDetailsForm from './Components/Payment/CustomerDetailsForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
  
        <Route path='/' element={<Home/>}/>
        <Route path='/LoginForm' element={<LoginForm/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Help' element={<Chatbot/>}/>
        <Route path='/product' element={<Album/>}/>
        <Route path='/lp' element={<Laptops/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/detail' element={<CustomerDetailsForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}
export default App;
