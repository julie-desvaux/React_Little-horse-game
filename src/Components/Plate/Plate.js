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
								{this.props.stableGreen.map((pawnStable) => (
									<div className="pawn green m-25" id={`pawn-green-${pawnStable}`}></div>
								))}
							</div>
						</td>
						<td className="green" id="green-14"></td>
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
									id={`pawn-reds-1`}
								></div>
							) : (
								<p>.</p>
							)}
						</td>
						<td className="red" id="red-2"></td>
						<td className="rounded red" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-red">
								{this.props.stableRed.map((pawnStable) => (
									<div className="pawn red m-25" id={`pawn-reds-${pawnStable}`}></div>
								))}
							</div>
						</td>
					</tr>
					<tr>
						<td className="green" id="green-13">
							&nbsp;
						</td>
						<td>1</td>
						<td className="red">&nbsp;</td>
					</tr>
					<tr>
						<td className="green" id="green-12">
							&nbsp;
						</td>
						<td>2</td>
						<td className="red">&nbsp;</td>
					</tr>
					<tr>
						<td className="green" id="green-11">
							&nbsp;
						</td>
						<td>3</td>
						<td className="red">&nbsp;</td>
					</tr>
					<tr>
						<td className="green" id="green-10">
							&nbsp;
						</td>
						<td>4</td>
						<td className="red">&nbsp;</td>
					</tr>
					<tr>
						<td className="green" id="green-9">
							&nbsp;
						</td>
						<td>5</td>
						<td className="red">&nbsp;</td>
					</tr>
					<tr>
						<td className="green" id="green-8">
							&nbsp;
						</td>
						<td className="green" id="green-7">
							&nbsp;
						</td>
						<td className="green" id="green-6">
							&nbsp;
						</td>
						<td className="green" id="green-5">
							&nbsp;
						</td>
						<td className="green" id="green-4">
							&nbsp;
						</td>
						<td className="green" id="green-3">
							&nbsp;
						</td>
						<td className="green" id="green-2">
							&nbsp;
						</td>
						<td>6</td>
						<td className="red">&nbsp;</td>
						<td className="red">&nbsp;</td>
						<td className="red">&nbsp;</td>
						<td className="red">&nbsp;</td>
						<td className="red">&nbsp;</td>
						<td className="red">&nbsp;</td>
						<td className="red">&nbsp;</td>
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
									id={`pawn-reds-1`}
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
						<td className="yellow">&nbsp;</td>
						<td className="yellow">&nbsp;</td>
						<td className="yellow">&nbsp;</td>
						<td className="yellow">&nbsp;</td>
						<td className="yellow">&nbsp;</td>
						<td className="yellow">&nbsp;</td>
						<td className="yellow">&nbsp;</td>
						<td>6</td>
						<td className="blue">&nbsp;</td>
						<td className="blue">&nbsp;</td>
						<td className="blue">&nbsp;</td>
						<td className="blue">&nbsp;</td>
						<td className="blue">&nbsp;</td>
						<td className="blue">&nbsp;</td>
						<td className="blue">&nbsp;</td>
					</tr>
					<tr>
						<td className="rounded yellow" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-yellow">
								{this.props.stableYellow.map((pawnStable) => (
									<div className="pawn yellow m-25" id={`pawn-yellow-${pawnStable}`}></div>
								))}
							</div>
						</td>
						<td className="yellow">&nbsp;</td>
						<td>5</td>
						<td className="blue">&nbsp;</td>
						<td className="rounded blue" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-blue">
								{this.props.stableRed.map((pawnStable) => (
									<div className="pawn blue m-25" id={`pawn-blue-${pawnStable}`}></div>
								))}
							</div>
						</td>
					</tr>
					<tr>
						<td className="yellow">&nbsp;</td>
						<td>4</td>
						<td className="blue">&nbsp;</td>
					</tr>
					<tr>
						<td className="yellow">&nbsp;</td>
						<td>3</td>
						<td className="blue">&nbsp;</td>
					</tr>
					<tr>
						<td className="yellow">&nbsp;</td>
						<td>2</td>
						<td className="blue">&nbsp;</td>
					</tr>
					<tr>
						<td className="yellow">&nbsp;</td>
						<td>1</td>
						<td className="blue">&nbsp;</td>
					</tr>
					<tr>
						<td className="yellow">&nbsp;</td>
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
						<td className="blue">&nbsp;</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
