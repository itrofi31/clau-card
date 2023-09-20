import { useState } from 'react';
import Modal from './components/Modal';
import LinksList from './components/LinksList';
import Profile from './components/Profile';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className='main'>
        <div className='card'>
          <Profile />
          <LinksList />
        </div>
        <div
          onClick={handleOpenModal}
          className='form-btn'
        >
          Записаться на фотосессию
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOpenModal={handleOpenModal}
      />
    </>
  );
}

export default App;
