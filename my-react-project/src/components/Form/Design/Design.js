/* eslint-disable no-useless-constructor */
import './Design.scss';

const Design = (props) => {
	const handlePalette = (ev) => {
		const inputPalette = ev.target.value;
		props.sendPalette(inputPalette);
	};

	return (
		<div className="colors">
			<h3 className="colors__title">Colores</h3>
			<div className="color__palets">
				<div className="color-palette-1">
					<input
						className="input1"
						type="radio"
						id="color-palette-1"
						name="color"
						value="palette-green"
            onChange={handlePalette}
            checked={props.palette === "palette-green" ? true : false}
					/>
					<div className="palette1-1"></div>
					<div className="palette1-2"></div>
					<div className="palette1-3"></div>
				</div>
				<div className="color-palette-2">
					<input
						className="input2"
						type="radio"
						id="color-palette-2"
						name="color"
						value="palette-red"
						onChange={handlePalette}
						checked={props.palette === "palette-red" ? true : false}
					/>
					<div className="palette2-1"></div>
					<div className="palette2-2"></div>
					<div className="palette2-3"></div>
				</div>
				<div className="color-palette-3">
					<input
						className="input3"
						type="radio"
						id="color-palette-3"
						name="color"
						value="palette-grey"
            onChange={handlePalette}
            checked={props.palette === "palette-grey" ? true : false}
					/>
					<div className="palette3-1"></div>
					<div className="palette3-2"></div>
					<div className="palette3-3"></div>
				</div>
			</div>
		</div>
	);
};

export default Design;
