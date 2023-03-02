import React, { useState, useEffect } from "react";
import "./OrdenaAquiModal.scss";
import Modal from "@/components/molecules/modal/Modal";
import PensandoGordear from "img/pensando-gordear.svg";
import MotoNelaAnimation from "@/components/molecules/youtubePlayer/motoNelaAnimation/MotoNelaAnimation";

const OrdenaAquiModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {setShowModal(true)}, 1500);
  }, []);

  return (
    <Modal
      modalShow={showModal}
      handleClose={() => setShowModal(false)}
      padding="30px 0px"
    >
      <div className="modal-order-here">
        <div>
          <PensandoGordear className="gordear-text" />
          <MotoNelaAnimation />
        </div>
        <div className="link-container">
          <a
            href={process.env.URL_ONLINE_ORDER}
            target="noopener"
          >
            ¡ORDENA AQUÍ!
          </a>
        </div>
      </div>
    </Modal>
  );
};
export default OrdenaAquiModal;
