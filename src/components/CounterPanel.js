import React from 'react';

class CounterPanel extends React.Component {

	render = () => {

		let counterClassName = (this.props.disabledINC && !this.props.isChanging) ? "COUNTER max_counter_value" : "COUNTER";

		return (
			<div className="COUNTER_PANEL">

				<div className={counterClassName}>
					{this.props.isError ? <span>Введи норм значения</span> :
						this.props.isChanging ? <span>меняй меняй</span> : <span>{this.props.counter}</span>
					}
				</div>

				<div className="CONTROL-BUTTONS">
					<button onClick={this.props.onIncClick} disabled={this.props.disabledINC}>inc</button>
					<button onClick={this.props.onResetClick} disabled={this.props.disabledRESET}>reset</button>
				</div>

			</div>
		);
	}
}

export default CounterPanel;
