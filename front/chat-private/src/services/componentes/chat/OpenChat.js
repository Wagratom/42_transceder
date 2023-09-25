import mockedResponseApi from './MocketResponse';
import ChatButtonSend from './Button';
import ChatMessageApiUser from './MessageUser';
import ChatMessageApiFriend from './MessageFriend';
import ChatTitleChat from './Title';
import './chat.css';

function formattedResponseAPI(responseAPI, usernameUser) {
	const blockMessagens = [];
	let messageAux = "";
	let lastUsernameMessage = null;

	for (const message of responseAPI) {
		if (lastUsernameMessage === null) {
			lastUsernameMessage = message.username;
		}

		if (lastUsernameMessage === message.username) {
			messageAux += '<br />' + message.message;
		}
		else {
			if (lastUsernameMessage === usernameUser) {
				blockMessagens.push(ChatMessageApiUser(messageAux));
			}
			else {
				blockMessagens.push(ChatMessageApiFriend(messageAux));
			}
			messageAux = message.message;
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

function OpenChat() {
	const response = mockedResponseApi();
	const usernameFriend = 'John';
	const usernameUser = 'miguel';

	return (
		<div className="d-flex flex-column justify-content-end w-25">
			<div className='chat' id='chat'>
				{ChatTitleChat(usernameFriend)}
				<div className="p-5" id='messagens'>
					{formattedResponseAPI(response, usernameUser)}
				</div>
				{ChatButtonSend()}
			</div>
		</div>
	);
}

export default OpenChat;
