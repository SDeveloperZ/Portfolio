import React from 'react';

function Button({ text, link }) {
  return <a href={link}>{text}</a>;
}

export default Button;
