import React from 'react';

import styles from "./SettingItem.module.css";

class SettingItem extends React.Component {

	onSettingChange = (e) => {
		this.props.changeValue (this.props.setting.id, e.currentTarget.value)
	};

	render = () => {

		let settingInputClassName = this.props.isError ? `${styles.setting_input} ${styles.incorrect_value}` : `${styles.setting_input}`;

		return (
			<div className={styles.setting_item}>
				<div className={styles.setting_title}>{this.props.setting.title}</div>
				<input className={settingInputClassName} onChange={this.onSettingChange} onFocus={this.onSettingChange} type={this.props.setting.type}
					   min={this.props.setting.min} value={this.props.setting.value}/>
			</div>
		);
	}
}

export default SettingItem;
