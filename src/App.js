import React from 'react';

import './App.css';
import ValueSetting from "./components/ValueSetting";

class App extends React.Component {

	state = {
		settingValues: [],
		buttonsValues: []
	};

	render = () => {
		return (
			<div className="App">

				<div className="SETTINGS_BLOCK">

					<div className="SETTINGS">
						<ValueSetting/>
						<ValueSetting/>
					</div>

					<div className="SETUP-BUTTON">
						<button>SET</button>
					</div>

				</div>


				<div className="COUNTER_BLOCK">

					<div className="COUNTER">
						<span>1</span>
					</div>

					<div className="CONTROL-BUTTONS">
						<button>INC</button>
						<button>RESET</button>
					</div>

				</div>

			</div>
		);
	}
}

export default App;
