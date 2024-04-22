function solution(a) {
	const n = a.length;

	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			const temp = a[i][j];
			a[i][j] = a[j][i];
			a[j][i] = temp;
		}
	}
	for (let i of a) {
		i.reverse();
	}
}

// solution = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())

const a = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

rotateImage(a);

console.log(a);
