import React, { Component } from "react";
import "./Plate.css";

export default class Plate extends Component {
	findIndexOf = (test) => {
		let findIndex = false;
		for (let i = 0; i < 4; i++) {
			for (let j = 0; i < 4; i++) {
				if (this.props.pawns[i][j] === test) {
					findIndex = true;
				}
			}
		}
		return findIndex;
	};

	render() {
		console.log("pawns", this.props.pawns);
		return (
			<table>
				<tbody>
					<tr>
						<td className="rounded green" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-green">
								{this.props.stables[0].map((pawnStable) => (
									<div className="pawn green m-25" id={`pawn-green-${pawnStable}`}></div>
								))}
							</div>
						</td>
						<td className="invisible"></td>
						<td className="red" id="red-1">
							{this.findIndexOf("red-1") ? (
								<div
									className={
										this.props.pawns[0].indexOf("red-1") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-1") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-1") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							) : (
								<p>.</p>
							)}
						</td>
						<td className="invisible"></td>
						<td className="rounded red" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-red">
								{this.props.stables[1].map((pawnStable) => (
									<div className="pawn red m-25" id={`pawn-reds-${pawnStable}`}></div>
								))}
							</div>
						</td>
					</tr>
					<tr>
						<td className="green" id="green-12">
							{this.findIndexOf("green-12") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-12") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-12") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-12") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>1</td>
						<td className="red">
							{this.findIndexOf("red-2") ? (
								<div
									className={
										this.props.pawns[0].indexOf("red-2") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-2") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-2") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							) : (
								<p>D</p>
							)}
						</td>
					</tr>
					<tr>
						<td className="green" id="green-11">
							{this.findIndexOf("green-11") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-11") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-11") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-11") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>2</td>
						<td className="red">
							{this.findIndexOf("red-3") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-3") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-3") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-3") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="green" id="green-10">
							{this.findIndexOf("green-10") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-10") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-10") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-10") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>3</td>
						<td className="red">
							{this.findIndexOf("red-4") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-4") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-4") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-4") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="green" id="green-9">
							{this.findIndexOf("green-9") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-9") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-9") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-9") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>4</td>
						<td className="red">
							{this.findIndexOf("red-5") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-5") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-5") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-5") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="green" id="green-8">
							{this.findIndexOf("green-8") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-8") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-8") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-8") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>5</td>
						<td className="red">
							{this.findIndexOf("red-6") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-6") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-6") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-6") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="invisible"></td>
						<td className="green" id="green-2">
							{this.findIndexOf("green-2") ? (
								<div
									className={
										this.props.pawns[0].indexOf("green-2") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-2") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-2") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							) : (
								<p>D</p>
							)}
						</td>
						<td className="green" id="green-3">
							{this.findIndexOf("green-3") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-3") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-3") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-3") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="green" id="green-4">
							{this.findIndexOf("green-4") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-4") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-4") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-4") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="green" id="green-5">
							{this.findIndexOf("green-5") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-5") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-5") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-5") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="green" id="green-6">
							{this.findIndexOf("green-6") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-6") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-6") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-6") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="green" id="green-7">
							{this.findIndexOf("green-7") && (
								<div
									className={
										this.props.pawns[0].indexOf("green-7") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-7") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-7") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>6</td>
						<td className="red">
							{this.findIndexOf("red-7") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-7") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-7") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-7") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="red">
							{this.findIndexOf("red-8") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-8") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-8") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-8") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="red">
							{this.findIndexOf("red-9") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-9") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-9") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-9") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="red">
							{this.findIndexOf("red-10") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-10") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-10") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-10") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="red">
							{this.findIndexOf("red-11") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-11") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-11") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-11") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="red">
							{this.findIndexOf("red-12") && (
								<div
									className={
										this.props.pawns[0].indexOf("red-12") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("red-12") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("red-12") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="green" id="green-1">
							{this.findIndexOf("green-1") ? (
								<div
									className={
										this.props.pawns[0].indexOf("green-1") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("green-1") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("green-1") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							) : (
								<p>.</p>
							)}
						</td>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>6</td>
						<td>*</td>
						<td>6</td>
						<td>5</td>
						<td>4</td>
						<td>3</td>
						<td>2</td>
						<td>1</td>
						<td className="blue">
							{this.findIndexOf("blue-1") ? (
								<div
									className={
										this.props.pawns[0].indexOf("blue-1") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-1") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-1") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
									id={`pawn-reds-1`}
								></div>
							) : (
								<p>.</p>
							)}
						</td>
					</tr>
					<tr>
						<td className="invisible"></td>
						<td className="yellow">
							{this.findIndexOf("yellow-12") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-12") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-12") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-12") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="yellow">
							{this.findIndexOf("yellow-11") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-11") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-11") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-11") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="yellow">
							{this.findIndexOf("yellow-10") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-10") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-10") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-10") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="yellow">
							{this.findIndexOf("yellow-9") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-9") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-9") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-9") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="yellow">
							{this.findIndexOf("yellow-8") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-8") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-8") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-8") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="yellow">
							{this.findIndexOf("yellow-7") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-7") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-7") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-7") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>6</td>
						<td className="blue">
							{this.findIndexOf("blue-7") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-7") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-7") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-7") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="blue">
							{this.findIndexOf("blue-6") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-6") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-6") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-6") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="blue">
							{this.findIndexOf("blue-5") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-5") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-5") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-5") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="blue">
							{this.findIndexOf("blue-4") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-4") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-4") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-4") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="blue">
							{this.findIndexOf("blue-3") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-3") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-3") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-3") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="blue">
							{this.findIndexOf("blue-2") ? (
								<div
									className={
										this.props.pawns[0].indexOf("blue-2") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-2") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-2") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							) : (
								<p>D</p>
							)}
						</td>
					</tr>
					<tr>
						<td className="rounded yellow" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-yellow">
								{this.props.stables[3].map((pawnStable) => (
									<div className="pawn yellow m-25" id={`pawn-yellow-${pawnStable}`}></div>
								))}
							</div>
						</td>
						<td className="yellow">
							{this.findIndexOf("yellow-6") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-6") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-6") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-6") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>5</td>
						<td className="blue">
							{this.findIndexOf("blue-8") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-8") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-8") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-8") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td className="rounded blue" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-blue">
								{this.props.stables[2].map((pawnStable) => (
									<div className="pawn blue m-25" id={`pawn-blue-${pawnStable}`}></div>
								))}
							</div>
						</td>
					</tr>
					<tr>
						<td className="yellow">
							{this.findIndexOf("yellow-5") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-5") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-5") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-5") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>4</td>
						<td className="blue">
							{this.findIndexOf("blue-9") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-9") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-9") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-9") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="yellow">
							{this.findIndexOf("yellow-4") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-4") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-4") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-4") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>3</td>
						<td className="blue">
							{this.findIndexOf("blue-10") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-10") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-10") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-10") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="yellow">
							{this.findIndexOf("yellow-3") && (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-3") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-3") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-3") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
						<td>2</td>
						<td className="blue">
							{this.findIndexOf("blue-11") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-11") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-11") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-11") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="yellow">
							{this.findIndexOf("yellow-2") ? (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-2") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-2") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-2") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							) : (
								<p>D</p>
							)}
						</td>
						<td>1</td>
						<td className="blue">
							{this.findIndexOf("blue-1") && (
								<div
									className={
										this.props.pawns[0].indexOf("blue-1") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("blue-1") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("blue-1") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
								></div>
							)}
						</td>
					</tr>
					<tr>
						<td className="invisible"></td>
						<td className="yellow">
							{this.findIndexOf("yellow-1") ? (
								<div
									className={
										this.props.pawns[0].indexOf("yellow-1") !== -1
											? "pawn green"
											: this.props.pawns[1].indexOf("yellow-1") !== -1
											? "pawn red"
											: this.props.pawns[2].indexOf("yellow-1") !== -1
											? "pawn blue"
											: "pawn yellow"
									}
									id={`pawn-reds-1`}
								></div>
							) : (
								<p>.</p>
							)}
						</td>
						<td className="invisible"></td>
					</tr>
				</tbody>
			</table>
		);
	}
}
