import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import 'bootstrap/dist/css/bootstrap.min.css';

import './PrimeraApp.css';

const divRoot = document.querySelector('#app');

//ReactDOM.render(<PrimeraApp titulo={'1. Define tu objetivo'} item={'¿Buscas trabajo?'}/>, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);