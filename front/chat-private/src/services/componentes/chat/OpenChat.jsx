import mockedResponseApi from './MocketResponse';
import ChatButtonSend from './Button';
import ChatMessageApiUser from './MessageUser';
import ChatMessageApiFriend from './MessageFriend';
import ChatTitleChat from './Title';
import './chat.css';

function formattedResponseAPI(responseAPI, usernameUser) {
	const blockMessagens = [];
	let messageAux = [];
	let lastUsernameMessage = null;

	for (const message of responseAPI) {
		if (lastUsernameMessage === null) {
			lastUsernameMessage = message.username;
		}

		if (lastUsernameMessage === message.username) {
			messageAux.push(<p>{message.message}</p>);
		}
		else {
			if (lastUsernameMessage === usernameUser) {
				blockMessagens.push(ChatMessageApiUser(messageAux));
			}
			else {
				blockMessagens.push(ChatMessageApiFriend(messageAux));
			}
			messageAux = [];
			messageAux.push(<p>{message.message}</p>);
			lastUsernameMessage = message.username;
		}
	}

	if (lastUsernameMessage === usernameUser) {
		blockMessagens.push(ChatMessageApiUser(messageAux));
	} else {
		blockMessagens.push(ChatMessageApiFriend(messageAux));
	}

	return blockMessagens;
}

function OpenChat({friendSelected}) {
	const response = mockedResponseApi();
	const usernameUser = 'miguel';

	return (
		<div className='chat d-flex flex-column justify-content-end' id='chat'>
			{ChatTitleChat(friendSelected)}
			<div className="p-5" id='messagens'>
				{formattedResponseAPI(response, usernameUser)}
			</div>
			{ChatButtonSend()}
		</div>
	);
}

export default OpenChat;
