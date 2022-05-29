import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../assets/images/Logo.png';
import useAuth from '../../../hooks/useAuth';
import useLogout from '../../../hooks/useLogout';

const SHeader = styled.header`
  height: 8rem;
  background-color: #fff;
  padding: 0 3.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 5.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 3.2rem;
  }

  li a:link,
  li a:visited {
    font-size: 1.8rem;
    font-weight: 500;
    color: black;
    text-decoration: none;
    opacity: 0.8;

    transition: all 0.3s;
  }

  li a:hover,
  li a:active {
    opacity: 1;
  }
`;

const Header = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate('/signin');
  };

  return (
    <SHeader>
      <Link to="/">
        <img src={Logo} alt="logo img" />
      </Link>
      <nav>
        <ul>
          {/* <li>
            <Link to="/favorite">Favorite</Link>
          </li> */}
          <li>
            {auth?.accessToken ? (
              <Link to="/signin" onClick={signOut}>
                Sign Out
              </Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </li>
          <li>{auth?.accessToken ? null : <Link to="/signup">Sign Up</Link>}</li>
        </ul>
      </nav>
    </SHeader>
  );
};

export default Header;
