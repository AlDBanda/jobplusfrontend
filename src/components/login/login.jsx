import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.scss';
import axios from 'axios';
import Alert from '../alert/Alert';
import { parseErrors } from '../../utils/parseErrors';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';

export default function login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');

  const navigate = useNavigate();
  const { post} = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent default for submission

    const data = {
      identifier,
      password,
    };

   const res = await post('auth/local', {data: data});
   console.log(res);
    // try {
    //   //make a post request to the backend api
    //   const res = await axios.post(
    //   'http://localhost:1337/api/auth/local',
    //   data
    //   );
    //   console.log(res);
    // //reset our state
    // setIdentifier('');
    // setPassword('');

    // //navigate to my homepage
    // navigate('/');
    // } catch (err) {
    //   setAlert(parseErrors(err));
    // }
  };


  return (
    <>
    <Alert data={alert} />
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
        or <Link to='/forgot-password'>Forgot Password</Link>
      </footer>
     </form>
    </>
  );
}
