import React from 'react';
import './Header.scss';

export default function Header (props) {
  return (
    <header className={props.className}>
      <div className="header-page">
        <h2>CHUCK NORRIS</h2>
      </div>
    </header>
  );
}
