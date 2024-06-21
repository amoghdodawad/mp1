import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeName, removeUser } from '../redux/userSlice';

function Navbar() {
  const { fullName } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout(){
    dispatch(removeUser());
    navigate('/');
  }
  if(fullName) {
    return (
      <div className='navbar'>
        <ul className='navbar-items-container'>
          <li>
            Logo
          </li>
          <li>
            <Link to='/pick'>
              Pick
            </Link>
          </li>
          <li>
            <Link to='/register'>
              Register
            </Link>
          </li>
          <li>
            <Link to='/deliver'>
              Deliver
            </Link>
          </li>
          <li className='link-button' onClick={logout}>
            Logout
          </li>
        </ul>
    </div>
    )
  }
  return (
    <div className='navbar'>
        <ul className='navbar-items-container'>
          <li>
            Logo
          </li>
          <li>
            Title
          </li>
          <li className='link-button'>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar