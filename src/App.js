import React from 'react';
import './App.css';
import Theme from './components/theme/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import Factory from './pages/Factory';
import LeatherCutter from './pages/LeatherCutter';
import MoldingMachine from './pages/MoldingMachine';
import TextileMachine from './pages/TextileMachine';
import Cobbler from './pages/Cobbler';
import SneakerRack from './pages/SneakerRack';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/factory_building' element={<Factory />} />
          <Route path='/leather_cutter' element={<LeatherCutter />} />
          <Route path='/molding_machine' element={<MoldingMachine />} />
          <Route path='/textile_machine' element={<TextileMachine />} />
          <Route path='/cobbler' element={<Cobbler />} />
          <Route path='/sneaker_rack' element={<SneakerRack />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
