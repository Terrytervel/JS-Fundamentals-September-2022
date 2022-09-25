function solve(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = username.split("").reverse().join("");

    let counter = 0;
    let command = input[index];
    index++;
    while (command !== password) {
        counter++;
        console.log(`Incorrect password. Try again.`);
        if (counter === 3) {
            console.log(`"User ${username} blocked!`);
            return;
        }

        command = input[index];
        index++;
    }
    if (command === password) {
        console.log(`User ${username} logged in.`);
        return;
    }

}
solve('Acer', 'login', 'go', 'let me in', 'recA');