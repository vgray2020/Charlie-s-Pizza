import React from 'react';
import aboutimage from '../images/about.jpg';

function About() {
    return (
      <div id='about'>
        <div className='about-text'>
          <h1> From our family to yours..</h1>
          <p>
            {' '}
            Since 1971 Charlie Lombardi crafted pizza in the United States using
            his bakers trade he learned from Naples. Located in the Little Italy
            section of St. Louis offering its beautiful, smoky-crusted coal oven
            baked pizza, topped with the purist tomato sauce, fresh whole milk
            mozzarella, and basil, keeping locals and visitors alike coming
            back.
          </p>
         
        </div>
        <div className='about-image'>
          <img src={aboutimage} alt='' />
        </div>
      </div>
    );
}

export default About;
