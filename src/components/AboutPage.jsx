import React, {Component} from 'react';

import App from '../App.jsx';
import './AboutPage.scss';

class AboutPage extends Component{
	render() {
		return(
			<div className="AboutPage">
				<h2 className="title">
					This is message application
				</h2>

				<div className="text">
					<p>Some text bla bla bla</p>

					<p>Some text bla bla bla</p>

					<p>Some text bla bla bla</p>

					<p>Some text bla bla bla</p>
				</div>

			</div>
		);
	}
}

export default AboutPage;