"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	const n = parseInt(readLine().trim(), 10);

	const arr = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((arrTemp) => parseInt(arrTemp, 10));

	let newStr = "";

	for (let i = n - 1; i >= 0; i--) {
		let number = arr[i];
		newStr += number + " ";
	}
	console.log(newStr);
}
