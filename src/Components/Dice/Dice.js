import React, { Component } from "react";
import "./Dice.css";

export default class Dice extends Component {
	toss = () => {
		let dieOneValue = Math.floor(Math.random() * 6 + 1);
		this.props.tossDice(dieOneValue);
	};

	diceRender = () => {
		console.log("test", this.props.diceValue);
		if (this.props.diceValue === 1) {
			console.log("dice 1");
			return (
				<div className="dice flex">
					<div className="dot"></div>
				</div>
			);
		} else if (this.props.diceValue === 2) {
			return (
				<div className="dice flex">
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
			);
		} else if (this.props.diceValue === 3) {
			return (
				<div className="dice dice-three flex">
					<div className="flex-start">
						<div className="dot"></div>
					</div>
					<div className="middle">
						<div className="dot"></div>
					</div>
					<div className="flex-end">
						<div className="dot"></div>
					</div>
				</div>
			);
		} else if (this.props.diceValue === 4) {
			return (
				<div className="dice flex space-around">
					<div className="flex flex-column space-around stretch">
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					<div className="flex flex-column space-around stretch">
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
				</div>
			);
		} else if (this.props.diceValue === 5) {
			return (
				<div className="dice flex">
					<div className="flex flex-column space-around stretch">
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					<div className="dot"></div>
					<div className="flex flex-column space-around stretch">
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
				</div>
			);
		} else if (this.props.diceValue === 6) {
			return (
				<div className="dice  flex">
					<div className="flex space-around stretch">
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					<div className="flex space-around stretch">
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="toss-dice flex">
				{this.diceRender()}
				<button onClick={this.toss}>Throw</button>
			</div>
		);
	}
}
