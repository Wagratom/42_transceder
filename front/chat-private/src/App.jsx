import React, { useState } from 'react';
import OpenChat from './services/componentes/chat/OpenChat';
import ListFriends from './services/componentes/list-friends';

// #5a2487
// #441b6a
// #2d124d
// #170931
// #000014

function App() {
	const [friendSelected, setFriendSelected] = useState('');
	const [showChat, setShowChat] = useState(false);

	function handleOpenChat(friendSelected) {
		setFriendSelected(friendSelected);
		setShowChat(true);
	}

  return (
    <div className='d-flex justify-content-end'>
	  { showChat ? <OpenChat friendSelected={friendSelected}/> : null }
	  <ListFriends handleOpenChat={handleOpenChat} />
    </div>
  );
}

export default App;
