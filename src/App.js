import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
// import Login from './components/Login.js'
import CustomerHome from './components/CustomerHome';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Pets from "./components/Pets";
import Appointments from "./components/Appointments";

function App() {

  const dispatch = useDispatch();
  const URI = 'http://localhost:8080/'

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [jwt, setJwt] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // const { jwt, isAuthenticated } = useSelector((store) => store.jwt);

  const credentials = {
    "username": user,
    "password": pass
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(URI + "authenticate", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => response.json())
      .then(data => setJwt("Bearer " + data.jwt));
    // .then(data => dispatch({ type: 'addJwt', payload: "Bearer " + data.jwt }))

    fetch(URI + "api/users/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => response.json())
      .then(data => console.log(data))
  }


  if (!jwt) {
    return (
      <div className='container'>
        <div className='mb-3 form'>
          <form onSubmit={handleSubmit} >
            <label className='form-label'>Username: </label>
            <input
              className='form-control'
              type='text'
              value={user}
              placeholder='Username'
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <label className='form-label'>Password: </label>
            <input
              className='form-control'
              type='password'
              value={pass}
              placeholder='Username'
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <input className='btn btn-light' type='submit' value='Submit' />
          </form>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<CustomerHome />} exact />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/pets" element={<Pets />} />
          {/* <Route path="/logout" element={<Home />} /> */}
        </Routes>
      </div>
    )
  }

  // return (
  //   <div className='container'>
  //     <div className='mb-3 form'>
  //       <form onSubmit={handleSubmit} >
  //         <label className='form-label'>Username: </label>
  //         <input
  //           className='form-control'
  //           type='text'
  //           value={user}
  //           placeholder='Username'
  //           onChange={(e) => setUser(e.target.value)}
  //         />
  //         <br />
  //         <label className='form-label'>Password: </label>
  //         <input
  //           className='form-control'
  //           type='password'
  //           value={pass}
  //           placeholder='Username'
  //           onChange={(e) => setPass(e.target.value)}
  //         />
  //         <br />
  //         <input className='btn btn-light' type='submit' value='Submit' />
  //       </form>
  //     </div>
  //   </div>
  // );
}

export default App;
