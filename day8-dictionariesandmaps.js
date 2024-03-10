function processData(input) {
	//Enter your code here
	const lines = input.trim().split("\n");
	let queries = parseInt(lines[0]);

	const phoneBook = new Map();

	for (let i = 1; i <= queries; i++) {
		const [name, number] = lines[i].split(" ");
		phoneBook.set(name, number);
	}

	for (let j = queries + 1; j < lines.length; j++) {
		const name = lines[j];
		const number = phoneBook.get(name);

		if (!number) {
			console.log("Not found");
		} else {
			console.log(`${name}=${number}`);
		}
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
	processData(_input);
});
