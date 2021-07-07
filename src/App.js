import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      {/* https://api.openweathermap.org/data/2.5/onecall?lat=${locationState.latitude}&lon=${locationState.longitude}&&units=metric&exclude=minutely,hourly,daily&appid=07c07359b14f9c5e9a448d4856dac0e3 */}
      {/* https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */}
      {/* AIzaSyDzGTI9teC872f-dxriNut8JYigMWyJinY */}

      <Map />
    </div>
  );
}

export default App;
