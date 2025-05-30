import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Meeting from './pages/Meeting';
import Report from './pages/Report';
import Leaderboard from './pages/Leaderboard';
import Setting from './pages/Setting';

const App: React.FC = () => {
	const [hintOn, setHintOn] = useState(true);
	const [funOn, setFunOn] = useState(false);
  const [ghostOn, setGhostOn] = useState<boolean>(false);
	return (
		<BrowserRouter>
			<Routes>
			    <Route path="/" element={<Loading />} />
				<Route path="/home" element={<Home />} />
				<Route path="/meeting" element={<Meeting hintOn={hintOn} funOn={funOn} ghostOn={ghostOn} />} />
				<Route path="/report" element={<Report />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
				<Route path="/setting" element={<Setting hintOn={hintOn} setHintOn={setHintOn} funOn={funOn} setFunOn={setFunOn} ghostOn={ghostOn} setGhostOn={setGhostOn} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
