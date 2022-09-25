function solve(input){
    let n = Number(input[0])
let maxNumber = 0;
let sum = 0;
for(let i = 1; i<= n; i++){
    let currentNumber = Number(input[i]);
    sum += currentNumber;
    if(currentNumber > maxNumber){
        maxNumber = currentNumber;
    }
}
if(maxNumber === (sum - maxNumber)){
    console.log(`Yes`);
    console.log(`Sum = ${maxNumber}`);
} else{
    console.log(`No`);
    console.log(Math.abs(maxNumber - (sum-maxNumber)));
}
}
solve([7, 3, 4, 1, 1, 2, 12, 1]);