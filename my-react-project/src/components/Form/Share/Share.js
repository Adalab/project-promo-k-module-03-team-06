/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

import './Share.scss';

class Share extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className="create-btn">
					<button type="button" className="create-btn__button">
						<i className="far fa-address-card create-btn__icon"></i>
						Crear tarjeta
					</button>
				</div>
				<div className="success hidden">
					<p className="success__text">
						La tarjeta ha sido creada:
					</p>
					<a
						href=""
						className="success__link"
						target="_blank"
					></a>
					<a
						href=""
						title="Link para compartir en twitter"
						target="_blank"
						className="success__link--twitter"
					>
						<i
							className="fab fa-twitter success__icon"
							aria-hidden="true"
							aria-label="Compartir en Twitter"
						></i>
						Compartir en twitter
					</a>
				</div>
			</>
		);
	}
}

export default Share;
