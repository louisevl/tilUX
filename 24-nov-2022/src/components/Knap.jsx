import { useEffect, useState } from "react";
import Modal from "react-modal";
import BookingForm from "./BookingForm.jsx";


function Knap() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

 return (
    <div>
  <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Create booking form"
>
  <BookingForm />
</Modal>

<button id="tekst_kalender" onClick={openModal}>NY BOOKING</button>
</div>
);
}

export default Knap;
