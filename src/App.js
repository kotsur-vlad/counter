import React from 'react';

import './App.css';
import ValueSetting from "./components/ValueSetting";

class App extends React.Component {

	state = {
		settingValues: [
			{title: "start value: ", type: "number", min: 0, value: 9},
			{title: "max value: ", type: "number", min: 1,  value: 11}
		],
		buttonsValues: [
			{title: "SET"},
			{title: "INC"},
			{title: "RESET"}
		],
		startValue: 0,
		maxValue: 5,
		counter: 0
	};

	onIncClick = () => {
		let counter = this.state.counter;
		this.setState({
			counter: ++counter
		})
	};

	onResetClick = () => {
		this.setState({
			counter: 0
		})
	}

	render = () => {

		let settings = this.state.settingValues.map( val => {
			return <ValueSetting settingValues={val}/>
		});

		return (
			<div className="App">

				<div className="SETTINGS_BLOCK">

					<div className="SETTINGS">
						{settings}
					</div>

					<div className="SETUP-BUTTON">
						<button>SET</button>
					</div>

				</div>


				<div className="COUNTER_BLOCK">

					<div className="COUNTER">
						<span>{this.state.counter}</span>
					</div>

					<div className="CONTROL-BUTTONS">
						<button onClick={this.onIncClick}>INC</button>
						<button onClick={this.onResetClick}>RESET</button>
					</div>

				</div>

			</div>
		);
	}
}

export default App;
