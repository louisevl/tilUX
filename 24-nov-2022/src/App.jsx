import "./App.css";
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import Name from "./Name";
import Footer from "./components/Footer"
import Calendar from "./components/Calendar";
import pil_venstre from "./pil_venstre.png"
import pil_hojre from "./pil_hojre.png"
import Weekbar from "./components/Weekbar";
import Knap from "./components/Knap";
import Dropdown from "./components/Dropdown";
/*import status_paa_booking from "./status_paa_booking.png"*/
import BookingOverview from "./components/BookingOverview";



function App() {
  return (
    <div className="App">
      <TheHeader />
      <div className="flex">
        <Knap />   
        <Dropdown />
      </div>
      <div className="flex">
        <Calendar />
        <BookingOverview />
      </div>
      <Weekbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
