import React from 'react';

import SettingValue from "./SettingValue";

class SettingsPanel extends React.Component {

	onMouseOut = (e) => {
		this.props.movingCursorOnBlocks11(e.target.className);
		console.log (e.target.className);
	};

	render = () => {

		let settings = this.props.settingValues.map (set => <SettingValue changeValue={this.props.changeValue}
																		  settingValues={set}/>);

		let settingsPanelClassName = this.props.isFirstPanelDisabled ? "SETTINGS_PANEL deactivated_panel" : "SETTINGS_PANEL";

		return (
			<div className={settingsPanelClassName} onMouseOut={this.onMouseOut}>

				<div className="SETTINGS">
					{settings}
				</div>

				<div className="SETUP-BUTTON">
					<button onClick={this.props.onSetClick}>SET</button>
				</div>

			</div>
		);
	}
}

export default SettingsPanel;
