function processData(input) {
    //Enter your code here
    let userInput = input.split("\n");

    let n = parseInt(userInput[0]);
    
    for (let i = 0; i < n; i++) {    
        let currentString = userInput[i + 1];
        let l = currentString.length;
        let arr = currentString.split("");
               
        let evenPos = currentString[0];
        let oddPos = "";
        
        for (let i = 1; i < l; i++) {
            if (i % 2 === 0) {
                evenPos += arr[i];
            } else {
                oddPos += arr[i]
            }
        }
        console.log(evenPos + " " + oddPos);
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