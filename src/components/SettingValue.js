import React from 'react';

class SettingValue extends React.Component {

	onSettingChange = (e) => {
		this.props.changeValue (this.props.settingValues.id, e.currentTarget.value);
	};

	render = () => {
		return (
			<div className="SETTING_VALUE">
				<span>{this.props.settingValues.title}</span>
				<input type={this.props.settingValues.type} min={this.props.settingValues.min}
					   value={this.props.settingValues.value} onChange={this.onSettingChange}/>
			</div>

		);
	}
}

export default SettingValue;
