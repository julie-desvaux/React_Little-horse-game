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
			playerDirection: ["green", "red", "blue", "yellow"],
			playerToPlay: 0,
			diceValue: 1,
		};
	}

	tossDice = (dieOneValue) => {
		if (dieOneValue === 6) {
			if (this.state.stables[this.state.playerToPlay].length === 4) {
				this.firstHorseLeaveStable();
			} else {
				this.playHorseNormal();
			}
		} else {
			if (this.state.stables[this.state.playerToPlay].length !== 4) {
				this.playHorseNormal();
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
		let pawnTemp = [...this.state.pawns];
		let stablesTemp = [...this.state.stables];

		if (this.state.playerToPlay === 0 && this.state.pawns[0][0] === "stable") {
			pawnTemp[0].splice(0, 1, "green-2");
			stablesTemp[0].splice(0, 1);
		} else if (this.state.playerToPlay === 1 && this.state.pawns[1][0] === "stable") {
			pawnTemp[1].splice(0, 1, "red-2");
			stablesTemp[1].splice(0, 1);
		} else if (this.state.playerToPlay === 2 && this.state.pawns[2][0] === "stable") {
			pawnTemp[2].splice(0, 1, "blue-2");
			stablesTemp[2].splice(0, 1);
		} else if (this.state.playerToPlay === 3 && this.state.pawns[3][0] === "stable") {
			pawnTemp[3].splice(0, 1, "yellow-2");
			stablesTemp[3].splice(0, 1);
		}

		this.setState({
			stables: [...stablesTemp],
		});
	};

	playHorseNormal = () => {
		console.log(this.state.playerToPlay);
		if (this.state.playerToPlay === 0 && this.state.pawns[0][0] !== "stable") {
			let newPlacementPawn = [...this.state.pawns][0][0].split("-");
			if (parseInt(newPlacementPawn[1]) + this.state.diceValue <= 12) {
				newPlacementPawn.splice(1, 1, parseInt(newPlacementPawn[1]) + this.state.diceValue);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][0];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...newPawns], [...this.state.pawns[1]], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "green") {
				newPlacementPawn.splice(0, 1, "red");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][0];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...newPawns], [...this.state.pawns[1]], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "red") {
				newPlacementPawn.splice(0, 1, "blue");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][0];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...newPawns], [...this.state.pawns[1]], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "blue") {
				newPlacementPawn.splice(0, 1, "yellow");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][0];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...newPawns], [...this.state.pawns[1]], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			}
		}
		if (this.state.playerToPlay === 1 && this.state.pawns[1][0] !== "stable") {
			let newPlacementPawn = [...this.state.pawns][1][0].split("-");
			if (parseInt(newPlacementPawn[1]) + this.state.diceValue <= 12) {
				newPlacementPawn.splice(1, 1, parseInt(newPlacementPawn[1]) + this.state.diceValue).join("-");
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][1];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...newPawns], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "red") {
				newPlacementPawn.splice(0, 1, "blue");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][1];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...newPawns], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "blue") {
				newPlacementPawn.splice(0, 1, "yellow");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][1];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...newPawns], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "yellow") {
				newPlacementPawn.splice(0, 1, "green");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][1];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...newPawns], [...this.state.pawns[2]], [...this.state.pawns[3]]],
				});
			}
		}
		if (this.state.playerToPlay === 2 && this.state.pawns[2][0] !== "stable") {
			let newPlacementPawn = [...this.state.pawns][2][0].split("-");
			if (parseInt(newPlacementPawn[1]) + this.state.diceValue <= 12) {
				newPlacementPawn.splice(1, 1, parseInt(newPlacementPawn[1]) + this.state.diceValue).join("-");
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][2];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...newPawns], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "blue") {
				newPlacementPawn.splice(0, 1, "yellow");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][2];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...newPawns], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "yellow") {
				newPlacementPawn.splice(0, 1, "green");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][2];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...newPawns], [...this.state.pawns[3]]],
				});
			} else if (newPlacementPawn[0] === "green") {
				newPlacementPawn.splice(0, 1, "red");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][2];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...newPawns], [...this.state.pawns[3]]],
				});
			}
		}
		if (this.state.playerToPlay === 3 && this.state.pawns[3][0] !== "stable") {
			let newPlacementPawn = [...this.state.pawns][3][0].split("-");
			if (parseInt(newPlacementPawn[1]) + this.state.diceValue <= 12) {
				newPlacementPawn.splice(1, 1, parseInt(newPlacementPawn[1]) + this.state.diceValue).join("-");
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][3];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...this.state.pawns[2]], [...newPawns]],
				});
			} else if (newPlacementPawn[0] === "yellow") {
				newPlacementPawn.splice(0, 1, "green");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][3];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...this.state.pawns[2]], [...newPawns]],
				});
			} else if (newPlacementPawn[0] === "green") {
				newPlacementPawn.splice(0, 1, "red");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][3];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...this.state.pawns[2]], [...newPawns]],
				});
			} else if (newPlacementPawn[0] === "red") {
				newPlacementPawn.splice(0, 1, "blue");
				let newIndex = parseInt(newPlacementPawn[1]) + this.state.diceValue - 12;
				newPlacementPawn.splice(1, 1, newIndex);
				console.log(newPlacementPawn);
				newPlacementPawn = newPlacementPawn.join("-");
				let newPawns = [...this.state.pawns][3];
				newPawns.splice(0, 1, newPlacementPawn);
				this.setState({
					pawns: [[...this.state.pawns[0]], [...this.state.pawns[1]], [...this.state.pawns[2]], [...newPawns]],
				});
			}
		}
	};

	render() {
		return (
			<>
				<h1>Horse Game</h1>
				<h3>Player {this.state.playerDirection[this.state.playerToPlay]} play</h3>
				<div className="App flex">
					<Dice diceValue={this.state.diceValue} tossDice={this.tossDice} />
					<Plate stables={this.state.stables} pawns={this.state.pawns} />
				</div>
			</>
		);
	}
}
