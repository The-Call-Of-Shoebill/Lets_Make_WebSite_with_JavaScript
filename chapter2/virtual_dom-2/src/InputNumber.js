import React, { Component } from 'react';

class InputNumber extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
	}

	checkNumber = (e) => {
		const targetNumber = e.target.value;

		if ( targetNumber > 255 ) {
			this.setState (
				(state) => ({
					num: state.num = 255
				})
			);
			e.target.value = 255;
		}
		else if ( targetNumber < 0 ) {
			this.setState (
				(state) => ({
					num: state.num = 0
				})
			);
			e.target.value = 0;
		} else {
			this.setState (
				(state) => ({
					num: state.num = targetNumber
				})
			);
		}

		this.props.onChange(e);
	}

	render() {
		return (
			<>
				<input id={this.props.id} className="number-style" type="number" onChange={this.checkNumber} value={this.props.value} />
			</>
		);
	}
}

export default InputNumber;