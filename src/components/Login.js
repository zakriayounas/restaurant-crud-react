import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../customAxios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const rack = (event) => {
    setEmail(event.target.value);
  };

  const barr = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    if (email && password) {
      api.get(`/login?email=${email}`).then((resp) => {
        if (resp.data !== null) {
          navigate('/home');
          localStorage.setItem('login', JSON.stringify(resp.data))
        } else {
          alert("Please enter a valid username or password");
        }
      })
    } else {
      alert("Please fill in both the username and password");
    }
  };

  return (
    <div className='login'>
      <h2><FontAwesomeIcon icon={faUser} style={{ color: "#272C34", fontSize: "25px", margin: "0px 5px 3px 5px" }} />Login </h2>
      <div className='forme'>

        <input className="pine" type='text' onChange={rack} value={email} placeholder='Email' />
        <br />
        <br />

        <input className="pine" type='password' onChange={barr} value={password} placeholder=' Password' />
        <br />
        <br />
        <button className=" btn btn-success logBtn" onClick={login}>Login</button>

      </div>
    </div>
  );
}

export default Login;
