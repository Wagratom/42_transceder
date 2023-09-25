import npc2Image from '../../../npc2.png';

function ChatMessageApiUser(message) {
	return (
		<div className="message d-flex justify-content-end">
			<div className="d-flex flex-column align-items-end me-3">
				<div className="message-text p-2 rounded-5">
					<p>{message}</p>
				</div>
			</div>
			<img src={npc2Image} alt="" />
		</div>
	)
}

export default ChatMessageApiUser;
