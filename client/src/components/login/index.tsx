import React, { useEffect } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import useLoginContext from '../../hooks/useLoginContext';

/**
 * Login Component contains a form that allows the user to input their username, which is then submitted
 * to the application's context through the useLoginContext hook.
 */
const Login = () => {
  const { setUser } = useLoginContext();
  const navigate = useNavigate();
  const { username, handleSubmit, handleInputChange } = useLogin();

  return (
    <div className='container'>
      <h2>Welcome to FakeStackOverflow!</h2>
      <h4>Please enter your username.</h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={handleInputChange}
          placeholder='Enter your username'
          required
          className='input-text'
          id={'usernameInput'}
        />
        <button type='submit' className='login-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
