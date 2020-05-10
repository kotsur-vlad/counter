import React from 'react';

class SettingItem extends React.Component {

	onSettingChange = (e) => {
		this.props.changeValue (this.props.setting.id, e.currentTarget.value)
	};

	render = () => {

		let settingValueClassName = this.props.isError ? "SETTING_VALUE incorrect_value" : "SETTING_VALUE";

		return (
			<div className={settingValueClassName}>
				<span>{this.props.setting.title}</span>
				<input onChange={this.onSettingChange} onFocus={this.onSettingChange} type={this.props.setting.type} min={this.props.setting.min} value={this.props.setting.value}/>
			</div>
		);
	}
}

export default SettingItem;
