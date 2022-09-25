function reverse(word) {
    let reverseWord = word.split("").reverse().join("");
    console.log(reverseWord);
}
reverse("Hello");