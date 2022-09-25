function sum(times) {
    let currentTime = 0;
    let currentNumber = 1;
    let sum = 0;
    while (currentTime < times) {
        console.log(currentNumber);
        sum += currentNumber;
        currentNumber += 2
        currentTime++;
    }
    console.log(`Sum: ${sum}`);
}
sum(5);