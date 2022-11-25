import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";
import logo from "./../logocph.png"
import SingleBooking from "./SingleBooking.jsx";
import MainContent from "./MainContent.jsx";

function TheHeader() {

  return (

    <header className="App-header">

      <div className="Head">
        <div><img className="logocph" src={logo} alt="Logo" /></div>

        <div className="knapper_header">
          <a href="/" className="Header-knap">Oversigt</a> 
          <a href="#header-booking" className="Header-knap-to">Mine bookinger</a> 
        </div>

      </div>
    </header>
  );
}

export default TheHeader;

