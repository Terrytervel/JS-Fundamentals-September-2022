function vacation(people, type, day) {
    let totalPrice = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                totalPrice = people * 8.45;
            } else if (day === "Saturday") {
                totalPrice = people * 9.80;
            } else {
                totalPrice = people * 10.46;
            }
            if (people >= 30) {
                totalPrice = 0.85 * totalPrice;
            }
            break;
        case "Business":
            if (people >= 100) {
                people -= 10
            }
            if (day === "Friday") {
                totalPrice = people * 10.90;
            } else if (day === "Saturday") {
                totalPrice = people * 15.60;
            } else {
                totalPrice = people * 16;
            }
            break;
        default:
            if (day === "Friday") {
                totalPrice = people * 15;
            } else if (day === "Saturday") {
                totalPrice = people * 20;
            } else {
                totalPrice = people * 22.50;
            }
            if (people >= 10 && people <= 20) {
                totalPrice = 0.95 * totalPrice;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday"
)