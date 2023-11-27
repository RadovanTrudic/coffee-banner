import { useContext, useState } from 'react';
import CodeGenerator from '../components/codeGenerator';
import Description from '../components/description';
import Header from '../components/header';
import Modal from '../components/modal';
import Preview from '../components/preview';
import Swiper from '../components/swiper';
import { BannerContext } from '../context/context';

function Home() {
  const { banner } = useContext(BannerContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="home">
      <Header></Header>
      {banner.completed && (
        <div>
          <button className="modal-button" onClick={openModal}>
            Open Modal
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* Content of your modal */}
            <CodeGenerator banner={banner}></CodeGenerator>
          </Modal>
        </div>
      )}
      <div className="home-center">
        <Description></Description>
        <Swiper></Swiper>
        <Preview></Preview>
      </div>
    </div>
  );
}

export default Home;
