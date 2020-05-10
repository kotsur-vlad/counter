import React from 'react';

import './App.css';
import SettingsPanel from "./components/SettingsPanel";
import CounterPanel from "./components/CounterPanel";

class App extends React.Component {

	state = {
		settingValues: [
			{id: 1, title: "start value: ", type: "number", min: 0, value: 0},
			{id: 2, title: "max value: ", type: "number", min: 1, value: 5}
		],
		counter: 0,
		startValue: 0,
		maxValue: 5,
		isChanging: false,
		isError: false,
		disabledINC: false,
		disabledRESET: false,
		disabledSET: true
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
			isChanging: true,
			disabledINC: true,
			disabledRESET: true
		}, () => {
			this.comparingValues ();
		})
	};

	comparingValues = () => {
		let arrValues = this.state.settingValues.map (set => {
			return set.value;
		})
		if (arrValues[0] >= arrValues[1]) {
			this.setState ({
				isError: true,
				disabledSET: true
			})
		} else {
			this.setState ({
				isError: false,
				disabledSET: false
			})
		}
	};

	onIncClick = () => {
		debugger
		let counter = this.state.counter;
		let maxValue = this.state.maxValue;
		if (counter < maxValue) {
			this.setState ({
				counter: ++counter
			}, () => {
				if (counter === maxValue) {
					this.setState ({
						disabledINC: true
					})
				}
			});
		}
	};

	onResetClick = () => {
		let startValue = this.state.startValue;
		this.setState ({
			counter: startValue,
			disabledINC: false
		})
	};

	onSetClick = () => {
		this.state.settingValues.forEach (set => {
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
			isChanging: false,
			disabledINC: false,
			disabledRESET: false,
			disabledSET: true
		})
	};

	render = () => {
		return (
			<div className="App">

				<SettingsPanel settingValues={this.state.settingValues} isError={this.state.isError} disabledSET={this.state.disabledSET}
							   onSetClick={this.onSetClick} changeValue={this.changeValue}/>

				<CounterPanel counter={this.state.counter} isError={this.state.isError} isChanging={this.state.isChanging}
							  disabledINC={this.state.disabledINC} disabledRESET={this.state.disabledRESET}
							  onIncClick={this.onIncClick} onResetClick={this.onResetClick}/>
			</div>
		);
	}
}

export default App;
