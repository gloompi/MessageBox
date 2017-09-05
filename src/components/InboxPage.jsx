import React, {Component} from 'react';
import PropTypes from 'prop-types';

import messages from '../messages.json';
import MessagePreview from './MessagePreview.jsx';
import './InboxPage.scss';

class InboxPage extends Component{
	static contextTypes = {
		router: PropTypes.object.isRequired
	}

	state = {
		messages,
	}

	handlePreviewClick(messageId) {
		this.context.router.history.push(`/messages/${messageId}`);
	}

	render(){
		const {messages} = this.state;

		return(
			<div className="InboxPage">
				<div className="messages">
					{
						messages.map(message =>
							<MessagePreview 
								key={message.id}
								onClick={this.handlePreviewClick.bind(this, message.id)}
								title={message.subject}
								senderName={message.senderName}
								
							/>
						)
					}
				</div>
					{this.props.children}
			</div>
		);
	}
}

export default InboxPage;