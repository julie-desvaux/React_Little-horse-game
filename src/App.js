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
				["stable", "stable", "stable", "stable"],
				["stable", "stable", "stable", "stable"],
				["stable", "stable", "stable", "stable"],
				["stable", "stable", "stable", "stable"],
			],
			stables: [
				[1, 2, 3, 4],
				[1, 2, 3, 4],
				[1, 2, 3, 4],
				[1, 2, 3, 4],
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
			if (this.state.stables[this.state.playerToPlay].length === 4) {
				this.firstHorseLeaveStable();
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

	firstHorseLeaveStable = () => {
		if (this.state.playerToPlay === 0 && this.state.pawns[0][0] === "stable") {
			let pawnTemp = [...this.state.pawns];
			pawnTemp[0].splice(0, 1, "green-1");
			let stablesTemp = [...this.state.stables];
			stablesTemp[0].splice(0, 1);
			this.setState({
				stables: [...stablesTemp],
			});
		} else if (this.state.playerToPlay === 1 && this.state.pawns[1][0] === "stable") {
			let pawnTemp = [...this.state.pawns];
			pawnTemp[1].splice(0, 1, "red-1");
			let stablesTemp = [...this.state.stables];
			stablesTemp[0].splice(0, 1);
			this.setState({
				stables: [...stablesTemp],
			});
		} else if (this.state.playerToPlay === 2 && this.state.pawns[2][0] === "stable") {
			let pawnTemp = [...this.state.pawns];
			pawnTemp[2].splice(0, 1, "blue-1");
			let stablesTemp = [...this.state.stables];
			stablesTemp[0].splice(0, 1);
			this.setState({
				stables: [...stablesTemp],
			});
		} else if (this.state.playerToPlay === 3 && this.state.pawns[3][0] === "stable") {
			let pawnTemp = [...this.state.pawns];
			pawnTemp[3].splice(0, 1, "yellow-1");
			let stablesTemp = [...this.state.stables];
			stablesTemp[0].splice(0, 1);
			this.setState({
				stables: [...stablesTemp],
			});
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
						stables={this.state.stables}
						pawns={this.state.pawns}
					/>
				</div>
			</>
		);
	}
}
