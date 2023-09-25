import { AiOutlineSend } from 'react-icons/ai';

function ChatButtonSend() {
	return (
		<div className="d-flex align-items-center input-chat">
			<input className="" placeholder="..." />
			<button className="button-send">
				<AiOutlineSend size={25} />
			</button>
		</div>
	);
}

export default ChatButtonSend;
