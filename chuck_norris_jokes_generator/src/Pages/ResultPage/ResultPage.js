import React, {useEffect, useState} from 'react';

import Header from '../../Parts/Header/Header.js';
import Result from '../../Component/Results/Result.js';
import {ReactComponent as ChuckNorrisIcon} from 'assets/chucknorris.svg';
import './ResultPage.scss';

const axios = require ('axios');

export default function ResultPage (props) {
  const [text, setText] = useState ([]);

  useEffect (() => {
    const urlSearch = `https://api.chucknorris.io/jokes/search?query=${props.location.state.search}`;
    const urlCategory = `https://api.chucknorris.io/jokes/random?category=${props.location.state.category}`;
    axios
      .get (
        `${props.location.state.isSearchCategory ? urlCategory : urlSearch}`
      )
      .then (res => {
        const data = res.data.result;
        setText (data.map (item => item.value));
      });
  });

  return (
    <div className="container">
      <Header />
      <div className="icon-wrapper d-flex">
        <ChuckNorrisIcon />
      </div>
      <div className="result d-flex justify-content-center">
        <span
        >{`${props.location.state.sign} ${props.location.state.isSearchCategory ? props.location.state.category : props.location.state.search}`}</span>
      </div>
      <div className="d-flex justify-content-center">
        <Result text={text} className={['results']} />
      </div>
    </div>
  );
}