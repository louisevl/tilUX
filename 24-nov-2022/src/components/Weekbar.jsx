import pil_venstre from "./../pil_venstre.png"
import pil_hojre from "./../pil_hojre.png"
import { useEffect, useState } from "react";
import Modal from "react-modal";
import BookingForm from "./BookingForm.jsx";

function Weekbar() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Mandag er klikket")
  }

    return (
        <div className="bar">
        <form onSubmit={handleSubmit}>          
        <img id="pil_venstre" src={pil_venstre} />
        <button id="uge" >Uge 48</button>

          <button id="mandag" onSubmit={handleSubmit}>Mandag</button>
          <button id="tirsdag">Tirsdag</button>
          <button id="onsdag">Onsdag</button>
          <button id="torsdag">Torsdag</button>
          <button id="fredag">Fredag</button>

        <button id="uge">Uge 50</button>
        <img id="pil_hojre" src={pil_hojre} />
        </form>        
        </div>
    );
  }
  
  export default Weekbar;
  



