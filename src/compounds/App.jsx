import React from "react";

import Name from "./Name";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
function App() {
	return (
		<div className="main_container">
			<div className="bg">
				<Name />
				<About />
				<Interests />
			</div>
			<Footer />
		</div>
	);
}

export default App;
