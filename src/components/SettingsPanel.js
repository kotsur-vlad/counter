import React from 'react';

import Settings from "./Settings";

class SettingsPanel extends React.Component {

	// state = {
	// 	disabled: true
	// }

	render = () => {

		return (
			<div className="SETTINGS_PANEL" >

				<Settings checkComparingValues={this.props.checkComparingValues} checkDisablingButtons={this.props.checkDisablingButtons}/>

				<div className="SETUP-BUTTON">
					<button onClick={this.props.onSetClick} disabled={this.props.disabledSET}>set</button>
				</div>

			</div>
		);
	}
}

export default SettingsPanel;
