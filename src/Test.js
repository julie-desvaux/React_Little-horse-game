import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [stableGreen, setStableGreen] = useState("4");
	const [stableRed, setStableRed] = useState("4");
	const [stableYellow, setStableYellow] = useState("4");
	const [stableBlue, setStableBlue] = useState("4");
	const [horseGreen1, setHorseGreen1] = useState("stable-green");
	const [horseGreen2, setHorseGreen2] = useState("stable-green");
	const [horseGreen3, setHorseGreen3] = useState("stable-green");
	const [horseGreen4, setHorseGreen4] = useState("stable-green");

	return (
		<>
			<h1>Horse Game</h1>
			<div className="App">
				<div className="throw-dice">
					<div className="dice"></div>
					<button>Throw</button>
				</div>
				<table>
					<tbody>
						<tr>
							<td className="rounded green" colSpan="6" rowSpan="6">
								<div className="stable" id="stable-green"></div>
							</td>
							<td className="green" id="green-14"></td>
							<td className="red" id="red-1">
								.
							</td>
							<td className="red" id="red-2"></td>
							<td className="rounded red" colSpan="6" rowSpan="6">
								<div className="stable" id="stable-red"></div>
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
								<div className="stable" id="stable-yellow"></div>
							</td>
							<td className="yellow">&nbsp;</td>
							<td>5</td>
							<td className="blue">&nbsp;</td>
							<td className="rounded blue" colSpan="6" rowSpan="6">
								<div className="stable" id="stable-blue"></div>
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
			</div>
		</>
	);
}

export default App;
