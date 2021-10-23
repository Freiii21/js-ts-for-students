import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitIntoWords} from './01-hello-tests/01';
import {User} from './06/06-callbacks';

const sentense = "Hello my friend";
const result = splitIntoWords(sentense);
console.log(result[0] === "hello");
console.log(result[1] === "my");
console.log(result[2] === "friend");

ReactDOM.render(<User />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
