import React from 'react';
import './ButtonAction.scss';

export default function ButtonAction (props) {
  const onClick = () => {
    if (props.onClick) props.onClick ();
  };

  return (
    <div>
      <button
        onClick={onClick}
        style={{width: props.width}}
        type="button"
        className="btn"
      >
        {props.text}
      </button>
    </div>
  );
}
