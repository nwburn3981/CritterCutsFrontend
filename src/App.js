import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import LandingPage from './home-page/LandingPage';
import Header from './components/Header';
import { Routes, Route } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'
import Appointments from './components/Appointments'
import Pets from './components/Pets'
import LoginHome from './home-page/LoginHome';

function App() {

  const { token } = useSelector((store) => store.jwt)

  if (!token) {
    return (
      <div className='container'>
        <Header />

        <Routes>
          <Route path="/index" element={<LandingPage />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <LandingPage />
      </div>
    )
  }
  else {
    return (
      <div className='container'>
        <Header />
        <Routes >
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/pets" element={<Pets />} />
        </Routes>
        <LoginHome />
      </div>
    )
  }

}

export default App;
