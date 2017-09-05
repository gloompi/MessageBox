import React, {Component} from 'react';

import './MessagePreview.scss';

class MessagePreview extends Component{
	render() {
		const { title, senderName, onClick } = this.props;

		return(
			<div className='MessagePreview' onClick={onClick}>
				<div className="title">
					{title}
				</div>

				<div className="from">
					{`from ${senderName}`}
				</div>
			</div>
		);
	}
}

export default MessagePreview;