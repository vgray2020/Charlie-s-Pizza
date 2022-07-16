import React from 'react';

function Contact() {
    return (
      <div id='contact'>
        <h1> Contact Us</h1>
        <form>
          <input type='text' placeholder='Full Name' />
          <input type='email' placeholder='Type Your E-Mail' />
          <input type='text' placeholder='Full Name' />
          <textarea placeholder='Write Here....'></textarea>
          <input type='submit' value='SUBMIT' />
         
        </form>
      </div>
    );
}

export default Contact;
