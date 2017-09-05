import {render} from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link, Switch } from 'react-router-dom';
import history from './history';
import './App.scss';

import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';
import Message from './components/Message.jsx';

render(
	<Router history={history}>
		<App>
			<Route exact path='/' render={() => <h1>Home</h1>} />
			<Route path='/about' component={AboutPage} />
			<Route path='/inbox' component={InboxPage} />
			<Route path='/messages/:messageId' component={Message} />
		</App>
	</Router>,
	document.getElementById('mount-point')
);