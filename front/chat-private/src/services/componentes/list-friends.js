import { BsPersonAdd } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import npcImage from '../../npc.jpg';

function ListFriends({getChat}) {

  return (
	<div className='friends'>
        <div className='perfil d-flex align-items-center'>
          <img src={npcImage} alt='' />
          <div className='ms-3'>
            <p>Username1</p>
            <span className='message-perfil'>Eu serei o rei dos piratas</span>
          </div>
        </div>

        <hr />

        <div className='d-flex align-items-center'>
          <p>Amigos</p>
          <div className='justify-content-end d-flex w-100'>
            <button>
              <BsPersonAdd size={25} />
            </button>
            <button>
              <AiOutlineSearch size={25} />
            </button>
          </div>
        </div>

        <div className='list-friends mt-3'>
          <ul>
            <li onClick={() => getChat('Username1')}>
              <img src={npcImage} alt='' />
              <div className='ms-2'>
                <p>Username1</p>
                <p>online</p>
              </div>
            </li>
            <li onClick={() => getChat('Username2')}>
              <img src={npcImage} alt='' />
              <div className='ms-2'>
                <p>Username2</p>
                <p>online</p>
              </div>
            </li>
            <li onClick={() => getChat('Username3')}>
              <img src={npcImage} alt='' />
              <div className='ms-2'>
                <p>Username3</p>
                <p>online</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default ListFriends;
