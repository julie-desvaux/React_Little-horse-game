import React, { Component } from "react";
import Dice from "./Components/Dice/Dice";
import Plate from "./Components/Plate/Plate";

import "./App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			stableGreen: [1, 2, 3, 4],
			pawns: [
				["stable-green", "stable-green", "stable-green", "stable-green"],
				["stable-red", "stable-red", "stable-red", "stable-red"],
				["stable-yellow", "stable-yellow", "stable-yellow", "stable-yellow"],
				["stable-blue", "stable-blue", "stable-blue", "stable-blue"],
			],
			stableRed: [1, 2, 3, 4],
			stableYellow: [1, 2, 3, 4],
			stableBlue: [1, 2, 3, 4],
			playerDirection: ["green", "red", "blue", "yellow"],
			playerToPlay: 0,
			diceValue: 1,
		};
	}

	tossDice = (dieOneValue) => {
		if (dieOneValue === 6) {
			if (this.state.playerToPlay === 0) {
				let pawnTemp = [...this.state.pawns];
				pawnTemp[0].splice(0, 1, "green-1");
				this.setState({
					stableGreen: [2, 3, 4],
				});
			} else if (this.state.playerToPlay === 1) {
				let pawnTemp = [...this.state.pawns];
				pawnTemp[1].splice(0, 1, "red-1");
				this.setState({
					stableRed: [2, 3, 4],
				});
			} else if (this.state.playerToPlay === 2) {
				let pawnTemp = [...this.state.pawns];
				pawnTemp[2].splice(0, 1, "blue-1");
				this.setState({
					stableBlue: [2, 3, 4],
				});
			} else if (this.state.playerToPlay === 3) {
				let pawnTemp = [...this.state.pawns];
				pawnTemp[3].splice(0, 1, "yellow-1");
				this.setState({
					stableYellow: [2, 3, 4],
				});
			}
		}

		let playerToPlayTemp = 0;
		if (this.state.playerToPlay !== 3) {
			playerToPlayTemp = this.state.playerToPlay + 1;
		}

		this.setState({
			diceValue: dieOneValue,
			playerToPlay: playerToPlayTemp,
		});
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
						pawns={this.state.pawns}
					/>
				</div>
			</>
		);
	}
}
