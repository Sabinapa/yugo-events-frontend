import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Zdruzeno from './components/Zdruzeno';
import InfoPage from "./components/InfoPage";
import InfoPageMoreInfo from "./components/InfoPage2";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="Yugo-events">
            <Routes>
              <Route path="/info" element={<InfoPage/>}></Route>
                <Route path="/info-page" element={<InfoPageMoreInfo/>}></Route>
                <Route path="/" element={<Zdruzeno />} />
            </Routes>

          </header>
        </div>
      </BrowserRouter>

  );
}

export default App;
