import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class App extends Component {
	render(){
		return (
			<div className="app">
				<ul className="menu__list">
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/inbox'>Inbox</Link></li>
				</ul>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
};

export default App;