import { useEffect, useState } from "react";
import { transformToArray } from "../firebase-utils";
import BookingForm from "./BookingForm";
import SingleBooking from "./SingleBooking";

const url =
  "https://eksamen-3-semester-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function MainContent() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);
      console.log(asArray);
      setBookings(asArray);
    }

    getData();
  }, []);

  return (
    <main>
      <div id="header-booking"></div>
       <h1 id="minebookinger">Mine Bookinger</h1>
      {bookings.map((booking) => {
        return <SingleBooking date={booking.date} room={booking.room} time={booking.time} id={booking.id} />;
      })}
    </main>
  );
  
}



