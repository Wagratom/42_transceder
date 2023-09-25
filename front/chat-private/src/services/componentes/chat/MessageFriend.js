import npcImage from '../../../npc.jpg';

function ChatMessageApiFriend(message) {
	return (
		<div className="message d-flex">
			<img src={npcImage} alt="" />
			<div className="d-flex flex-column ms-3">
				<p className="bg-dark-subtle p-2 rounded-5">
					{message}
				</p>
			</div>
		</div>
	)
}

export default ChatMessageApiFriend;
