function solution(matrix) {
	var total = 0;

	// Navigate each column of rooms
	// i = current column, j = current floor in column
	for (var i = 0; i < matrix[0].length; i++) {
		for (var j = 0; j < matrix.length; j++) {
			if (matrix[j][i] === 0) {
				console.log("matrix", matrix[j][i]);
				// This room is haunted, so we don't care about the rooms below it.
				// Continue to the next column of rooms
				break;
			}
      
			total += matrix[j][i];
      console.log(total)
		}
	}
	console.log(total);
	return total;
}

const matrix = [
	[1, 1, 1, 0],
	[0, 5, 0, 1],
	[2, 1, 3, 10],
];

solution(matrix);
