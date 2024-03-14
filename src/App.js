import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            </Routes>

          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
