import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapView from "./components/MapView";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div id="root"></div>
          <script src="https://cdn.jsdelivr.net/npm/openlayers@6.6.1/dist/ol.js"></script>
          <header className="Yugo-events">
            <Routes>
            <Route path="/map" element={<MapView/>}></Route>
            </Routes>

          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
