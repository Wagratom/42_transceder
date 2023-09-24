import React, { useState } from 'react';
import HandleClickChat from './services/componentes/handleClickChat';
import ListFriends from './services/componentes/list-friends';

// #5a2487
// #441b6a
// #2d124d
// #170931
// #000014

function App() {
  const [selectedFriend, setSelectedFriend] = useState('');
  const [showChat, setShowChat] = useState(false);

  function getChat(friend) {
    setSelectedFriend(friend);
    setShowChat(true);
  }

  return (
    <div className='d-flex justify-content-end'>
      {showChat ? (<HandleClickChat selectedFriend={selectedFriend} />) : null}
      {<ListFriends getChat={getChat} />}
    </div>
  );
}

export default App;
