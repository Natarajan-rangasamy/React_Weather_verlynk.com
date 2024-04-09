import DisplayWeather from "./Components/DisplayWeather";
import Search from "./Components/Search";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="Contianer">
      <Search />
      <div className="sty">
        <DisplayWeather />
      </div>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
