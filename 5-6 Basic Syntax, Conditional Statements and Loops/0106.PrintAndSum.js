function printAndSum(startNumber, endNumber) {
    let sum = 0;
    let buff = "";
    for (i = startNumber; i <= endNumber; i++) {
        buff += `${i} `;
        sum += i;
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)