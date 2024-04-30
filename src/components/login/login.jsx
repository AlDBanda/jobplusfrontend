import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.scss';
import axios from 'axios';

export default function login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent default for submission

    const data = {
      identifier,
      password,
    };

    try {
      //make a post request to the backend api
      const res = await axios.post(
      'http://localhost:1337/api/auth/local',
      data
      );
      console.log(res);
    //reset our state
    setIdentifier('');
    setPassword('');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input 
        className="form__field" 
        type="text" 
        placeholder="Email" 
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Password</label>
        <input 
        className="form__field" 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Login" />
      </div>

      <footer>
        Dont have an account? <Link to='/register'>Register</Link>
      </footer>
    </form>
  );
}
