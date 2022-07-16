import React from 'react';

function Header() {
    return (
      <div id='main'>
        <div className='header-heading'>
          <h3>Taste of Home in Every Slice</h3>
          <h1>
            <span>Charlie's</span> <br /> Pizzeria
          </h1>
          <h3>Hometown favorite for 50 years!</h3>
          <div className='header-btns'>
            <a href='#' className='header-btn'>
              {' '}
              Order Here
            </a>
          </div>
        </div>
      </div>
    );
}

export default Header;

