import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapView from "./components/MapView";
import React from 'react';
import InfoPage from "./components/InfoPage";
import InfoPageMoreInfo from "./components/InfoPage2";
import EventsPage from "./components/events";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <script src="https://cdn.jsdelivr.net/npm/openlayers@6.6.1/dist/ol.js"></script>
          <header className="Yugo-events">
            <Routes>
                <Route path="/info" element={<InfoPage />}></Route>
                <Route path="/info-page" element={<InfoPageMoreInfo />}></Route>
                <Route path="/" element={<MapView />}></Route>
                <Route path="/map" element={<MapView/>}></Route>
                <Route path="/events" element={<EventsPage/>}></Route>
            </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
