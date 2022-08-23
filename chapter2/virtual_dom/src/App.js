import React from 'react';
import InputNumber from './InputNumber';
import './App.css';

const translateToHex = (decimal_r, decimal_g, decimal_b) => {
	const hex_r = ('0' + Number(decimal_r).toString(16)).slice(-2);
	const hex_g = ('0' + Number(decimal_g).toString(16)).slice(-2);
	const hex_b = ('0' + Number(decimal_b).toString(16)).slice(-2);

	return hex_r + hex_g + hex_b;
}

const App = () => {
	const [value1, setValue1] = React.useState(128);
	const [value2, setValue2] = React.useState(128);
	const [value3, setValue3] = React.useState(128);
	const [hexValue, setHexValue] = React.useState(translateToHex(128, 128, 128));

	const changeHexValue = () => {
		setHexValue(translateToHex(value1, value2, value3));
	} 

	const onChange = (e) => {
		if ( e.target.id == 1 ) {
			setValue1(e.target.value);
		} else if ( e.target.id == 2 ) {
			setValue2(e.target.value);
		} else if ( e.target.id == 3 ) {
			setValue3(e.target.value);
		}

		changeHexValue();
	}

	return (
		<div className="App">
			<div className="rgb_screen"
				style = {{
					backgroundColor: '#' + hexValue
				}}
			></div>

			<div className="rgb_values_hex">{hexValue}</div>

			<div className="rgb_values_decimal">R:{value1}, G:{value2}, B:{value3}</div>

			<div className="inputNumbers">
				<InputNumber id={"1"} value={value1} onChange={onChange} />
				<InputNumber id={"2"} value={value2} onChange={onChange} />
				<InputNumber id={"3"} value={value3} onChange={onChange} />
			</div>
		</div>
	);
}

export default App;
