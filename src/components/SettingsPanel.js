import React from 'react';

import SettingItem from "./SettingItem";

class SettingsPanel extends React.Component {

	state = {
		settingValues: [
			{id: 1, title: "start value: ", type: "number", min: 0, value: 0},
			{id: 2, title: "max value: ", type: "number", min: 1, value: 1}
		]
	}

	isIncorrectValues = (isIncorrect, isDisabled) => {
		this.props.checkComparingValues (isIncorrect, isDisabled)
	};

	isDisabledCounterButtons = (isDisabled) => {
		this.props.checkCounterButtons (isDisabled)
	};

	comparingValues = () => {
		let arrValues = this.state.settingValues.map (set => {
			return set.value;
		})
		if (arrValues[0] >= arrValues[1]) {
			this.isIncorrectValues (true,true)
		} else {
			this.isIncorrectValues (false,false)
		}
	};

	changeValue = (settingId, newValue) => {
		let newSettings = this.state.settingValues.map (set => {
			if (set.id === settingId) {
				return {...set, value: +newValue}
			}
			return set;
		});
		this.setState ({
			settingValues: newSettings,
		}, () => {
			this.comparingValues ();
			this.isDisabledCounterButtons (true);
		})
	};

	render = () => {

		let settings = this.state.settingValues.map (set => <SettingItem setting={set} changeValue={this.changeValue}/>)

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
