import React from 'react';
import bml from '../images/bml.png';

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <button className='logo-button'>
            <img src={bml} alt='BookmeriLab' />
          </button>
        </div>
        <div className='buttons'>
          <button>Health Package</button>
          <button>91 888 236 8882</button>
          <button>Login</button>
        </div>
      </header>
    </>
  );
};

export default Header;
