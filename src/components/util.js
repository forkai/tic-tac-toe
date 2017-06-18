/**
 * util.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-06-18 16:14:05
 * @version $Id$
 */

/**
 * 计算输赢，返回 null 表示结果未定
 * @param  {[type]} squares [description]
 * @return {[type]}         [description]
 */
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	// 结果，winner存储获胜方代表数字， wsquare代表获胜方占据的网格编号
	let res = {
		'winner': null,
		'wsquares': []
	}

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			res['winner'] = squares[a];
			res['wsquares'] = [a, b, c];
			break;
		}
	}
	return res;
}

/**
 * 计算移动位置坐标，并以字符串的形式返回
 * @param  {[type]} move [description]
 * @return {[type]}      [description]
 */
function getMoveLocation(move) {
	return `[${Number.parseInt(move/3, 10)+1},${move%3+1}]`;
}

export {
	calculateWinner,
	getMoveLocation
}