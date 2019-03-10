import React, { Component } from 'react';
import './App.css';

class DogeMeme extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topTxt: 'TOP TEXT',
			bottomTxt: 'BOTTOM TEXT'
		};
	}

	handleTextChange(value, prop) {
		this.setState({
			[prop]: value.toUpperCase()
		})
	}

	handleClick() {
		document.getElementsByTagName('input')[0].value = '';
		document.getElementsByTagName('input')[1].value = '';

		this.setState({
			topTxt: 'TOP TEXT',
			bottomTxt: 'BOTTOM TEXT'
		})
	}

	render() {
		return (
			<div>
				<div className='inputs'>
					<input placeholder='top text' onChange={(e)=> this.handleTextChange(e.target.value, 'topTxt')}/>
					<input placeholder='bottom text' onChange={(e)=> this.handleTextChange(e.target.value, 'bottomTxt')}/>
				</div>
				<div className='doge-bg flex col justify-content-between align-items-center'>
					<p className="txt">{this.state.topTxt}</p>
					<p className="txt">{this.state.bottomTxt}</p>
				</div>
				<div className="btn">
					<button onClick={() => this.handleClick()}>RESET</button>
				</div>
			</div>
		);
	}
}

export default DogeMeme;
