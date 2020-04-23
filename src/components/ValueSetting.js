import React from 'react';

import './../App.css';

class ValueSetting extends React.Component {
	render = () => {
		return (
			<div className="">
				<span>{this.props.settingValues.title}</span>
				<input type={this.props.settingValues.type} min={this.props.settingValues.min} value={this.props.settingValues.value}/>
			</div>

		);
	}
}

export default ValueSetting;
