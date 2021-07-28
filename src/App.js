import React, { Component } from "react";
import Dice from "./Components/Dice/Dice";
import Plate from "./Components/Plate/Plate";

import "./App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			stableGreen: [1, 2, 3, 4],
			pawnsGreen: ["stable-green", "stable-green", "stable-green", "stable-green"],
			stableRed: [1, 2, 3, 4],
			pawnsRed: ["stable-red", "stable-red", "stable-red", "stable-red"],
			stableYellow: [1, 2, 3, 4],
			pawnsYellow: ["stable-yellow", "stable-yellow", "stable-yellow", "stable-yellow"],
			stableBlue: [1, 2, 3, 4],
			pawnsBlue: ["stable-blue", "stable-blue", "stable-blue", "stable-blue"],
			playerDirection: ["green", "red", "blue", "yellow"],
			playerToPlay: 0,
			diceValue: 1,
		};
	}

	tossDice = (dieOneValue) => {
		let playerToPlayTemp = 0;
		if (this.state.playerToPlay !== 3) {
			playerToPlayTemp = this.state.playerToPlay + 1;
		}
		this.setState({
			diceValue: dieOneValue,
			playerToPlay: playerToPlayTemp,
		});
		if (dieOneValue === 6) {
			console.log("Leave the stable");
		}
	};

	render() {
		return (
			<>
				<h1>Horse Game</h1>
				<h3>Player {this.state.playerDirection[this.state.playerToPlay]} play</h3>
				<div className="App flex">
					<Dice diceValue={this.state.diceValue} tossDice={this.tossDice} />
					<Plate
						stableGreen={this.state.stableGreen}
						stableBlue={this.state.stableBlue}
						stableRed={this.state.stableRed}
						stableYellow={this.state.stableYellow}
					/>
				</div>
			</>
		);
	}
}
