import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Meeting from './pages/Meeting';
import Report from './pages/Report';
import Leaderboard from './pages/Leaderboard';
import Setting from './pages/Setting';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
		    <Route path="/" element={<Loading />} />
			<Route path="/home" element={<Home />} />
			<Route path="/meeting" element={<Meeting />} />
			<Route path="/report" element={<Report />} />
			<Route path="/leaderboard" element={<Leaderboard />} />
			<Route path="/setting" element={<Setting />} />
		</Routes>
	</BrowserRouter>
);

export default App;
