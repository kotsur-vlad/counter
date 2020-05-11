import React from 'react';

import styles from "./CounterPanel.module.css";

class CounterPanel extends React.Component {

	render = () => {

		let counterClassName = (this.props.disabledINC && !this.props.isChanging) ?
			`${styles.counter_wrapper} ${styles.counter_with_maxValue}` : `${styles.counter_wrapper}`;

		return (
			<div className={styles.counter_panel}>
				<div className={counterClassName}>
					{this.props.isError ? <div className={styles.counter_with_incorrectValues}>enter a valid values</div> :
						this.props.isChanging ? <div>set start and maximum value</div> :
							<div className={styles.counter}>{this.props.counter}</div>
					}
				</div>

				<div className={styles.control_buttons}>
					<button className={styles.inc_button} onClick={this.props.onIncClick}
							disabled={this.props.disabledINC}>INC
					</button>
					<button className={styles.reset_button} onClick={this.props.onResetClick}
							disabled={this.props.disabledRESET}>RESET
					</button>
				</div>
			</div>
		);
	}
}

export default CounterPanel;
