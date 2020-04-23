import React from 'react';

import './App.css';
import ValueSetting from "./components/ValueSetting";

class App extends React.Component {

	state = {
		settingValues: [
			{id: 1, title: "start value: ", type: "number", min: 0, value: 0},
			{id: 2, title: "max value: ", type: "number", min: 1, value: 1}
		],
		buttonsValues: [
			{id: 1, title: "SET"},
			{id: 2, title: "INC"},
			{id: 3, title: "RESET"}
		],
		startValue: 0,
		maxValue: 1,
		counter: 0,
		disabled: false
	};

	onIncClick = () => {
		let counter = this.state.counter;
		let maxValue = this.state.maxValue;
		if (counter !== maxValue) {
			this.setState ({
				counter: ++counter
			})
		} else {
			this.setState ({
				disabled: true
			})
		}
	};

	onResetClick = () => {
		this.setState ({
			counter: this.state.startValue,
			disabled: false
		});
	}

	onSetClick = () => {
		this.state.settingValues.map (set => {
			if (set.title === "start value: ") {
				this.setState ({
					counter: set.value,
					startValue: set.value
				});
			} else if (set.title === "max value: ") {
				this.setState ({
					maxValue: set.value
				});
			}
		});
		this.setState ({
			disabled: false
		})


		// this.setState ({
		// 	counter: this.state.settingValues[0].value,
		// 	startValue: this.state.settingValues[0].value,
		// 	maxValue: this.state.settingValues[1].value,
		// 	disabled: false
		// })
		// console.log(this.state.counter)
		// console.log(this.state.startValue)
		// console.log(this.state.maxValue)
	};

	changeValue = (settingId, newValue) => {
		let newSettings = this.state.settingValues.map (set => {
			if (set.id === settingId) {
				return {...set, value: +newValue}
			}
			return set;
		});
		this.setState ({
			settingValues: newSettings
		});
	};

	render = () => {

		let settings = this.state.settingValues.map (set => <ValueSetting changeValue={this.changeValue}
																		  settingValues={set}/>);

		return (
			<div className="App">

				<div className="SETTINGS_BLOCK">

					<div className="SETTINGS">
						{settings}
					</div>

					<div className="SETUP-BUTTON">
						<button onClick={this.onSetClick}>SET</button>
					</div>

				</div>


				<div className="COUNTER_BLOCK">

					<div className="COUNTER">
						<span>{this.state.counter}</span>
					</div>

					<div className="CONTROL-BUTTONS">
						<button onClick={this.onIncClick} disabled={this.state.disabled}>INC</button>
						<button onClick={this.onResetClick}>RESET</button>
					</div>

				</div>

			</div>
		);
	}
}

export default App;
