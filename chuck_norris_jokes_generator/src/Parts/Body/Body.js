import React from 'react';
import InputText from '../../Component/InputText/Input.js';
import Button from '../../Component/Button/ButtonAction.js';
import './Body.scss';

export default function Body () {
  return (
    <section>
      <InputText className={['search-input']} />
      <Button text="Search!" width="91px" />
    </section>
  );
}
