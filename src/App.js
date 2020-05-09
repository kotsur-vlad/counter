import React from 'react';

import './App.css';
import SettingsPanel from "./components/SettingsPanel";
import CounterPanel from "./components/CounterPanel";

class App extends React.Component {

	state = {
		counter: 0,
		startValue: 0,
		maxValue: 5,
		error: false,
		disabledINC: false,
		disabledRESET: false,
		disabledSET: true
	};

	checkComparingValues = (isError, isDisabled) => {
		this.setState ({
			error: isError,
			disabledSET: isDisabled
		})
	};

	checkCounterButtons = (isDisabled) => {
		this.setState ({
			disabledINC: isDisabled,
			disabledRESET: isDisabled
		})
	}

	onIncClick = () => {
		let counter = this.state.counter;
		let maxValue = this.state.maxValue;
		if (counter !== maxValue) {
			this.setState ({
				counter: ++counter
			})
		} else {
			this.setState ({
				disabledINC: true
			})
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
		let startValue = this.state.startValue;
		this.setState ({
			counter: startValue,
			disabledINC: false,
			disabledRESET: false,
			disabledSET: true
		})
		alert ('fswef')
	};

	render = () => {
		return (
			<div className="App">
				<SettingsPanel disabledSET={this.state.disabledSET} onSetClick={this.onSetClick}
							   checkComparingValues={this.checkComparingValues} checkCounterButtons={this.checkCounterButtons}/>
				<CounterPanel counter={this.state.counter} error={this.state.error} disabledINC={this.state.disabledINC}
							  disabledRESET={this.state.disabledRESET} onIncClick={this.onIncClick}
							  onResetClick={this.onResetClick}/>
			</div>
		);
	}
}

export default App;
