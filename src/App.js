import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapView from "./components/MapView";
import Zdruzeno from './components/Zdruzeno';
import InfoPage from "./components/InfoPage";
import InfoPageMoreInfo from "./components/InfoPage2";
import Login from './components/Login';
import Register from './components/Register'
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <script src="https://cdn.jsdelivr.net/npm/openlayers@6.6.1/dist/ol.js"></script>
          <header className="Yugo-events">
            <Navbar />
            <Routes>
              <Route path="/info" element={<InfoPage/>}></Route>
                <Route path="/info-page" element={<InfoPageMoreInfo/>}></Route>
                <Route path="/map" element={<MapView/>}></Route>
                <Route path="/" element={<Zdruzeno />} />
              <Route path="/info-page" element={<InfoPageMoreInfo/>}></Route>
              <Route path="/map" element={<MapView/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/" element={<Zdruzeno />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;