import React from 'react';

const Contact = ({ email, linkedin, github }) => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: {email}</p>
      <p>LinkedIn: {linkedin}</p>
      <p>GitHub: {github}</p>
    </div>
  );
};

export default Contact;
