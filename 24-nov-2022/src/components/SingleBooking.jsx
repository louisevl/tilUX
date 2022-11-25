import trash from "./../trashcan.png"
import edit from "./../editpen.png"

export default function SingleBooking({id, date, room, time }) {

  // DELETE BOOKING
  const postDelete = async (e) => {

  // Den skal bruge ID'et så den ved hvilket id den skal bruge til at slette
  fetch("https://eksamen-3-semester-default-rtdb.europe-west1.firebasedatabase.app/" + id + "/.json", {
        method: "DELETE"   
});
  };

  return (
    <container className="singleBooking">

     <div className="room_class">
      <p className="room">Klasselokale: {room}</p>
      </div>

      <div className="date_class">
      <p className="date">Dato: {date}</p>
      </div>

      <div className="time_class">
      <p className="time"> Tid: {time}</p>
      </div>

      <div className="ikoner_class">
      < img id="edit" src = {edit}/>
      </div>

      <div className="ikoner_class">
      <img id="trashcan" onClick = {postDelete} src ={trash}/>
      </div>      
      
    </container>
  );
}
