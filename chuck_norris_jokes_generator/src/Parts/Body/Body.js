import React, {useState, useEffect} from 'react';
import InputText from '../../Component/InputText/Input.js';
import Button from '../../Component/Button/ButtonAction.js';
import Result from '../../Component/Results/Result.js';

import './Body.scss';

import {ReactComponent as ChuckNorrisIcon} from 'assets/chucknorris.svg';

const axios = require ('axios');

export default function Body () {
  const [randomJoke, setRandomJoke] = useState ([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (() => {
    axios.get ('https://api.chucknorris.io/jokes/random').then (res => {
      const datas = [];
      const value = res.data.value;
      datas.push (value);
      setRandomJoke (datas);
    });
  }, []);

  const getRandomJoke = () => {
    axios.get ('https://api.chucknorris.io/jokes/random').then (res => {
      const datas = [];
      const value = res.data.value;
      datas.push (value);
      setRandomJoke (datas);
    });
  };

  return (
    <section>
      <div className="input-wrapper">
        <InputText className={['search-input']} />
        <Button text="Search!" width="91px" />
      </div>
      <div className="icon-wrapper">
        <ChuckNorrisIcon className="cn-icon" />
      </div>
      <Result text={randomJoke} className={['random-result']} />
      <Button onClick={getRandomJoke} text="Another!" width="103px" />
    </section>
  );
}
