import React from "react";
import {Root} from './Root'
import ReactDOM from "react-dom/client";
import './index.css'

// const appElement = <App/>
// const root = document.querySelector('#root') //div id attribute in public/index.html
// ReactDOM.render(appElement, root)

//ALTRO MODO PER RENDERIZZARE LA NOSTRA APP
const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = <Root/>
root.render(rootElement);