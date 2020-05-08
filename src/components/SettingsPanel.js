import React from 'react';

import Settings from "./Settings";

class SettingsPanel extends React.Component {

	render = () => {

		return (
			<div className="SETTINGS_PANEL" >

				<Settings/>

				<div className="SETUP-BUTTON">
					<button>set</button>
				</div>

			</div>
		);
	}
}

export default SettingsPanel;
