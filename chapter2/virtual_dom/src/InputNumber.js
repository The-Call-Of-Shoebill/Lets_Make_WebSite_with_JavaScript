import React from 'react';

const InputNumber = (props) => {
	const [num, setNum] = React.useState(props.value);

	const checkNumber = (e) => {
		const targetNumber = e.target.value;

		if ( targetNumber > 255 ) {
			setNum(255);
			e.target.value = 255;
		}
		else if ( targetNumber < 0 ) {
			setNum(0);
			e.target.value = 0;
		} else {
			setNum(targetNumber);
		}

		props.onChange(e);
	}

	return (
		<>
			<input id={props.id} className="number-style" type="number" onChange={checkNumber} value={num} />
		</>
	);
}

export default InputNumber;
