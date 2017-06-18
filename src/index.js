import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { calculateWinner, getMoveLocation } from './components/util';

/**
 * Square 方格按钮
 * @param {[type]} props [description]
 */
function Square(props) {
	return (
		<button className={`square ${props.winner? " winner":""}`} onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	renderSquare(i) {
		return (
			<Square 
				key={i}
				value={this.props.squares[i]}
				winner={this.props.results.indexOf(i) !== -1}
				onClick={() => this.props.onClick(i)} />
		);
	}

	render() {
		// 三行三列
		const group = [1,2,3];

		return (
			<div>
				{group.map((row) => {
					return (
						<div 
							key={row}
							className="board-row">
							{group.map((col) => this.renderSquare(row * 3 + col - 4))}
						</div>
					);
				})}
			</div>
		);
	}
}

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}], // 存储历史棋盘
			stepNumber: 0, // 当前步数
			xIsNext: true, // 下一个出棋者是否为 X
			steps: [] // 落棋先后顺序
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1),
			current = history[history.length - 1],
			squares = current.squares.slice(),
			steps = this.state.steps.slice(0, this.state.stepNumber + 1);

		const temp = calculateWinner(current.squares),
			winner = temp['winner']

		// 如果输赢已定那么忽视点击操作
		if (winner || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';

		this.setState({
			history: history.concat([{
				squares: squares
			}]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
			steps: steps.concat(i)
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) ? !this.state.xFirst:this.state.xFirst,
			steps: this.state.steps.slice(0, step+1),
		});
	}

	sortMoves() {
		const {steps} = this.state,
			stepsLen = steps.length;

		let history = [{
			squares: Array(9).fill(null),
		}],
			stepres = [],
			temp = Array(9).fill(null);
		for (let i = stepsLen - 1; i >= 0; i--) {
			temp[ steps[i] ] = (history.length % 2) ? 'X':'O';
			stepres.push( steps[i] );
			history.push({
				squares: temp.slice()
			});
		}

		this.setState({
			history: history,
			steps: stepres,
		})
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const temp = calculateWinner(current.squares),
			winner = temp['winner'],
			wsquares = temp['wsquares'];

		const moves = history.map((step, move) => {
			const mlocation = getMoveLocation(move),
				desc = move ?
				'Move #' + mlocation :
				'Game start';
			return (
				<li key={move}>
					<a href="#" 
						onClick={() => this.jumpTo(move)} 
						className={this.state.stepNumber === move? 'strengthen':'normal'}>{desc}</a>
				</li>
			);
		});

		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		return (
			<div className="game">
				<div className="game-board">
					<Board 
						squares={current.squares}
						results={wsquares}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status} | <a href="#" onClick={() => this.sortMoves()}>Sort Moves</a></div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
