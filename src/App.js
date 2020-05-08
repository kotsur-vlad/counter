import React from 'react';

import './App.css';
import SettingsPanel from "./components/SettingsPanel";
import CounterPanel from "./components/CounterPanel";

class App extends React.Component {

	state = {
		counter: 0,
		startValue: 0,
		maxValue: 5,
	};

	onIncClick = () => {
		let counter = this.state.counter;
		let maxValue = this.state.maxValue;
		if (counter !== maxValue) {
			this.setState ({
				counter: ++counter
			})
		}
	};

	onResetClick = () => {
		let startValue = this.state.startValue;
		this.setState({
			counter: startValue
		})
	};

	render = () => {
		return (
			<div className="App">
				<SettingsPanel/>
				<CounterPanel counter={this.state.counter} onIncClick={this.onIncClick} onResetClick={this.onResetClick}/>
			</div>
		);
	}
}

export default App;
