import React from 'react';
import './Input.scss';

export default function Input (props) {
  return (
    <div
      style={props.style}
      className={`"input-section" ${props.className.join (' ')}`}
    >
      <input type="text" placeholder="Search joke by text" />
    </div>
  );
}
