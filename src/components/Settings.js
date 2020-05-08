import React from 'react';
import SettingItem from "./SettingItem";

class Settings extends React.Component {

	state = {
		settingValues: [
			{id: 1, title: "start value: ", type: "number", min: 0, value: 0},
			{id: 2, title: "max value: ", type: "number", min: 1, value: 1}
		],
		startValue: 0,
		maxValue: 1,
		error: false
	}

	comparingValues = () => {
		let arrValues = this.state.settingValues.map (set => {
			return set.value;
		})
		if (arrValues[0] >= arrValues[1]) {
			alert ("dfsgvrw")
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
			settingValues: newSettings
		}, () => {
			this.comparingValues ()
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
