/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './CardLink.scss';

class CardLink extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li>
				<a
					href="/"
					className="card-list__link"
					aria-label={this.props.linkAria}
				>
					<div className="card-list__icon-container">
						<i className={this.props.linkIcon + ' card-list__icons'}></i>
					</div>
				</a>
			</li>
		);
	}
}

export default CardLink;
