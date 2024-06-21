import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styles
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Login = () => {
  const [pageType, setPageType] = useState('login');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const next = useSearchParams()[0].get('next');

  const togglePageType = () => {
    setPageType(pageType === 'login' ? 'signup' : 'login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(pageType === 'login'){
        const response = await fetch('/auth/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({ email: username, password })
        })
        const { message, email, fullName, contactNumber, token, balance, numberOfDelivery } = await response.json();
        if(response.status === 400){
          setError(message);
          return;
        }
        dispatch(setUser({ email, fullName, contactNumber, token, balance, numberOfDelivery }));
        if(next) navigate(`/${next}`);
        else navigate('/');
      } else {
        const response = await fetch('/auth/signup',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({ email: username, fullName: fullname, password, contactNumber: contact })
        })
        const { message, email, fullName, contactNumber, token, balance, numberOfDelivery } = await response.json();
        if(response.status === 400){
          setError(message);
          return;
        }
        dispatch(setUser({ email, fullName, contactNumber, token, balance, numberOfDelivery }));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className='login-page'>
        <div className="login-container">
        <h2>{pageType === 'login' ? 'Login' : 'Sign up'}</h2>
        <form onSubmit={handleSubmit} className="login-form">
            {pageType === 'signup' && <div className="form-group">
              <input
                  required
                  type="text"
                  id="full-name"
                  placeholder='Full name'
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
              />
            </div>}
            <div className='form-group'>
              <input
                  required
                  type="text"
                  id="email"
                  placeholder='Email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {pageType === 'signup' && <div className='form-group'>
              <input
                  required
                  type="text"
                  id="contact"
                  placeholder='Contact number'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
              />
            </div>}
            <div className="form-group">
              <input
                  required
                  type="password"
                  id="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='login-toggle' onClick={togglePageType}>
              {pageType === 'login' ? 'New user? Click here to sign up' : 'Already registered? Click here to login'}
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">{pageType === 'login' ? 'Login' : 'Sign up'}</button>
        </form>
        </div>
    </div>
  );
};

export default Login;
