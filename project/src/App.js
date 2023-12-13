import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
