/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import menuIcon from '../../../images/fridacolor.png';
import './FormMenu.scss';

class FormMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: 'hidden',
			// arrowUp: '',
		};

		this.handleCollapse = this.handleCollapse.bind(this);
	}

	handleCollapse() {
		this.setState(() => {
			let isCollapse;
			// let arrowUp;
			if (this.state.collapse === 'hidden') {
				isCollapse = '';
				// arrowUp = 'arrow-up';
			} else {
				isCollapse = 'hidden';
				// arrowUp = '';
			}
			return { collapse: isCollapse };
		});
	}

	render() {
		return (
			<div className={this.state.collapse}>
				<div onClick={this.handleCollapse}>
					<legend className="legend">
						<i className={this.props.fieldsetIcon + ' legend__icon'}></i>
						<h2 className="legend__title">{this.props.fieldsetTitle}</h2>
						<img
							src={menuIcon}
							alt="Menu"
							className="legend__arrow"
							aria-label="Desplegar"
						/>
					</legend>
				</div>
				<div className="hide">{this.props.children}</div>
			</div>
		);
	}
}

export default FormMenu;
