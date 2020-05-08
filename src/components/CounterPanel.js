import React from 'react';

class CounterPanel extends React.Component {

	render = () => {

		return (
			<div className="COUNTER_PANEL" >

				<div className="COUNTER">
					{this.props.error
						? <span>Введи норм значения</span>
						: <span>{this.props.counter}</span>
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
