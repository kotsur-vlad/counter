import React from 'react';

class CounterPanel extends React.Component {

	onMouseOut = (e) => {
		this.props.movingCursorOnBlocks22(e.target.className);
		console.log (e.target.className);
	};

	render = () => {

		let counterPanelClassName = !this.props.isFirstPanelDisabled ? "COUNTER_PANEL deactivated_panel" : "COUNTER_PANEL";
		let counterClassName = this.props.isMaxValue ? "COUNTER max_counter_value" : "COUNTER";

		return (
			<div className={counterPanelClassName} onMouseOut={this.onMouseOut}>

				<div className={counterClassName}>
					<span>{this.props.counter}</span>
				</div>

				<div className="CONTROL-BUTTONS">
					<button onClick={this.props.onIncClick} disabled={this.props.disabled}>INC</button>
					<button onClick={this.props.onResetClick}>RESET</button>
				</div>

			</div>
		);
	}
}

export default CounterPanel;
