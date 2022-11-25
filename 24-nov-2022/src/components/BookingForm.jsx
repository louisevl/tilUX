import { useState } from "react";

export default function BookingForm({ setBookings }) {
  const [room, setRoom] = useState(""); //Room
  const [date, setDate] = useState(""); // date
  const [time, setTime] = useState(""); // Time
  const [id, getId] = useState(""); //Få ID

  const handleRoom = (event) => {
    //const input = event.target.value;
    setRoom(event.target.value);
  };
  const handleDate = (event) => {
    // date
    setDate(event.target.value);
  };

  const handleTime = (event) => {
    // Time
    setTime(event.target.value);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("You clicked");
    let booking = { room: room, date: date, time: time, id: id };
    const response = await fetch(
      "https://eksamen-3-semester-default-rtdb.europe-west1.firebasedatabase.app/.json",
      {
        method: "POST",
        body: JSON.stringify(booking),
        
      }
    );
    const result = await response.json();
    console.log(result);
    booking.id = result.name;
    setBookings((previousValue) => {
      return [...previousValue, booking];
    });
    
  };

  //const handleMorgen = (event) => {
  //  setMorgen(event.target.value);
  //};

  //const handleEftermiddag = (event) => {
  //  setEftermiddag(event.target.value);
  //};

  return (
    <form id="modalbox">
      {/* Trin bokse */}
      <container id="outerbox">

        {/* Trin 1 Time */}


        <div id="stepbox1">
          <h2>Trin 1</h2>
          <label id="dato">Dato</label>
          <input type="date" placeholder="Dato - f.eks. 15-10-2022" name="date" value={date} onChange={handleDate} id="trin1kalender" />

          <label id="vaelg_tidspunkt">Tid</label>

          <form action="">
            <input type="radio" id="trin1button1" placeholder="" value={"8:30-12:00"} onChange={handleTime} name="trin1" />
            <label id="morgen">Morgen 8:30-12:00</label>
            <br />
            <input type="radio" id="trin1button2" placeholder="" value={"12:30-16:00"} onChange={handleTime} name="trin1" />
            <label id="eftermiddag">Eftermiddag 12:30-16:00</label>
          </form>




          {/* <div id="stepbox1">
          <h2>Trin 1</h2>
          <label id="dato">Dato</label>
          <input
            type="date"
            placeholder="Dato - f.eks. 15-10-2022"
            name="date"
            value={date}
            onChange={handleDate}
            id="trin1kalender"
          />
          <br />
          <label id="vaelg_tidspunkt">Vælg tidspunkt </label>
            <h3 id="morgen">Morgen 8:30-12:00</h3>  
    
          <input 
            type="radio" 
            id="trin1button1"
            placeholder=""
            value={"8:30-12:00"}
            onChange={handleTime}   
            name="trin1"
            >           
            </input>

            <h3 id="eftermiddag">Eftermiddag 12:30-16:00</h3>          

          <input 
            type="radio" 
            id="trin1button2"
            placeholder=""
            value={"12:30-16:00"}
            onChange={handleTime}
            name="trin1"
            >
            </input> */}


        </div>
        {/* <div id="stepbox1">
          <input
            type="time"
            placeholder="Vælg tid"
            name="time"
            value={time}
            onChange={handleTime}
            min="08:00" max="18:00" required
  /> 
        </div>*/}

        {/* Trin 2 Lokale */}
        <div id="stepbox2">
          <h2>Trin 2</h2>
          <label id="lokale">Lokale</label>
          <select onChange={handleRoom} name="lokaledropdown">
            <option value="select">Vælg et lokale</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        {/* Trin 3 Dato */}
        <div id="stepbox3">
          <h2>Trin 3</h2>

          <button onClick={handleSubmit} id="bookbutton">Book</button>

        </div>
      </container>
    </form>
  );
}
