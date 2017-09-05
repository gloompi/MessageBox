import React, { Component } from 'react';

import messages from '../messages.json';
import InboxPage from './InboxPage.jsx';

class Message extends Component{
	state = {
		message: messages.find(message => message.id === this.props.match.params.messageId)
	}

	componentWillReceiveProps(nextProps) {
		const {messageId: prevId} = this.props.match.params;
		const {messageId: nextId} = nextProps.match.params;

		if(prevId !== nextId){
			this.setState({
				message: messages.find(message => message.id === nextId)
			});
		}
	}

	render(){
		const {message} = this.state;

		return(
			<InboxPage>
				<div className='message-container'>
					<div className="Message">
						<p>From: {message.senderName} ({message.senderEmail}) </p>
						<p>To: you </p>
						<p>Subject: {message.subject} </p>
						<hr />
						<p>{message.body} </p>
					</div>
				</div>
			</InboxPage>
		);
	}
}

export default Message;