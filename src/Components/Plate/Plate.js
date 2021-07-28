import React, { Component } from "react";
import "./Plate.css";

export default class Plate extends Component {
	render() {
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
							.
						</td>
						<td className="red" id="red-2"></td>
						<td className="rounded red" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-red">
								{this.props.stableGreen.map((pawnStable) => (
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
						<td className="green">&nbsp;</td>
						<td>5</td>
						<td className="red">&nbsp;</td>
					</tr>
					<tr>
						<td className="green">&nbsp;</td>
						<td className="green">&nbsp;</td>
						<td className="green">&nbsp;</td>
						<td className="green">&nbsp;</td>
						<td className="green">&nbsp;</td>
						<td className="green">&nbsp;</td>
						<td className="green">&nbsp;</td>
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
						<td className="green">.</td>
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
						<td className="blue">.</td>
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
								{this.props.stableGreen.map((pawnStable) => (
									<div className="pawn yellow m-25" id={`pawn-yellow-${pawnStable}`}></div>
								))}
							</div>
						</td>
						<td className="yellow">&nbsp;</td>
						<td>5</td>
						<td className="blue">&nbsp;</td>
						<td className="rounded blue" colSpan="6" rowSpan="6">
							<div className="stable" id="stable-blue">
								{this.props.stableGreen.map((pawnStable) => (
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
						<td className="yellow">.</td>
						<td className="blue">&nbsp;</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
