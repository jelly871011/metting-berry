import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
