import React from 'react';

import styles from "./SettingsPanel.module.css";
import SettingItem from "./SettingItem";

class SettingsPanel extends React.Component {
	render = () => {

		let settings = this.props.settingValues.map (set => <SettingItem setting={set} isError={this.props.isError}
																		 changeValue={this.props.changeValue}/>)

		return (
			<div className={styles.settings_panel}>
				<div className={styles.settings_items}>
					{settings}
				</div>

				<div className={styles.setup}>
					<button className={styles.setup_button} onClick={this.props.onSetClick} disabled={this.props.disabledSET}>SET</button>
				</div>
			</div>
		);
	}
}

export default SettingsPanel;
