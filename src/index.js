import ReactDOM from 'react-dom';
import 'normalize.css';

import './config/globals';
import './stylesheets/base.scss';

import Router from './router/router';

const container = document.getElementById('app-container');

ReactDOM.render(Router, container);
