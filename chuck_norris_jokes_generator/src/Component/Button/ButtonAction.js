import React from 'react';
import './ButtonAction.scss';

export default function ButtonAction (props) {
  return (
    <div>
      <button style={{width: props.width}} type="button" class="btn">
        {props.text}
      </button>
    </div>
  );
}
