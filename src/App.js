import React from 'react';

import './App.css';
import SettingsPanel from "./components/SettingsPanel";
import CounterPanel from "./components/CounterPanel";

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
		disabled: false,
		isFirstPanelDisabled: true
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
		if (this.state.settingValues[0].value >= this.state.settingValues[1].value) {
			alert ("eafwe");

		}
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
	};

	changeValue = (settingId, newValue) => {
		let newSettings = this.state.settingValues.map (set => {
			if (set.id === settingId) {
				return {...set, value: +newValue}
			}
			return set;
		});
		this.setState ({
			settingValues: newSettings,
			disabled: true
		});
		// this.setState ( (state) => {
		// 	return {
		// 		settingValues: newSettings,
		// 		disabled: true
		// 	}
		// });
	};

	movingCursorOnBlocks11 = (element) => {
		if (element) {
			this.setState ({
				isFirstPanelDisabled: false
			})
		}
	};

	movingCursorOnBlocks22 = (element) => {
		if (element) {
			this.setState ({
				isFirstPanelDisabled: true
			})
		}
	};


	render = () => {
		return (
			<div className="App">
				<SettingsPanel changeValue={this.changeValue} settingValues={this.state.settingValues}
							   onSetClick={this.onSetClick} isFirstPanelDisabled={this.state.isFirstPanelDisabled}
							   movingCursorOnBlocks11={this.movingCursorOnBlocks11}/>

				<CounterPanel counter={this.state.counter} onIncClick={this.onIncClick} onResetClick={this.onResetClick}
							  disabled={this.state.disabled} isFirstPanelDisabled={this.state.isFirstPanelDisabled}
							  movingCursorOnBlocks22={this.movingCursorOnBlocks22}/>
			</div>
		);
	}
}

export default App;
