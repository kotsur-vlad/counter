import React from 'react';

import SettingItem from "./SettingItem";

class Settings extends React.Component {

	state = {
		settingValues: [
			{id: 1, title: "start value: ", type: "number", min: 0, value: 0},
			{id: 2, title: "max value: ", type: "number", min: 1, value: 1}
		],
		error: false,
		disabledSET: false,
		disabledCounterButtons: false
	}

	isIncorrectValues = () => {
		this.props.checkComparingValues (this.state.error, this.state.disabledSET)
	};

	isDisabledCounterButtons = () => {
		this.props.checkDisablingButtons (this.state.disabledCounterButtons)
	};

	comparingValues = () => {
		let arrValues = this.state.settingValues.map (set => {
			return set.value;
		})
		if (arrValues[0] >= arrValues[1]) {
			this.setState ({
				error: true,
				disabledSET: true
			}, () => this.isIncorrectValues ())
		} else {
			this.setState ({
				error: false,
				disabledSET: false
			}, () => this.isIncorrectValues ())
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
			disabledCounterButtons: true
		}, () => {
			this.comparingValues ();
			this.isDisabledCounterButtons ();
		})
	};

	render = () => {

		let settings = this.state.settingValues.map (set => <SettingItem setting={set} changeValue={this.changeValue}/>)

		return (
			<div className="SETTINGS">
				{settings}
			</div>
		);
	}
}

export default Settings;
