import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";
import linkedin from "./../linkedin.png";
import facebook from "./../facebook.png";
import insta from "./../instagram.png";
import youtube from "./../youtube.png";

function Footer() {
 

  return (
    <footer className="App-Footer">
      <div>
        <a href="https://www.linkedin.com/school/copenhagen-business-academy/?originalSubdomain=dk" target="_blank">
          <img src={linkedin} alt="" id="icon1"/></a>
        <a href="https://www.facebook.com/copenhagenbusinessacademy/" target="_blank"><img src={facebook} alt="" id="icon2"/></a>
        <a href="https://www.instagram.com/cphbusiness/?hl=da" target="_blank"><img src={insta} alt="" id="icon3"/></a>
        <a href="https://www.youtube.com/user/cphbusiness?app=desktop" target="_blank"><img src={youtube} alt="" id="icon4"/></a>
        </div>

        <div>
        <p id="copyright">&copy; Cph business</p>
        </div>
    </footer>
  );
}

export default Footer;