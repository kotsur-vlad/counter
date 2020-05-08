import React from 'react';

class CounterPanel extends React.Component {

	render = () => {

		return (
			<div className="COUNTER_PANEL" >

				<div className="COUNTER">
					<span>{this.props.counter}</span>
				</div>

				<div className="CONTROL-BUTTONS">
					<button onClick={this.props.onIncClick}>inc</button>
					<button onClick={this.props.onResetClick}>reset</button>
				</div>

			</div>
		);
	}
}

export default CounterPanel;
