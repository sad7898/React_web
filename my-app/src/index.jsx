// import 'bootstrap';
import './components/style/homeStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs/lib/anime.es.js';
import Whole from './components/Home_bundled.jsx'
import Intro from './components/IntroText.jsx'
import Brand from './components/Brand.jsx'
ReactDOM.render(
    <Whole/>
    ,document.getElementById("root")
);