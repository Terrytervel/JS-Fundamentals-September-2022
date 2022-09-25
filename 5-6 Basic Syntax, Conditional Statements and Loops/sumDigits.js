// function sum (arg){
// let sum = 0;
// arg = String(arg);
// for(i = 0; i< arg.length; i++){
//     let currentNumber = Number(arg[i]);
//     sum += currentNumber;
// }
// console.log(sum);
// }
// sum ([5634]);

function sum (arg){
    let sum = 0;
    let totalNumber = Number(arg);
    for(let i = 0; i<4; i++){
      let currentDigit = totalNumber % 10;
      sum += currentDigit;
      totalNumber = Math.floor(totalNumber / 10)  
    }
    console.log(sum);

}
sum([5634])