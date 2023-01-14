import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import HeroSlider from './HeroSlider';

import './main.css'

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Router>
				<Navbar2 />
				<HeroSlider />
			</Router>
		</>
	);
}

export default App;
