import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Meeting from './pages/Meeting';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" element={<Home />} />
      <Route path="/meeting" element={<Meeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
