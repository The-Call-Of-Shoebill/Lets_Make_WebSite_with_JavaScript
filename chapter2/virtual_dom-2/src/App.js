import React, { Component } from 'react';
import InputNumber from './InputNumber';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value1: 128,
			value2: 128,
			value3: 128,
			hexValue: this.translateToHex(128, 128, 128)
		};
	}

	translateToHex = (decimal_r, decimal_g, decimal_b) => {
		const hex_r = ('0' + Number(decimal_r).toString(16)).slice(-2);
		const hex_g = ('0' + Number(decimal_g).toString(16)).slice(-2);
		const hex_b = ('0' + Number(decimal_b).toString(16)).slice(-2);
	
		return hex_r + hex_g + hex_b;
	}

	changeHexValue = () => {
		this.setState (
			(state) => ({
				hexValue: state.hexValue = this.translateToHex(this.state.value1, this.state.value2, this.state.value3)
			})
		);
	}

	onChange = (e) => {
		if ( e.target.id == 1 ) {
			this.setState (
				(state) => ({
					value1: state.value1 = e.target.value
				})
			);
		} else if ( e.target.id == 2 ) {
			this.setState (
				(state) => ({
					value2: state.value2 = e.target.value
				})
			);
		} else if ( e.target.id == 3 ) {
			this.setState (
				(state) => ({
					value3: state.value3 = e.target.value
				})
			);
		}

		this.changeHexValue();
	}

	render() {
		return (
			<div className="App">
				<div className="rgb_screen"
					style = {{
						backgroundColor: '#' + this.state.hexValue
					}}
				></div>
	
				<div className="rgb_values_hex">{this.state.hexValue}</div>
	
				<div className="rgb_values_decimal">R:{this.state.value1}, G:{this.state.value2}, B:{this.state.value3}</div>
	
				<div className="inputNumbers">
					<InputNumber id={"1"} value={this.state.value1} onChange={this.onChange} />
					<InputNumber id={"2"} value={this.state.value2} onChange={this.onChange} />
					<InputNumber id={"3"} value={this.state.value3} onChange={this.onChange} />
				</div>
			</div>
		);
	}
}

export default App;