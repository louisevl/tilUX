import "./App.css";
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import Name from "./Name";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <TheHeader />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;