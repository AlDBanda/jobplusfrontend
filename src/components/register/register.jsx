import React, { useState } from 'react';
import '../styles/form.scss';
import { Link } from 'react-router-dom';
import Alert from '../alert/Alert';
import { useApi } from '../../hooks/useApi';



export default function register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [alert, setAlert] = useState({});
  const { post } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    //check if passowrd and confirm password match
    if (password !== confirmPassword) {
      setAlert({
        message: 'Password and confirm password do not match',
        details: [],
      })
      return; //exit early
    }

    const data = {
      firstName,
      lastName,
      email,
      password,
      username: email,
    };

    const handleSuccess = () => {
       // reset the state
      setFirstName(''); 
      setLastName('');  
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAlert({
        message: 'Account created successfully',
        details: [],
        type: 'success',
      });
    }

    await post ('auth/local/register',{
      data: data,
      onSuccess: () => handleSuccess(),
      onFailure: (err) => setAlert(err) 

    })
  };
  
  //   try {
  //     const res = await axios.post(
  //       'http://localhost:1337/api/auth/local/register',
  //        data
  //        );
  //     // reset the state
  //     setFirstName(''); 
  //     setLastName('');  
  //     setEmail('');
  //     setPassword('');
  //     setConfirmPassword('');
  //     setAlert({
  //       message: 'Account created successfully',
  //       details: [],
  //       type: 'success',
  //     });
  //   } catch (err) {
  //     setAlert(parseErrors(err));
  //   //  console.log(err.response.data.error.details);
  //   }
  // };

  return (
    <>
  
      <Alert  data={alert} />
    
    <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">First name</label>
        <input 
        className="form__field" 
        type="text" 
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
         />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Last name</label>
        <input 
        className="form__field" 
        type="text" 
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
         />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input 
        className="form__field" 
        type="text" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Choose password</label>
        <input 
        className="form__field" 
        type="password" 
        placeholder="Choose password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Confirm Password</label>
        <input 
        className="form__field" 
        type="password" 
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
         />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Register" />
      </div>

      <footer>
        Already have an account? <Link to='/login'>Login</Link>
      </footer>
    </form>
    </>
  );
}
