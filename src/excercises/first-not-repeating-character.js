function firstNotRepeatingCharacter(s) {
	let map = new Map();
	for (i of s) {
		console.log("i", i);
		if (map.has(i)) {
			map.set(i, map.get(i) + 1);
			console.log("map has", map);
		} else {
			console.log("map hasn't", map.set(i));
			map.set(i, 1);
		}
	}
	for (i of s) {
		if (map.get(i) === 1) {
			console.log("i", i);
			return i;
		}
	}
	return -1;
}

console.log(firstNotRepeatingCharacter("abacabad"));


