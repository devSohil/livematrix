import "./App.css";
import Based from "./Components/Based/Based";
import Desgin from "./Components/Design/Desgin";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Offers from "./Components/Offers/Offers";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="bodyContainer">
      <Navbar />
      <Header />
      <Offers />
      <Work />
      <Desgin />
      <Based />
      <Footer />
    </div>
  );
}

export default App;
