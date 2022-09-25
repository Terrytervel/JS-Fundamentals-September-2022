function compare (firstWord, secondWord) {
    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    if (firstWord === secondWord) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
compare("Soft", "soft")