import React from "react";
import {App} from './App'
import ReactDOM from "react-dom/client";
import './index.css'

// const appElement = <App/>
// const root = document.querySelector('#root') //div id attribute in public/index.html
// ReactDOM.render(appElement, root)

//ALTRO MODO PER RENDERIZZARE LA NOSTRA APP
const root = ReactDOM.createRoot(document.getElementById('root'));
const appElement = <App/>
root.render(appElement);