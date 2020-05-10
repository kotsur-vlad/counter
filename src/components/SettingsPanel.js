import React from 'react';

import SettingItem from "./SettingItem";

class SettingsPanel extends React.Component {
	render = () => {

		let settings = this.props.settingValues.map (set => <SettingItem setting={set} isError={this.props.isError} changeValue={this.props.changeValue}/>)

		return (
			<div className="SETTINGS_PANEL" >

				<div className="SETTINGS">
					{settings}
				</div>

				<div className="SETUP-BUTTON">
					<button onClick={this.props.onSetClick} disabled={this.props.disabledSET}>set</button>
				</div>

			</div>
		);
	}
}

export default SettingsPanel;
