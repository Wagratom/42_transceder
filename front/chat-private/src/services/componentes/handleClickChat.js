import React from 'react';
import axios from 'axios';
import npc2Image from '../../npc2.png';
import npcImage from '../../npc.jpg';
import { dataUsers } from '../utilites/dataUsers';
import { AiOutlineSend } from 'react-icons/ai';

function chatFormatted(selectedFriend) {
	return (
		<div class="d-flex flex-column justify-content-end">
			<div className='chat' id='chat'>
				<div class="title-chat text-center" id='title-chat'>
					<h2>{selectedFriend}</h2>
				</div>
				<div class="p-5" id='messagens'>
					<div class="message d-flex justify-content-end">
						<div class="d-flex flex-column align-items-end me-3">
							<div class="message-text p-2 rounded-5">
								<p>Iae man vai encosta na 42 hj?</p>
							</div>
						</div>
						<img src={npc2Image} alt=""></img>
					</div>
					<div class="message d-flex">
						<img src={npcImage} alt=""></img>
						<div class="d-flex flex-column ms-3">
							<p class="bg-dark-subtle p-2 rounded-5">
								Vou nada Pae. To cansadão hj, vou fica no frifras
							</p>
						</div>
					</div>
					<div class="message d-flex justify-content-end">
						<div class="d-flex flex-column align-items-end me-3">
							<div class="p-2 rounded-5 message-text">
								<p>Que frifras man, bora cola lá.</p>
								<p>Os mlk vai rasquiar um servidor hj, vamo zaranha tudo</p>
							</div>
						</div>
						<img src={npc2Image} alt=""></img>
					</div>
					<div class="message d-flex">
						<img src={npcImage} alt=""></img>
						<div class="bg-dark-subtle">
							<p>Que nada man, Mooh suco de perá isso ae.</p>
						</div>
					</div>
				</div>
				<div class="d-flex align-items-center input-chat">
					<input class="" placeholder="..."></input>
					<button class="button-send">
						<AiOutlineSend size={25} />
					</button>
				</div>
			</div>
		</div>

	);
}

function getConversation(usernameUser, usernameFriend) {
	const query = '?username1=' + usernameUser + '&username2=' + usernameFriend;
	const url = 'http://localhost:3000/messagens' + query;
	axios.get(url).then((response) => {
		console.log(response.data);
	}).catch((error) => {
		console.log(error);
	});
}

function HandleClickChat(props) {
	const { selectedFriend } = props;
	const username = dataUsers.username;

	getConversation(username, selectedFriend);
	return chatFormatted(selectedFriend);
}

export default HandleClickChat;
